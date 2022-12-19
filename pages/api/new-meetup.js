import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(
        `mongodb+srv://greeny:${process.env.DB_PASSWORD}@greeny.z2jivg0.mongodb.net/meetup?retryWrites=true&w=majority`
      );
      const db = client.db();
      const meetupColl = db.collection("meetups");
      const result = await meetupColl.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({ status: "success" });
    } catch (er) {
      res.status(500).json({ status: "error", error: er.message });
    }
  }
}

export default handler;
