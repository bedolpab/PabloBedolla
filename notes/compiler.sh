#!/bin/bash

if [[$# -eq 0 ]] ; then
  echo 'Provide a file name ending in .tex'
  exit 1
fi

if [[ ! -f $1 ]] ; then
  echo "The file $1 does not exist"
  exit 1
fi

if [[ ${1: -4} != ".tex" ]] ; then
  echo "The file $1 is not a .tex file"
  exit 1
fi

# Run first argument
# expected to be .tex file to compile to pdf
# latexmk: LaTeX compiler
# -pdf: generate pdf file
# -pvc: preview continuously
latexmk -pdf -pvc $1
