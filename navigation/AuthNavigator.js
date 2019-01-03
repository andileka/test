import { createStackNavigator } from "react-navigation";
import LoginScreen from "./../screens/auth/LoginScreen";
import SignupScreen from "./../screens/auth/SignupScreen";
import ForgotPasswordScreen from "./../screens/auth/ForgotPasswordScreen";

import AppStackNavigation from "./AppStackNavigation";

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  ForgotPassword: { screen: ForgotPasswordScreen },
  AppStackNavigation: { screen: AppStackNavigation }
});

export default AuthNavigator;
