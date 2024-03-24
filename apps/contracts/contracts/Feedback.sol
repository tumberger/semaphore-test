//SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";

contract Feedback {
    ISemaphore public semaphore;

    uint256 public groupId;

    // constructor(address semaphoreAddress, uint256 _groupId) {
    //     semaphore = ISemaphore(semaphoreAddress);
    //     groupId = _groupId;

    //     semaphore.createGroup(address(this));
    // }
    constructor(address semaphoreAddress) {
        semaphore = ISemaphore(semaphoreAddress);

        // Create a new group and set its ID to the contract's groupId state variable.
        groupId = semaphore.createGroup(address(this));

    }


    function joinGroup(uint256 identityCommitment) external {
        semaphore.addMember(groupId, identityCommitment);
    }

    function sendFeedback(
        uint256 merkleTreeDepth,
        uint256 merkleTreeRoot,
        uint256 nullifier,
        uint256 feedback,
        uint256[8] calldata points
    ) external {
        ISemaphore.SemaphoreProof memory proof = ISemaphore.SemaphoreProof(
            merkleTreeDepth,
            merkleTreeRoot,
            nullifier,
            feedback,
            groupId,
            points
        );

        semaphore.validateProof(groupId, proof);
    }
}
