cd ../
rm -rf build
npm run buildserver
npm run buildfront
cp public/index.html build/index.html