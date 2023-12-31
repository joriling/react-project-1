import { useContext } from "react";
import FavoritesContext from "../stores/favorites-context";
import MeetupList from "../components/meetup/MeetupList";

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
