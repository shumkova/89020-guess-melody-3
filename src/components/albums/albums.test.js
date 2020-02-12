import React from "react";
import renderer from "react-test-renderer";
import Albums from "./albums";

const albums = [
  {title: `Night Songs`, year: 1986},
  {title: `Long Cold Winter `, year: 1988},
  {title: `Heartbreak Station`, year: 1990}
];

const band = `Cinderella`;
const genre = `Rock`;
const albumsCount = 5;

it(`<Albums /> should render Cinderella`, () => {
  const tree = renderer
    .create(<Albums
      albums={albums}
      band={band}
      genre={genre}
      albumsCount={albumsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
