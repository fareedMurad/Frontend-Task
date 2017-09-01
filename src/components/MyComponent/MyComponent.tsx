import * as React from "react";

const styles = require("./MyComponent.scss");
const reactLogo = require("./img/react_logo.svg");

export interface MyComponentProps {
}

export default class MyComponent extends React.Component<MyComponentProps, {}> {
  render() {
    return <div className={`app ${styles.app}`}>
      <img src={reactLogo} />
      <h1>Hello World!</h1>
      <p className="btn btn-primary">Foo to the barz</p>
    </div>;
  }
}
