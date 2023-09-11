import { Router } from "express";
import { client } from "../connection/conn.js";
import { ObjectId } from "mongodb";

const notesRouter = Router();
const collection = client.db("Take_Notes").collection("notes");

/********************* Adding a new note *********************/

notesRouter.post("/addnote", async (req, res) => {
  const responseData = await collection.insertOne(req.body);
  res.json(responseData);
});

/********************* Finding note by note ID *********************/

notesRouter.get("/:id", async (req, res) => {
  try {
    const responseData = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(responseData);
  } catch (error) {
    res.send("Invalid note ID").status(404);
  }
});

/********************* Finding all notes by user ID *********************/

notesRouter.get("/userId/:id", async (req, res) => {
  try {
    const responseData = await collection
      .find({
        user: req.params.id,
      })
      .toArray();

    res.json(responseData);
  } catch (error) {
    res.send("Invalid user ID").status(404);
  }
});

/********************* Edit Note by note id *********************/

notesRouter.put("/editNote/:id", async (req, res) => {
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
    res.send("No note found").status(404);
  }
});

/********************* Deleting note by note ID *********************/

notesRouter.delete("/deleteNote/:id", async (req, res) => {
  try {
    const responseData = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.json(responseData);
  } catch (error) {
    res.send("No note found").status(404);
  }
});
export default notesRouter;
