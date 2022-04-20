/* const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = fs.readFileSync(".secretInfura").toString().trim(); */

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    /*     rinkeby: {
      provider: new HDWalletProvider(
        mnemonic,
        `https://rinkeby.infura.io/v3/${infuraKey}`
      ),
      gasPrice: 30000000000,
      //gas: 8721975,
      network_id: 4,
      from: "0x37411253fC18C820EE52eB679b0c91d9C603a83B",
    }, */
  },
};
