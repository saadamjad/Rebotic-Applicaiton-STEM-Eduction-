import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StatusBar
} from "react-native";

import GloabalHeader from "../components/GlobalHeader";

import AntDesign from "react-native-vector-icons/AntDesign";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    DroneFunctions: [
      {
        name: "take of "
      },
      {
        name: "land  "
      },
      {
        name: "stop "
      },
      {
        name: "Emergency "
      },
      {
        name: "Speed Increase  "
      },
      {
        name: "Speed slow "
      },
      {
        name: "Right "
      },
      {
        name: "left "
      }
    ],
    data: "",
    Getname: " select operation "
  };
  Start() {
    alert(" Drone under development");
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
          <StatusBar hidden />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              // borderWidth: 1,
              borderColor: "blue",
              height: "100%"
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
                borderWidth: 1,
                borderColor: "blue"
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 18,
                  width: "100%",
                  backgroundColor: "#ffaf00",
                  paddingVertical: 10
                }}
              >
                {" "}
                Functions{" "}
              </Text>
              {this.state.DroneFunctions.map((Item, I) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 100
                      //   borderWidth: 1
                    }}
                    onPress={
                      () => this.setState({ Getname: Item.name })
                      // this.setState({
                      //   Getname: [...this.state.Getname, Item.name]
                      // })
                      // console.warn("valuessssssss", this.state.Getname)
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        textAlign: "center",
                        fontSize: 18
                      }}
                    >
                      {" "}
                      {Item.name}{" "}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                width: "60%",
                height: "100%",
                //  borderWidth: 1,
                borderColor: "blue",
                borderColor: "green"
              }}
            >
              <Text
                style={{ color: "black", textAlign: "center", fontSize: 18 }}
              >
                {" "}
                Your Selected Operations{" "}
              </Text>

              <Text
                style={{
                  // color: "black",
                  textAlign: "center",
                  fontSize: 25,
                  borderWidth: 2,

                  paddingVertical: 15,
                  color: "red",
                  fontWeight: "500",
                  borderColor: "red",
                  marginTop: 20
                }}
              >
                {" "}
                {this.state.Getname}
              </Text>
              {/* {this.state.Getname.map((Item, I) => {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 100,
                      borderWidth: 1
                    }}
                    // onPress={() => this.setState({ Getname: Item.name })}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        textAlign: "center",
                        fontSize: 18
                      }}
                    >
                      {" "}
                      {It}{" "}
                    </Text>
                  </TouchableOpacity>
                );
              })} */}
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  position: "absolute",
                  bottom: 10,
                  backgroundColor: "#e98223",
                  right: 5
                }}
                onPress={() => this.Start()}
              >
                <AntDesign name="play" color="white" size={55} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
