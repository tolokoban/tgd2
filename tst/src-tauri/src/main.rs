#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use image::codecs::webp::WebPEncoder;
use image::ImageReader;
use std::fs;
use std::io::Cursor;
use std::path::PathBuf;

fn references_dir() -> PathBuf {
    let dir = PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("..")
        .join("references");
    fs::create_dir_all(&dir).ok();
    dir
}

fn ref_path(name: &str) -> Result<PathBuf, String> {
    let dir = references_dir();
    let path = dir.join(format!("{}.webp", name));
    let canonical_dir = dir.canonicalize().map_err(|e| e.to_string())?;
    // Ensure we don't escape the references directory
    let parent = path.parent().ok_or("Invalid path")?;
    fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    let canonical_path = path
        .canonicalize()
        .unwrap_or_else(|_| canonical_dir.join(format!("{}.webp", name)));
    if !canonical_path.starts_with(&canonical_dir) {
        return Err(format!("Invalid reference name: \"{}\"", name));
    }
    Ok(path)
}

fn png_to_webp(png_data: &[u8]) -> Result<Vec<u8>, String> {
    let img = ImageReader::new(Cursor::new(png_data))
        .with_guessed_format()
        .map_err(|e| e.to_string())?
        .decode()
        .map_err(|e| e.to_string())?;
    let mut buf = Vec::new();
    let encoder = WebPEncoder::new_lossless(&mut buf);
    img.write_with_encoder(encoder).map_err(|e| e.to_string())?;
    Ok(buf)
}

#[tauri::command]
fn compare_image(name: String, image_data: Vec<u8>) -> Result<String, String> {
    let path = ref_path(&name)?;
    let new_webp = png_to_webp(&image_data)?;

    if !path.exists() {
        fs::write(&path, &new_webp).map_err(|e| e.to_string())?;
        return Ok("NEW".to_string());
    }

    let existing = fs::read(&path).map_err(|e| e.to_string())?;
    if existing == new_webp {
        Ok("SAME".to_string())
    } else {
        Ok("DIFF".to_string())
    }
}

#[tauri::command]
fn read_reference(name: String) -> Result<Option<Vec<u8>>, String> {
    let path = ref_path(&name)?;
    if !path.exists() {
        return Ok(None);
    }
    let data = fs::read(&path).map_err(|e| e.to_string())?;
    Ok(Some(data))
}

#[tauri::command]
fn delete_reference(name: String) -> Result<(), String> {
    let path = ref_path(&name)?;
    if path.exists() {
        fs::remove_file(&path).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
fn write_reference(name: String, image_data: Vec<u8>) -> Result<(), String> {
    let path = ref_path(&name)?;
    let webp = png_to_webp(&image_data)?;
    fs::write(&path, webp).map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
fn make_webp(image_data: Vec<u8>) -> Result<Vec<u8>, String> {
    png_to_webp(&image_data)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            compare_image,
            read_reference,
            delete_reference,
            write_reference,
            make_webp,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
