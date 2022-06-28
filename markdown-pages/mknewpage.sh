#!/bin/bash

# this file makes a new markdown page for the given title using the template-page
# file.
# change TITLE to the given title

# first check if any arguments are given
# if not, exit with a message that a title must be given
if [ $# -eq 0 ]
then
    echo "No title given"
    exit 1
fi

# now make a new file, replacing TITLE with the given title
# the file name should be alphanumeric, lowercase and without spaces
FILENAME=$(echo $1 | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# if the file already exists, exit with a message
if [ -f $FILENAME.md ]
then
    echo "File already exists"
    exit 1
fi

touch $FILENAME.md

cat template-page | sed "s/TITLE/$1/g" > $FILENAME.md


