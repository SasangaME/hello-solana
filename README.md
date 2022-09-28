# Guide

## 1 Create Project

prerequisite: install solana dev environment, solana cli, rust, etc
refer the documentation `https://docs.solana.com/cli/install-solana-cli-tools`

create empty folder with the name of your project.
run `git init` to mark it as a git repo

`solana config get` : get config properties

## 2 Creating Directories
create 'src' directory
inside that `cargo new --lib program`

## 3 Dependencies
add dependencies to cargo.toml

## 4 Write Code
entrypoint : macro

## 5 Build
cd into the folder containing lib.rs cd /program/src
`cargo build-bpf`

## 6 Deploy

`solana program deploy /Users/sasangaedirisinghe/Desktop/Projects/Blockchain/Solana/Rust/hello-solana/src/program/target/deploy/program.so`

This command was generated in the console after building.

Run the above command to deploy to the currently selected cluster.

After deploying you will get the program id in the console.

Program Id: HbFqzoUsGo8eHDLRYGEXxZeEVY85csfdZ8GyErvjE71X

Run this command to get the running solana programs you put on the network.
`solana % solana program show --programs`

## 7 Frontend Client

Go to the root directory
run `npm init` to create the package.json file
install solana/web3 ` npm install --save @solana/web3.js`
copy everything from my package.json file: scripts, dependencies, devdependencies




