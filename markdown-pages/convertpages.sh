#!/bin/bash

# this file converts all .md files to .json files using md_to_js
# IMPORTANT NOTE: CURRENTLY THIS SCRIPT DEPENDS ON https://github.com/njvack/markdown-to-json 
# AND DOES NOT WORK WITH PYTHON 3.9. I INTEND TO WRITE MY OWN VERSION OF THIS SCRIPT IN THE FUTURE.

# copies the file in ../content/index.json to ../convert/index-copy.json
cat ../content/index.json > ../content/index-copy.json

# first check if the user is me (mycf), it might not work on other machines
if [ "$USER" != "mycf" ]; then
    echo "You are not the original author. You can still use this script, if you change ./markdown-pages/convertpages.sh. Only do so if you know what you are doing."
    exit 1
fi

MDTOJS='python3.7 /Library/Frameworks/Python.framework/Versions/3.7/bin/md_to_json'

# first mirror the folder structure of the markdown-pages directory to the ../content directory
for dir in ./*; do
    if [ -d "$dir" ]; then
        mkdir -p ../content/$(basename $dir)
    fi
done

# then convert all .md files to .json files, keeping the same directory structure
for dir in ./*; do
    if [ -d "$dir" ]; then
        echo $dir
        for file in $dir/*.md; do
            echo "Converting $file to ../content/$(basename $dir)/$(basename $file .md).json"
            # check if the file already exists, if yes the ask for confirmation to overwrite it
            # if a command line argument called "true" is given, then overwrite the file without asking for confirmation
            if [ -f "../content/$(basename $dir)/$(basename $file .md).json" ]; then
                if [ "$1" != "true" ]; then
                    echo "File already exists. Do you want to overwrite it? (y/n)"
                    read -r answer
                    if [ "$answer" != "y" ]; then
                        echo "Skipping $file"
                        continue
                    fi
                fi
            fi

            $MDTOJS $file > ../content/$(basename $dir)/$(basename $file .md).json
        done
    fi
done

# also convert the files in the root directory
for file in *.md; do
    echo "Converting $file to ../content/$(basename $file .md).json"
    # check if the file already exists, if yes the ask for confirmation to overwrite it
    # if a command line argument called "true" is given, then overwrite the file without asking for confirmation
    if [ -f "../content/$(basename $file .md).json" ]; then
        if [ "$1" != "true" ]; then
            echo "File already exists. Do you want to overwrite it? (y/n)"
            read -r answer
            if [ "$answer" != "y" ]; then
                echo "Skipping $file"
                continue
            fi
        fi
    fi
    $MDTOJS $file > ../content/$(basename $file .md).json
done

mv ../content/index-copy.json ../content/index.json
