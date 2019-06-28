import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./login";
import SignUpScreen from "./signup";

export const AppNavigator = createStackNavigator({
  LoginScreen: LoginScreen,
  SignUpScreen: SignUpScreen
});
const MainNavigator = createAppContainer(AppNavigator);
export default MainNavigator;
