import Web3, { providers } from "web3";
import { error } from "./jetking_web3";

try {
    const Web3 = require("web3");

    const web3 = new Web3(
        new providers.HttpProvider(
            "https://mainnet.infura.io/v3/687792f0f5c44409ab06b6ee455855d3"
        )
    );

    // Rest of your code...
} catch (error) {
    console.error("An error occurred:", error);
}
