import { ethers } from "hardhat";

async function main() {
  const lock = await ethers.deployContract("WIN", ["0x2cB6914d35A1D88c4f6E35Bf8caB3d78fb295FAC"]); //wallet add

  await lock.waitForDeployment();

  console.log(
    'Token deployed to ${lock.target}'
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});