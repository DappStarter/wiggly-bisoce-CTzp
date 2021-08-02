require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name raise place hospital gloom civil army gentle'; 
let testAccounts = [
"0x8f15d6e6af2be46f51aea25bffa71694c49cae5aa7cf4b1a0e7f2fabaa0cd2ef",
"0x360adacce9c51fc14ce1b5e84441804dd9554ef20edd926c897c97e38dc6b2ff",
"0xac07062dc2abddbd8685659275aa59fd41cc0a058c0513fc6f0d9469bcc6f503",
"0x860050146baff13e681856b46281973d51cc40fe3cfdc0edbaaf6d69d8d69c34",
"0x067a237767a00835cddc05f975e2a30aca3aa6f1bacb56e7ab6efa02b533fc19",
"0xbd402814393a5d9a4c91ba369f5937be8824381593f2c1718a3cdf581ce188d1",
"0x47097ca28cfe1c343d447d41ec791429c1d97295937ab869f2ddde273e0e3ac9",
"0x2f4957c8301221b9d813d9b4b4ac776ec3ddc2de03ebc1e552a9a7e25c80a6c8",
"0x592686a71421e9297cc34a747b764dc6dd3177bdc623c962d76d61c2d47cd6ca",
"0x302d7c3d332d2179279b61668e71a407c10fd54fec2e5d7d2c084c67737e7e7e"
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


