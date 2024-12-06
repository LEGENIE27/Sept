// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public nextTokenId;

    // Constructeur modifié pour passer l'adresse au constructeur d'Ownable
    constructor(address initialOwner) ERC721("MyNFT", "MNFT") Ownable(initialOwner) {
        // La propriété de ownership est automatiquement attribuée à initialOwner
    }

    // Fonction pour mint un nouveau NFT
    function mint(address to) public onlyOwner {
        require(to != address(0), "Cannot mint to zero address");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    // Fonction pour voir le prochain ID de token (optionnel)
    function getNextTokenId() external view returns (uint256) {
        return nextTokenId;
    }
}

