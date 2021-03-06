#/bin/bash -ue

in=logo.svg

tmp=$(mktemp -d)
trap "rm -rf $tmp" EXIT
flags="-background none"
convert $flags -resize x512 $in public/logo512.png
convert $flags -resize x192 $in public/logo192.png
convert $flags -resize x16 -gravity center -crop 16x16+0+0 -flatten -colors 256 $in $tmp/favicon-16x16.ico
convert $flags -resize x32 -gravity center -crop 32x32+0+0 -flatten -colors 256 $in $tmp/favicon-32x32.ico
convert $flags $tmp/favicon-16x16.ico $tmp/favicon-32x32.ico public/favicon.ico
