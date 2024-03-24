import { task, types } from "hardhat/config";

task("deploy", "Deploy a Feedback contract")
    .addOptionalParam("semaphore", "Semaphore contract address", undefined, types.string)
    .addOptionalParam("logs", "Print the logs", true, types.boolean)
    .setAction(async ({ logs, semaphore: semaphoreAddress }, { ethers, run }) => {
        // If semaphoreAddress is not provided, deploy a new Semaphore contract
        if (!semaphoreAddress) {
            const { semaphore } = await run("deploy:semaphore", { logs });
            semaphoreAddress = await semaphore.getAddress();
        }

        // Get the contract factory for Feedback
        const FeedbackFactory = await ethers.getContractFactory("Feedback");

        // Deploy the Feedback contract with the semaphoreAddress
        const feedbackContract = await FeedbackFactory.deploy(semaphoreAddress);

        // Log the address of the newly deployed Feedback contract
        if (logs) {
            console.info(`Feedback contract has been deployed to: ${await feedbackContract.getAddress()}`);
        }

        return feedbackContract;
    });
