#! /usr/bin/env python

import sys, os
import json

# For all files in the given directory this script loads them and concatonates
# their json data.

if __name__ == '__main__':
    print("Running")

    if len(sys.argv) == 1:
        print("No arguments given")
        sys.exit(1)

    directory = sys.argv[1]

    # concat the .json files into one file called concatenated.json
    concatenated = {}
    for filename in os.listdir(directory):
        if filename.endswith(".json"):
            with open(os.path.join(directory, filename)) as f:
                data = json.load(f)
                concatenated = {**concatenated, **data}

    with open(os.path.join(directory, "concatenated.json"), 'w') as f:
        json.dump(concatenated, f, indent=4)
        print(f"Concatenated files into {directory}concatenated.json")
        print("Done")
        sys.exit(0)

