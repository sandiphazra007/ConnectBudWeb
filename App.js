import React, { Component } from "react";
import MainNavigator from "./AppNavigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainNavigator />;
  }
}
