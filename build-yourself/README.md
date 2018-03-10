## Paper Wallet Generator Build Instructions for OS X and Linux
Follow these instructions to manually build sensitive js code for the casinocoin paper wallet generator.

Requirements:
- [casinocoin-libjs-keypairs](https://github.com/casinocoin/casinocoin-libjs-keypairs)
- [qrcodejs](https://github.com/davidshimjs/qrcodejs)
- [browserify](https://github.com/browserify/browserify-website)

Browserify is required to create the bundle.

Check to see if browserify is installed.
`which browserify`
If you get: `browserify not found`, then install with command
`npm install -g browserify`

Run these commands to create bundle.js:
```
git clone https://github.com/cscchat/csc-paper-wallet
cd csc-paper-wallet/build-yourself/
npm install casinocoin-libjs-keypairs qrcodejs
npm install qrcodejs
browserify js/main.js -o js/bundle.js
NPM_ROOT=`npm root`
cat $NPM_ROOT/qrcodejs/qrcode.js >> js/bundle.js
```
