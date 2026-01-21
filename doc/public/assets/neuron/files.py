#!/usr/bin/env python3
from math import ceil
import os
import sys
import json


def human_size(size):
    chunk = 1024**2
    if size > chunk:
        return f" **{ceil(size / 1024)}** Kb"
    else:
        return f" {ceil(size / 1024)} Kb"

def main():
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(script_dir, "Octree.json")
    md_path = os.path.join(script_dir, "Octree.md")

    results = []
    levels = []
    for i in range(10):
        levels.append([])
    levels[0].append(os.path.getsize(os.path.join(script_dir, "Octree.glb")))
    colors = ["red", "yellow", "green", "cyan", "blue"]
    max_level = 0
    print(levels)
    
    try:
        for filename in os.listdir(script_dir):
            if filename.lower().endswith(".glb"):
                name_without_ext = os.path.splitext(filename)[0]
                # Keep only '0' and '1'
                filtered_name = "".join(char for char in name_without_ext if char in "01")
                if filtered_name:
                    results.append(filtered_name)
                    size = os.path.getsize(filename)
                    level = int(len(filtered_name) / 3)
                    max_level = max(max_level, level)
                    levels[level].append(size)
                    print(level, filtered_name, size)
        
        # Store result in the "files" variable as a comma-separated string
        files = ",".join(results)

        # 2. Open and parse Octree.json
        if not os.path.exists(json_path):
            print(f"Error: {json_path} not found.", file=sys.stderr)
            return

        with open(json_path, 'r') as f:
            data = json.load(f)

        # 3. Add/Update the "files" attribute
        data["files"] = files

        # 4. Save the changes back to the file
        with open(json_path, 'w') as f:
            # indent=4 makes the JSON file human-readable
            json.dump(data, f, indent=4)
            
        print(f"Successfully updated 'files' in {json_path}")

        lines = [
            "| Level | Triangles | Monolith | Voxels | Files | Average | Max | Total |",
            "|-------|-----------|----------|--------|-------|---------|-----|-------|"
        ]
        for level in range(max_level + 1):
            files = levels[level]
            print(f"level {level}: {len(files)} files")
            if len(files) == 0:
                break
            total = sum(files)
            new_line = f"| **{level}** _{colors[level]}_ | 0 | 0 Kb | {8**level} | {len(files)} | {human_size(total / len(files))} | {human_size(max(files))} | {human_size(total)} |"
            print(new_line)
            lines.append(new_line)

        with open(md_path, 'w') as f:
            f.write("\n".join(lines))
        
    except json.JSONDecodeError:
        print(f"Error: {json_path} contains invalid JSON.", file=sys.stderr)
    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()