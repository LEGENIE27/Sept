require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: {
        version: "0.8.24",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        sepolia: {
            url: "https://sepolia.infura.io/v3/7c7f4441eef640708f3122cbe991950a",
            accounts: ["ea6ede208de962ddbf7b5b2839c00d79847792f24e680ed00ec88c9de553572d"]
        },
    },
};
