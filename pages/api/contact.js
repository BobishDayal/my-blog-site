import { MongoClient, ServerApiVersion } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    //store in the database
    const newMessage = { email, name, message };

    let client;

    try {
      const url =
        "mongodb+srv://Bobish_Dayal:4u3Em4qfXHZrEMBw@cluster0.d9l5fd0.mongodb.net/?retryWrites=true&w=majority";
      client = new MongoClient(url);
      //const dbName = "blog-site";
      await client.connect();
    } catch (error) {
      res.status(500).json({ message: "could not connect to database." });
      return;
    }

    const db = client.db("blog-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
};

export default handler;
