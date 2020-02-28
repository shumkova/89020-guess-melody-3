import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer";
import App from "./components/app/app";
import questions from "./mocks/questions";
// import Albums from "./components/albums/albums";

const Settings = {
  ERRORS_COUNT: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={questions}
      />
    </Provider>,

    document.querySelector(`#root`)
);
