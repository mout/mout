#!/bin/sh
# update gh-pages branch with latest doc files

git checkout gh-pages
rm *.html
rm -r assets_/
git checkout master doc/html
mv doc/html/* .
rm -r doc/
git add -A
git commit
git checkout master
