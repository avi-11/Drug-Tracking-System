const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Track = await hre.ethers.getContractFactory("Track");
  const track = await Track.deploy();
  await track.deployed();
  console.log("track deployed to:", track.address);

  fs.writeFileSync('./config.js', `
  export const trackAddress = "${track.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });