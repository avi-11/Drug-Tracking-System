import './App.css';
import { ethers } from 'ethers';
import {
  trackAddress
} from './config'
import track from "./artifacts/contracts/Track.sol/Track.json"

function App() {
  async function start(){
    console.log("HI2");
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const contract = new ethers.Contract(trackAddress, track.abi, provider)
    const data = await contract.owner()
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();
    console.log("HI");
    console.log(data, userAddress);
  }
  return (
    <div className="w-full bg-red-500 h-10">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={start}>Start</button>
    </div>
    
  );
}

export default App;
