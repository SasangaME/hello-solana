# Guide

## 1
Add package.json

## 2
create 'src' directory
inside that `cargo new --lib program`

## 3
add dependencies to cargo.toml

## 4 -  Write Code
entrypoint : macro

## 5  Build
cd into the folder containing lib.rs cd /program/src
`cargo build-bpf`

## 6 Deploy
`solana program deploy /Users/sasangaedirisinghe/Desktop/Projects/Blockchain/Solana/Rust/hello-solana/src/program/target/deploy/program.so`

This command was generated in the console after building.

After deploying you will get the program id in the console.

Program Id: HbFqzoUsGo8eHDLRYGEXxZeEVY85csfdZ8GyErvjE71X
