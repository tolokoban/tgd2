import bpy
import bmesh
from mathutils import Vector
import json
import os

global_count = 0
global_levels = 0

def compute_bbox(obj):
    x_min = 1e12
    x_max = -1e12
    y_min = 1e12
    y_max = -1e12
    z_min = 1e12
    z_max = -1e12
    for i, local_coord in enumerate(obj.bound_box):
        (x, y, z) = local_coord
        x_min = min(x_min, x)
        x_max = max(x_max, x)
        y_min = min(y_min, y)
        y_max = max(y_max, y)
        z_min = min(z_min, z)
        z_max = max(z_max, z)
    x = (x_max + x_min) / 2
    y = (y_max + y_min) / 2
    z = (z_max + z_min) / 2
    size_x = x_max - x_min
    size_y = y_max - y_min
    size_z = z_max - z_min
    size = max(size_x, size_y, size_z) / 2
    x_min = x - size
    x_max = x + size
    y_min = y - size
    y_max = y + size
    z_min = z - size
    z_max = z + size
    return [
        [x_min, y_min, z_min],
        [x_max, y_max, z_max]
    ]
    
def compute_center(bbox):
    (a, b) = bbox
    return (
        (a[0] + b[0]) / 2,
        (a[1] + b[1]) / 2,
        (a[2] + b[2]) / 2
    )

def create_bbox(point_a, point_b):
    center = [
        (point_a[0] + point_b[0]) / 2,
        (point_a[1] + point_b[1]) / 2,
        (point_a[2] + point_b[2]) / 2
    ]
    scale = [
        abs(point_a[0] - point_b[0]) / 2,
        abs(point_a[1] - point_b[1]) / 2,
        abs(point_a[2] - point_b[2]) / 2
    ]
    bpy.ops.mesh.primitive_cube_add(location=center)
    obj = bpy.context.active_object
    obj.name = "bbox"
    obj.scale = scale
    obj.display_type = 'WIRE'
    return obj
    
    
def save_mesh_as_glb(obj):
    """
    Exports the given object to GLB in the same folder as the .blend file.
    Filename: [Object_Name].glb
    Settings: Normals included, No Materials, Y+ Up, Draco Compression.
    """
    # 1. Check if the Blender file is saved
    blend_file_path = bpy.data.filepath
    if not blend_file_path:
        print("Error: Please save your Blender file before running this script.")
        return

    # 2. Get the directory of the current blend file
    directory = os.path.dirname(blend_file_path)
    
    # 3. Construct the full export path
    filename = f"{obj.name}.glb"
    export_path = os.path.join(directory, "Octree", filename)

    # 4. Handle selection for export
    bpy.ops.object.select_all(action='DESELECT')
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj

    # 5. Export with your specific requirements
    bpy.ops.export_scene.gltf(
        filepath=export_path,
        export_format='GLB',
        use_selection=True,
        export_yup=False,
        export_normals=True,
        export_materials='NONE',
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6
    )
    print(f"Successfully exported: {export_path}")

# --- Example of how to call it ---
# active_obj = bpy.context.active_object
# if active_obj:
#     save_mesh_as_glb(active_obj)

def remove(obj):
    bpy.data.objects.remove(obj, do_unlink=True)

def bisect(obj_parent, normal, center):
    children = []
    for part in (0, 1):    
        obj = obj_parent.copy()
        obj.data = obj_parent.data.copy()
        obj.name = obj_parent.name + str(part)
        bpy.context.collection.objects.link(obj)
            # Create a new BMesh from the object data
        bm = bmesh.new()
        bm.from_mesh(obj.data)
        result = bmesh.ops.bisect_plane(
            bm,
            geom=bm.verts[:] + bm.edges[:] + bm.faces[:],
            plane_co=Vector(center),
            plane_no=normal,
            clear_inner=(part == 1),
            clear_outer=(part == 0)
        )
        bm.to_mesh(obj.data)
        bm.free()
        children.append(obj)
    remove(obj_parent)
    return children

def slice_z(obj_parent, bbox, levels, level):
    if level < levels:
        center = compute_center(bbox)
        normal = (0, 0, 1)
        (obj0, obj1) = bisect(obj_parent, normal, center)
        if len(obj0.data.vertices) == 0:
            bpy.data.objects.remove(obj0, do_unlink=True)
        else:
            bbox0 = (bbox[0][:], bbox[1][:])
            bbox0[1][2] = center[2]
            slice_z(obj0, bbox0, levels, level + 1)
        if len(obj1.data.vertices) == 0:
            bpy.data.objects.remove(obj1, do_unlink=True)
        else:            
            bbox1 = (bbox[0][:], bbox[1][:])
            bbox1[0][2] = center[2]
            slice_z(obj1, bbox1, levels, level + 1)
    else:
        print(f"Block {obj_parent.name} has {len(obj_parent.data.vertices)} vertices")
        save_mesh_as_glb(obj_parent)
        
def slice_y(obj_parent, bbox, levels, level):
    if level < levels:
        center = compute_center(bbox)
        normal = (0, 1, 0)
        (obj0, obj1) = bisect(obj_parent, normal, center)
        if len(obj0.data.vertices) == 0:
            bpy.data.objects.remove(obj0, do_unlink=True)
        else:
            bbox0 = (bbox[0][:], bbox[1][:])
            bbox0[1][1] = center[1]
            slice_y(obj0, bbox0, levels, level + 1)
        if len(obj1.data.vertices) == 0:
            bpy.data.objects.remove(obj1, do_unlink=True)
        else:            
            bbox1 = (bbox[0][:], bbox[1][:])
            bbox1[0][1] = center[1]
            slice_y(obj1, bbox1, levels, level + 1)
    else:
        slice_z(obj_parent, bbox, levels, 0)    
    
def slice_x(obj_parent, bbox, levels, level):
    if level < levels:
        center = compute_center(bbox)
        normal = (1, 0, 0)
        (obj0, obj1) = bisect(obj_parent, normal, center)
        if len(obj0.data.vertices) == 0:
            bpy.data.objects.remove(obj0, do_unlink=True)
        else:
            bbox0 = (bbox[0][:], bbox[1][:])
            bbox0[1][0] = center[0]
            slice_x(obj0, bbox0, levels, level + 1)
        if len(obj1.data.vertices) == 0:
            bpy.data.objects.remove(obj1, do_unlink=True)
        else:            
            bbox1 = (bbox[0][:], bbox[1][:])
            bbox1[0][0] = center[0]
            slice_x(obj1, bbox1, levels, level + 1)
    else:
        slice_y(obj_parent, bbox, levels, 0)    
    
def slice(obj, levels):
    global_count = 0
    global_levels = 0
    bbox = compute_bbox(obj)
    obj.name = "Octree"
    slice_x(obj, bbox, levels, 0)

def go():
    # --- Main Execution ---
    active_obj = bpy.context.active_object

    if active_obj and active_obj.type == 'MESH':
        bbox = compute_bbox(active_obj)
        blend_filepath = bpy.data.filepath
        if not blend_filepath:
            print("Error: Save your Blender file first to define a directory!")
            return
        directory = os.path.dirname(blend_filepath)
        root = os.path.join(directory, "Octree")
        if not os.path.exists(root):
            os.mkdir(root)
        target_path = os.path.join(root, "Octree.json")
        with open(target_path, 'w') as f:
            json.dump({
              "bbox": {
                "min": bbox[0],
                "max": bbox[1]
              }
            }, f, indent=4)    
    
        obj = active_obj.copy()
        obj.data = active_obj.data.copy()
        obj.name = "Octree"
        bpy.context.collection.objects.link(obj)
        slice(obj, 4)
    else:
        print("Error: No active object!")
        
go()