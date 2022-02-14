require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan raise ranch comic hunt drop slot gate'; 
let testAccounts = [
"0x971db1b082b2d62953ebd7ab540cbc02d0263fcac29c17658f94b517e0bd4f53",
"0x56f6e3ec99f247af9b57486224a48fc8004f98e85e2757d35d40f0078c45c7f7",
"0x750a37ff061a428eb047a6c71d386e0f4ac2876775578a5a58504c468776cdac",
"0x056503cacdd8ac778b83a62c55e274ef0902294d42e16c55364a585f0e819ca7",
"0x6e26f05a6a75fa8107839e5d2fcbed11921458ea73ce85a246222affbe47a44a",
"0xacd4e5853e63578597f1336fe252986c231d847704622be2ecad64192be9a2d8",
"0x6276812ed4030a775adf9bc8d65fe624dda0a3283c4225a54425910f7569e007",
"0x27e47580475a9622c7b21cef8beaa8ff2f23bda39bb341cbc266440e66d8bf55",
"0x34ee82ddeaf9dc292bc6eee6ce920f35d9e916e2370130904f35b5b329aa7815",
"0x06dcd204a16c4ab74e20306a3e4c78ff94c6a2e1efa0c4c29379cff7fdb3ea92"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


