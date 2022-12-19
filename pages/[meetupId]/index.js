import { MongoClient, ObjectId } from "mongodb";

import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage({ meetupsData }) {
  console.log(process.env.DB_PASSWORD);
  return (
    <MeetupDetails
      title={meetupsData.title}
      image={meetupsData.image}
      description={meetupsData.description}
      address={meetupsData.address}
    />
  );
}

async function getMeetups(id = null) {
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://greeny:${process.env.DB_PASSWORD}@greeny.z2jivg0.mongodb.net/meetup?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupColl = db.collection("meetups");
    let result;
    if (!id) {
      result = await meetupColl.find().toArray();
    } else {
      result = await meetupColl.findOne({ _id: ObjectId(id) });
      result = [result];
    }
    const serializedResult = result.map((meet) => {
      return {
        id: meet._id.toString(),
        title: meet.title,
        image: meet.image,
        description: meet.description,
        address: meet.address,
      };
    });
    client.close();
    return serializedResult;
  } catch (er) {
    console.log(er.message);
  }
}

export async function getStaticPaths() {
  const meetups = await getMeetups();
  return {
    paths: meetups.map((meet) => {
      return {
        params: {
          meetupId: meet.id,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetch data from the server or API
  try {
    const meetupId = context.params.meetupId;
    const meetupsData = await getMeetups(meetupId);
    return {
      props: {
        meetupsData: meetupsData[0],
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}

export default MeetupDetailsPage;
