import { Router } from "express";
import { client } from "../connection/conn.js";
import { ObjectId } from "mongodb";

const userRouter = Router();
const collection = client.db("Take_Notes").collection("user");

/********************* Adding a new user *********************/

userRouter.post("/addUser", async (req, res) => {
  try {
  const responseData = await collection.insertOne(req.body);
  res.json(responseData);
  } catch (error) {
    res.send("ID already exists").status(404);
  }
});

/********************* Finding a user by ID *********************/

userRouter.get("/userId/:id", async (req, res) => {
  try {
    const responseData = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(responseData);
  } catch (error) {
    res.send("NO user found.....").status(404);
  }
});

/********************* Finding all users *********************/

userRouter.get("/", async (req, res) => {
  try {
  const responseData = await collection.find({}).toArray();
  res.json(responseData);
  } catch (error) {
    res.send("No users found").status(404);
  }
});

/********************* Updating a user by ID *********************/

userRouter.put("/editUser/:id", async (req, res) => {
  try {
    const responseData = await collection.updateOne(
      {
        _id: new ObjectId(req.params.id),
      },
      {
        $set: req.body,
      }
    );
    res.json(responseData);
  } catch (error) {
    res.send("Invalid user Id...").status(404);
  }
});

/********************* Deleting a user by ID *********************/

userRouter.delete("/deleteUser/:id", async (req, res) => {
  try {
    const responseData = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(responseData);
  } catch (error) {
    res.send("Invalid user ID...").status(404);
  }
});

export default userRouter;