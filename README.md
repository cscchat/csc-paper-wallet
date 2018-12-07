**coldwallet.html checksum SHA1: 2610de78db06a19930e48de4d3f02725e0bfd805**

## Tutorial: How to securely store CSC on a paper wallet

### What is a CasinoCoin wallet?

CasinoCoin wallets look similar to bitcoin wallets - they consist of public and private keys. There are however some key differences.

CasinoCoin wallets are deterministic by design and are derived from the wallet **seed**, which is also referred to as the **secret key** in the CasinoCoin community. A CasinoCoin wallet seed is nothing more than random bytes, represented as a string that starts with **s**. Here's an example of a wallet seed: _ssXsEHoD2rh5n9J1iXnen3dxCPxEu_. One CasinoCoin seed is designed to be able to generate multiple private / public key pairs, however practically all CasinoCoin wallet implementations use one CasinoCoin seed per CasinoCoin address.

You'll already likely be familiar with the CasinoCoin address, which is where other people send CasinoCoin to you. A CasinoCoin address starts with the letter **c** and looks like this: _ccnAHpas2yLeSvzsCYbMp9t9KuS1xFRyPY_. Since the CasinoCoin address can be mathematically derived from the account seed, it is only crucial to backup the wallet seed (secret key).

### What is a paper wallet?

Paper wallets are secure backups of cryptocurrency wallets. CSC and other funds on your CasinoCoin wallet are truly secure only when you have full control of the CasinoCoin secret key.

A paper wallet stores a new, randomly generated CasinoCoin secret key, represented as a string and as a **QR code on paper**. For convenience, a CasinoCoin address is also printed on a paper wallet. Paper wallets are meant to be stored offline in a safe place, such as a safe deposit box. Some people refer to this as **cold storage** or as **cold wallet**. Paper wallets can either be generated securely in an offline environment or conveniently using an online paper wallet generator, which is a little bit less secure.

### How to create a CasinoCoin paper wallet offline?

_This tutorial requires a higher level of technical knowledge._

1.  Get a live linux distro such as TAILS (https://tails.boum.org/download/index.en.html) and burn to disk/usb. Verify the TAILS checksum.
2.  Grab the latest CSC coldwallet-SHA1-....html release file at https://github.com/cscchat/csc-paper-wallet and put it on a disk/USB. Verify the coldwallet-SHA1-....html file checksum. [Hint: `wget https://raw.githubusercontent.com/cscchat/csc-paper-wallet/master/coldwallet-SHA1-....html`, `shasum coldwallet-SHA1-....html`]
3.  Disconnect from internet and reboot your computer with TAILS disk loaded and log in.
4.  Open coldwallet html file in a reputable web browser such as Chrome or Firefox.
5.  Print the generated paper wallet. If you don't have a printer, store it on a dedicated USB that you will keep offline.
6.  You can save your CasinoCoin address (NOT the secret key) whereever to conveniently monitor the balance on your paper wallet.
7.  Reboot, now you can safely send CSC to CasinoCoin address of the paper wallet.

### How to create a CasinoCoin paper wallet online?

_This tutorial doesn't require much technical knowledge._

1.  Navigate to https://ripply.eu/coldwallet.html
2.  Copy the ripple address (NOT the secret key) and save it for later, to conveniently monitor the balance on your paper wallet
3.  Click "Print".
4.  Store the printed wallet in a safe place.
5.  Now you can send XRP to ripple address of the paper wallet.
