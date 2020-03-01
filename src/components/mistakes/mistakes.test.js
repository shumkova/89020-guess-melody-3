import renderer from "react-test-renderer";
import Mistakes from "./mistakes";

describe(`Mistakes should render correctly`, () => {
  it(`With one zero count`, () => {
    const tree = renderer
      .create(<Mistakes
        count={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one one count`, () => {
    const tree = renderer
      .create(<Mistakes
        count={1}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
