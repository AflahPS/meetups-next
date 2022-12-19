import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    // console.log(meetupData);
    const result = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await result.json();
    console.log(responseData);
    if (responseData.status === "success") router.push("/");
    else router.push("/new-meetup");
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
}

export default NewMeetupPage;
