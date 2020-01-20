import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";

import GloabalHeader from "../components/GlobalHeader";

import AntDesign from "react-native-vector-icons/AntDesign";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Video from "react-native-video";
export default class Home extends React.Component {
  state = {
    isBuffering: false,
    paused: true,
    image: true
  };

  onBuffer() {
    this.setState({ isBuffering: true });
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* <Text>ssss {this.state.data} </Text> */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            arrow={true}
            // BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="PREVIEW"
          />
          <TouchableOpacity
            style={{
              height: 270,
              width: 500
              // borderWidth: 1
            }}
            onPress={() => {
              this.setState({ paused: !this.state.paused, image: false });
            }}
          >
            {this.state.image ? (
              <Image
                source={require("../../assets/video/Capture.png")}
                style={
                  {
                    //   height: 200
                    // width: 500
                    // borderWidth: 1,
                    // alignSelf: "center"
                  }
                }
                resizeMode="stretch"
              />
            ) : (
              <View>
                <Video
                  //   source={"../../assets/video/drone.mp4"}
                  source={require("../../assets/video/stem.mp4")}
                  ref={ref => {
                    this.player = ref;
                  }} // Store reference
                  onBuffer={this.onBuffer}
                  // fullscreen={true}
                  paused={this.state.paused}
                  style={{
                    height: 270,
                    width: 500,
                    // borderWidth: 1,
                    // alignSelf: "center"
                    alignItems: "center"
                  }}
                />
                <TouchableOpacity
                  style={{
                    // height: 20,
                    // width: 20,
                    // backgroundColor: "red",
                    position: "absolute",
                    // bottom: 0,
                    top: 90,
                    left: 150
                  }}
                  onPress={() => {
                    this.setState({ paused: !this.state.paused });
                  }}
                >
                  {this.state.paused ? (
                    <AntDesign name="play" color="white" size={55} />
                  ) : null}
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>

          <View
            style={{
              // color: "black",
              // fontSize: 25,
              // fontWeight: "500",
              // // marginLeft: 10,
              // marginTop: 10
              paddingLeft: 10
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontWeight: "500",
                // marginLeft: 10,
                marginTop: 10,
                paddingTop: 10
              }}
            >
              {" "}
              Stem Eduction
            </Text>
            <Text
              style={{
                color: "#808080",
                fontSize: 15,
                // fontWeight: "500",
                // marginLeft: 10,
                paddingVertical: 2,
                marginTop: 5
              }}
            >
              {" "}
              - Stem Eduction
            </Text>
            <Text
              style={{
                color: "#808080",
                fontSize: 15,
                // fontWeight: "500",
                // marginLeft: 10,
                paddingVertical: 2
                // textAlign: "center"
              }}
            >
              {" "}
              - The first experimental robot drone is a flying robot
            </Text>
            <Text
              style={{
                color: "#808080",
                fontSize: 15,
                // fontWeight: "500",
                // marginLeft: 10,
                paddingVertical: 2
                // textAlign: "center"
              }}
            >
              {" "}
              - The robot drone has been developed by at BenGurion University of
              the Negev Flying STAR
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
