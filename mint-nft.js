async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.attach("0x0561a9626EcF7B98170534d264d51bF10A4942F0"); // Adresse de ton contrat déployé

    const tx = await myNFT.mint("0xcf08323517e8f0b2b2567489aE19cd3D8F96B0cF"); // Remplace par ton adresse Ethereum
    await tx.wait();

    console.log("NFT créé et envoyé à votre portefeuille");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
