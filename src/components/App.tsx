import * as React from "react";

const styles = require("./App.scss");
const reactLogo = require("./react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <div className={`app ${styles.app}`}>
            <img src={reactLogo}/>
            <h1>Hello World!</h1>
            <p>Foo to the barz</p>
        </div>;
    }
}
