// used to test smart contracts
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/RMyyHf8y28CTt_WyWTQlr8PLrzcmwb9E',
      accounts: ["a62728a47a6ad9a52a9d86be15efd93fb4ee0dc140e641725dfb6d6315c66510"]
    }
  }
}

// npx hardhat run .\scripts\deploy.js --network sepolia
// cmd used to deploy smart contract