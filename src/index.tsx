import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import MyComponent from "./components/MyComponent/MyComponent";
// don't want to use css module for this global scss
import "!style-loader!css-loader!sass-loader!./bootstrap/Index.scss";

const rootEl = document.getElementById("root");

render(
  <AppContainer>
    <MyComponent />
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./components/MyComponent/MyComponent", () => {
    const NewApp = require("./components/MyComponent/MyComponent").default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootEl
    );
  });
}
