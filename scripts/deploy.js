async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Déploiement de MyNFT avec l'adresse du déployeur
  const MyNFTContract = await ethers.getContractFactory("MyNFT");
  const myNFTContract = await MyNFTContract.deploy(deployer.address);

  console.log("MyNFT Contract deployed to:", myNFTContract.address);

  // Déploiement de Greeter (optionnel)
  const GreeterContract = await ethers.getContractFactory("Greeter");
  const greeterContract = await GreeterContract.deploy("Hello, World!");

  console.log("Greeter Contract deployed to:", greeterContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
