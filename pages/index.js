import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // Fetch data from the server or API

//   return {
//     props: {
//       meetups: DUMMY_LIST,
//     }
// }

export async function getStaticProps() {
  // Fetch data from the server or API
  try {
    const client = await MongoClient.connect(
      `mongodb+srv://greeny:${process.env.DB_PASSWORD}@greeny.z2jivg0.mongodb.net/meetup?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupColl = db.collection("meetups");
    const result = await meetupColl.find().toArray();
    console.log(result);
    client.close();
    return {
      props: {
        meetups: result.map((meet) => {
          return {
            id: meet._id.toString(),
            title: meet.title,
            image: meet.image,
            description: meet.description,
            address: meet.address,
          };
        }),
      },
      revalidate: 1,
    };
  } catch (er) {
    console.log(er.message);
  }
}

export default Home;
