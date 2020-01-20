import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "./Profile";
import Splash from "./SplashScreen";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
// import SelectAttaire from "./SelectAttire";
// import PersonalizedScrubSizes from "./PersonalizedScrubSizes";
// import Measurements from "./Measurements";
// import Specialinstructions from "./Special_Instructions";
// import CheckOut from "./CheckOut";
// import MyOrder from "./Myorder";
import ConfirmedOrder from "./ConfirmedOrder";
// import SelectDesign from "./SelectDesign";
import SelectCategory from "./SelectCategory";
// import ReviewOrder from "./Review_order";
import PreviewVideo from "./VideoPreview";
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    },

    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null
      })
    },
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },

    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        header: null
      })
    },

    Splash: {
      screen: Splash,
      navigationOptions: () => ({
        header: null
      })
    },
    PreviewVideo: {
      screen: PreviewVideo,
      navigationOptions: () => ({
        header: null
      })
    },

    ConfirmedOrder: {
      screen: ConfirmedOrder,
      navigationOptions: () => ({
        header: null
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        header: null
      })
    },

    SelectCategory: {
      screen: SelectCategory,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    initialRouteName: "PreviewVideo"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
