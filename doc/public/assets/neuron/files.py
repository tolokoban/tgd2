#!/usr/bin/env python3
import os
import sys
import json

def main():
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(script_dir, "Octree.json")
    
    results = []
    
    # 1. Process the .glb files
    try:
        for filename in os.listdir(script_dir):
            if filename.lower().endswith(".glb"):
                name_without_ext = os.path.splitext(filename)[0]
                # Keep only '0' and '1'
                filtered_name = "".join(char for char in name_without_ext if char in "01")
                if filtered_name:
                    results.append(filtered_name)
        
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
        
    except json.JSONDecodeError:
        print(f"Error: {json_path} contains invalid JSON.", file=sys.stderr)
    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()