#!/bin/bash
query="$1"
echo $query
for file in $(find . -type f -name result.log\*)
do
    cat $file | bunyan -c $query 
done