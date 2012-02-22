#!/bin/sh
# update gh-pages branch with latest doc files

git checkout gh-pages
rm *.html
rm -r assets_/
git checkout master doc
mv doc/* .
rmdir doc
git add -A
git commit
git checkout master
