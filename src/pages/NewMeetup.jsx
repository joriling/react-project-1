import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-project-1-ad92c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
