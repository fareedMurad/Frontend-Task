import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import MyComponent from "../MyComponent";

it("MyComponent is rendered", () => {
  // Render App in the document
  const myComponentElement = TestUtils.renderIntoDocument(
    <MyComponent />
  );

  if (myComponentElement instanceof React.Component) {
    const appNode = ReactDOM.findDOMNode(myComponentElement);
    // Verify text content
    expect(appNode.textContent).toEqual("Hello World!Foo to the barz");
  }
});
