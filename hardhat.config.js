require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/YOGVtSOUdPSFWoa8pRGvdbOf9sJyBdjE",
      accounts: {
        mnemonic:
          "depth pyramid cradle panda hurdle neglect shock link glue carbon rescue siege",
      },
    },
  },
};
