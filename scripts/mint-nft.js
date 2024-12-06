async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.attach("0x0561a9626EcF7B98170534d264d51bF10A4942F0"); // Adresse de ton contrat déployé

    const tx = await myNFT.mint("0xCEc96C488651D5f405f38Ac40EfD7f3c61Bad01e"); // Remplace par ton adresse Ethereum
    await tx.wait();

    console.log("NFT créé et envoyé à votre portefeuille");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
