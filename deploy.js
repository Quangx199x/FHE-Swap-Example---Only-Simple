const hre = require("hardhat");

async function main() {
  const FHESwap = await hre.ethers.getContractFactory("FHESwap");
  const swap = await FHESwap.deploy("0xTokenA_Address", "0xTokenB_Address");
  await swap.waitForDeployment();
  console.log("FHESwap deployed to:", await swap.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
