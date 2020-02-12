import React from "react";
import PropTypes from "prop-types";

const APPROVED_GENRES = [`Rock`, `Folk`, `Pop`];

const Albums = ({albums, band, genre, albumsCount, singer}) => (
  <React.Fragment>
    <h1>{band}</h1>
    <ul>
      {albums.map((album, index) => (
        <li key={album + index}>{album.title}</li>
      ))}
    </ul>
    <p>Группа играет в жанре: {genre}</p>
    <p>Вокалист группы: {singer}</p>
    <p>Количество альбомов: {albumsCount}</p>
  </React.Fragment>
);

Albums.defaultProps = {
  singer: `Unknown`,
};

Albums.propTypes = {
  band: PropTypes.string.isRequired,

  albums: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
      })
  ).isRequired,

  genre: PropTypes.oneOf(APPROVED_GENRES),
  albumsCount: PropTypes.number.isRequired,
  singer: PropTypes.string.isRequired,
};

export default Albums;
