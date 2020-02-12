import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
// import Albums from "./components/albums/albums.jsx";

const Settings = {
  ERRORS_COUNT: 3
};

// const albums = [
//   {title: `Runaway`, year: 1983, guitarCount: 2},
//   {title: `Crush`, year: 2001},
//   {title: `Slippery when wet`, year: 1988}
// ];
//
// const band = `Bon Jovi`;
// const genre = `Rock`;
// const singer = `Jon Bon Jovi`;
// const albumsCount = 10;

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,

    // <Albums
    //   albums={albums}
    //   band={band}
    //   genre={genre}
    //   albumsCount={albumsCount}
    //   singer={singer}
    // />,
    document.querySelector(`#root`)
);
