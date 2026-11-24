#!/bin/sh
# Run ONCE from inside your repo folder, AFTER unzipping shop-cleanup.zip over it.
# It only moves files (git mv), so you can undo everything with:  git reset --hard HEAD
# Anything it can't find is skipped and reported, nothing is deleted for good.

mv_if() { if [ -e "$1" ]; then mkdir -p "$(dirname "$2")"; git mv "$1" "$2" && echo "moved   $1  ->  $2"; else echo "skipped $1 (not found)"; fi; }

# 1. everything you listen to goes in worlds/
if [ -d ambience ] && [ ! -d worlds ]; then git mv ambience worlds && echo "moved   ambience/  ->  worlds/"; else echo "skipped ambience -> worlds (no ambience/ folder, or worlds/ already exists)"; fi
mv_if free/bear-ambience   worlds/bear-ambience
mv_if free/red-thread      worlds/red-thread
mv_if img/free-bear.jpg    worlds/thumbs/bear.jpg
mv_if img/free-thread.jpg  worlds/thumbs/red-thread.jpg
mv_if img/pier-cove.png    worlds/thumbs/pier.png

# 2. not listed any more: tucked away in _unlisted/ (not linked from the site)
mv_if worlds/thumbs/rain.png    _unlisted/rain.png
mv_if worlds/thumbs/oasis.png   _unlisted/oasis.png
mv_if worlds/rain               _unlisted/rain
mv_if worlds/oasis              _unlisted/oasis
mv_if img/muscovy-duck.png      _unlisted/muscovy-duck.png

# 3. the website bundle gets its own folder
for n in bundle cv music links clock portfolio; do mv_if img/tpl-$n.jpg img/templates/bundle/tpl-$n.jpg; done
mv_if img/tpl-orbit.jpg img/templates/tpl-orbit.jpg

# 4. the old Free page is gone (Free is a tag now)
[ -e shop/free.html ] && git rm -q -f shop/free.html && echo "removed shop/free.html"

echo; echo "Done. Now run:  git add -A && git commit -m 'Tidy: worlds folder, bundle folder, free tag' && git push"
