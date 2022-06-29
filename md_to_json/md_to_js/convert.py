#!/usr/bin/env python3
import json
import ruamel.yaml as yaml
import sys


if __name__ == '__main__':
    file = sys.argv[1]
    output_file = sys.argv[2]
    
    with open(file, 'r') as io, open(output_file, 'w') as json_out:
        content = io.read()
        yaml_obj = yaml.safe_load(content)
        json_obj = json.dumps(yaml_obj, indent=4)
        json_out.write(json_obj)

