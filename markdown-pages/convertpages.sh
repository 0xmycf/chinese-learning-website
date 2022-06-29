#!/bin/bash

# this file converts all .md files to .json files using the ../md_to_json/md_to_js/convert.py script

# copies the file in ../content/index.json to ../convert/index-copy.json
cat ../content/index.json > ../content/index-copy.json

# first mirror the folder structure of the markdown-pages directory to the ../content directory
for dir in ./*; do
    if [ -d "$dir" ]; then
        mkdir -p ../content/$(basename $dir)
    fi
done

# then convert all .yml files to .json files, keeping the same directory structure
# the python command is python3 ../md_to_json/md_to_js/convert.py <input_file> <output_file>
for dir in ./*; do
    if [ -d "$dir" ]; then
        for file in $dir/*.yml; do
            # check if the file already exists, if yes the ask for confirmation to overwrite it
            # if a command line argument called "true" is given, then overwrite the file without asking for confirmation
            if [ -f "../content/$(basename $dir)/$(basename $file .yml).json" ] && [ "$1" != "true" ]; then
                echo "File already exists: ../content/$(basename $dir)/$(basename $file .yml).json"
                echo "Do you want to overwrite it? (y/n)"
                read -r answer
                if [ "$answer" != "y" ]; then
                    continue
                fi
            fi
            python3 ../md_to_json/md_to_js/convert.py $file ../content/$(basename $dir)/$(basename $file .yml).json
        done
    fi
done


# do the same for all files in the ./ directory which are yml files
for file in `find ./*.yml`; do
    # check if the file already exists, if yes the ask for confirmation to overwrite it
    # if a command line argument called "true" is given, then overwrite the file without asking for confirmation
    if [ -f "../content/$(basename $file .yml).json" ] && [ "$1" != "true" ]; then
        echo "File already exists: ../content/$(basename $file .yml).json"
        echo "Do you want to overwrite it? (y/n)"
        read -r answer
        if [ "$answer" != "y" ]; then
            continue
        fi
    fi
    python3 ../md_to_json/md_to_js/convert.py $file ../content/$(basename $file .yml).json
done










mv ../content/index-copy.json ../content/index.json
