// const {MongoClient, ServerApiVersion}  = require("mongodb");
// const dotenv = require("dotenv");
// const path = require("path");

import { MongoClient,ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config()


const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connect = async () => {
  try {

    await client.connect();
    console.log("Connection established...");

  } catch (error) {

    console.log(error);

  }
}

export {client,connect}