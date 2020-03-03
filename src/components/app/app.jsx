import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-scren";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import {GameType} from "../../const";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends React.PureComponent {

  _renderGameScreen() {
    const {
      maxMistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step
    } = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreenWrapped
              question={question}
              onAnswer={onUserAnswer}
            />
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreenWrapped
              question={question}
              onAnswer={onUserAnswer}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreenWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
