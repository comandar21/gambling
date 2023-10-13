import { ethers } from "ethers";
import abi from "../../abi/abi.json";
const provider = new ethers.WebSocketProvider(
  "wss://linea-mainnet.infura.io/ws/v3/6fa8a7dcfa9d43b9aa7f123b9bdaeb97"
);

const contractAddress = "0xc87A22130c77E6b640bE992E45e405c5050f2670";
const contractAbi = abi;

export const listenToEvent = async () => {
  try {
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );

    // Event filter: Replace with the event you want to listen to
    const eventFilter = contract.filters.GuessResult();
    console.log(eventFilter);

    // Listen for events
    contract.on(eventFilter, (log, event) => {
      console.log(log);
      console.log(event);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export const guessResultWebhook = async () => {};
