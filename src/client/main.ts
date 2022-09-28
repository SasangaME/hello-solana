import {
    Keypair,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
    clusterApiUrl
} from '@solana/web3.js';
import fs from 'mz/fs';
import path from 'path';

const PROGRAM_KEYPAIR_PATH = '/Users/sasangaedirisinghe/.config/solana/id.json';

async function main() {
    console.log("Launching client...");
    const PROGRAM_ID = "bFqzoUsGo8eHDLRYGEXxZeEVY85csfdZ8GyErvjE71X";
    const SOLANA_CLUSTER = "devnet";
    const KEYPAIR_PATH = "/Users/sasangaedirisinghe/.config/solana/id.json";

    /*
    Connect to Solana DEV net
    */
    let connection = new Connection('https://api.devnet.solana.com', 'confirmed');

    /*
    Get our program's public key
    */
    const secretKeyString = await fs.readFile(PROGRAM_KEYPAIR_PATH, { encoding: 'utf8' });
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    const programKeypair = Keypair.fromSecretKey(secretKey);
    let programId: PublicKey = programKeypair.publicKey;

    /*
    Generate an account (keypair) to transact with our program
    */
}

main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);