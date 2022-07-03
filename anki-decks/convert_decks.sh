#!/bin/bash
# This script converts all .json anki decks to a for my website usable representation.
# It uses the python executable in in the path:
# ../python/anki_converter/anki_converter/anki_converter_exe.py

echo ""
echo "Converting all .json anki decks to a for my website usable representation."
echo ""

# if the .out folder does not exist, create it
if [ ! -d "./out" ]; then
    mkdir ./out
fi

# create the backup folder in case its not there
if [ ! -d "./backup" ]; then
    mkdir ./backup
fi

for file in `ls ./*.json`; do
    echo "Converting $file"
    # convert the file to a file in the folder .out
    python3 ../python/anki_converter/anki_converter/anki_converter_exe.py $file ./out/$file json "../content/dict.json"
done

# call the concat_dicts.py script to concatenate all the .out files into one file
python3 ../python/concat_dicts.py ./out/

# then move the concatenated file to the content folder
# backing up the old file first
mv ../content/dict.json ./backup/dict.backup.json
mv ./out/concatenated.json ../content/dict.json
