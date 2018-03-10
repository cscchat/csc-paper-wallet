var rk = require('casinocoin-libjs-keypairs');

window.generateWallet = function(){
  var seed = rk.generateSeed();
  var keypair = rk.deriveKeypair(seed);
  var address = rk.deriveAddress(keypair.publicKey);
  return {"address" : address, "secret" : seed};
}
