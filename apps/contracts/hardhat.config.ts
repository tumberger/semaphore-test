import { HardhatUserConfig } from "hardhat/config"
import { NetworksUserConfig } from "hardhat/types"
import "@nomicfoundation/hardhat-toolbox"
import { config as dotenvConfig } from "dotenv"
import { resolve } from "path"
import "@semaphore-protocol/hardhat"
import "./tasks/deploy"

dotenvConfig({ path: resolve(__dirname, "../../.env") })

function getNetworks(): NetworksUserConfig {
    if (!process.env.INFURA_API_KEY || !process.env.ETHEREUM_PRIVATE_KEY) {
        return {}
    }

    const accounts = [`0x${process.env.ETHEREUM_PRIVATE_KEY}`]
    const infuraApiKey = process.env.INFURA_API_KEY
    const defaultGasLimit = 3000000; // A more reasonable gas limit; adjust as necessary

    return {
        sepolia: {
            url: `https://sepolia.infura.io/v3/${infuraApiKey}`,
            chainId: 11155111,
            accounts
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${infuraApiKey}`,
            chainId: 80001,
            accounts,
            gas: defaultGasLimit
        },
        "optimism-sepolia": {
            url: `https://optimism-sepolia.infura.io/v3/${infuraApiKey}`,
            chainId: 11155420,
            accounts,
            gas: defaultGasLimit
        },
        "arbitrum-sepolia": {
            url: "https://sepolia-rollup.arbitrum.io/rpc",
            chainId: 421614,
            accounts,
            gas: defaultGasLimit
        },
        arbitrum: {
            url: "https://arb1.arbitrum.io/rpc",
            chainId: 42161,
            accounts,
            gas: defaultGasLimit
        }
    }
}

const config: HardhatUserConfig = {
    solidity: "0.8.23",
    defaultNetwork: process.env.DEFAULT_NETWORK || "localhost",
    networks: {
        hardhat: {
            chainId: 1337,
            blockGasLimit: 1099511627775,
            allowUnlimitedContractSize: true
        },
        ...getNetworks()
    },
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS === "true",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY
    },
    typechain: {
        target: "ethers-v6"
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    },
    sourcify: {
        enabled: true
    }
}

export default config
