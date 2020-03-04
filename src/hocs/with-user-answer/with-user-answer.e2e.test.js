import {shallow} from "enzyme";
import withUserAnswer from "./with-user-answer";

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    question={mock.question}
    onAnswer={() => {}}
  />);

  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(0, true);
  expect(wrapper.props().userAnswers).toEqual([true, false, false, false]);

  wrapper.props().onChange(0, false);
  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(1, true);
  expect(wrapper.props().userAnswers).toEqual([false, true, false, false]);
});
