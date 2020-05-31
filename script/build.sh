rm -rf build
npm run buildserver
npm run buildfront
cp public/index.html build/index.html
pm2 delete server
pm2 start build/server.js