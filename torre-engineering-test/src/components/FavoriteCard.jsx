import "./FavoriteCard.css";
import filledStar from "../assets/filled_star.svg";

//Component that represents each specific person chosen as favorite
export const FavoriteCard = ({ favorite, handleFavoritesChange }) => {
  function unFavorite() {
    handleFavoritesChange(
      favorite.username,
      favorite.name,
      favorite.headline,
      favorite.imageUrl,
    );
  }

  return (
    <div className="favorite-card">
      <img
        src={filledStar}
        className="card-star"
        alt="Add/remove favorite"
        onClick={unFavorite}
      />
      <a
        className="profile-genome"
        href={`https://torre.ai/${favorite.username}`}
        target="_blank"
      >
        <img
          className="card-profile-picture"
          src={favorite.imageUrl}
          alt="Profile Picture"
        />
        <div className="info-container">
          <div className="name">{favorite.name}</div>
          <div className="headline">{favorite.headline}</div>
        </div>
      </a>
    </div>
  );
};
