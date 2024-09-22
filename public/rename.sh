#!/bin/bash

DIRECTORY="PhotoShoot"

for folder in "$DIRECTORY"/*; do
    if [ -d "$folder" ]; then
        # Trim leading and trailing spaces from folder name
        folder=$(echo "$folder" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')

        # Check if there are files with spaces in their names
        files_with_spaces=$(find "$folder" -type f -name "* *" -print -quit)
        
        # If there are files with spaces, remove spaces from file names
        if [ -n "$files_with_spaces" ]; then
            find "$folder" -type f -name "* *" -exec bash -c 'mv "$0" "${0// /_}"' {} \;
        fi
    fi
done
