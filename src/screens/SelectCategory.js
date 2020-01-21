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

import Entypo from "react-native-vector-icons/Entypo";
import { Item, Content } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    DroneFunctions: [
      {
        name: "Take of"
      },
      {
        name: "land "
      },
      {
        name: "stop "
      },
      {
        name: "Emergency"
      },
      {
        name: "Speed Increase "
      },
      {
        name: "Speed slow"
      },
      {
        name: "move Right"
      },
      {
        name: "move left"
      }
    ],
    data: "",
    Getname: " select operation ",
    TakeOf: false,
    Land: false,
    stop: false,
    Emergency: false,
    Speedincrease: false,
    SpeedSlow: false,
    right: false,
    left: false
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
              borderColor: "#525156",
              height: "100%"
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
                borderWidth: 1,
                borderColor: "#525156"
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
              {/* {this.state.DroneFunctions.map((Item, I) => {
                return ( */}
              <ScrollView>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      TakeOf: true
                    })
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
                    Take off
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      Land: true
                    })
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
                    Land
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      stop: true
                    })
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
                    Stop
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      Emergency: true
                    })
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
                    Emergency
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      Speedincrease: true
                    })
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
                    Speed Increase
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      SpeedSlow: true
                    })
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
                    SpeedSlow
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      right: true
                    })
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
                    Move right
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#94c760",
                    paddingVertical: 13,
                    //  marginVertical: 10,
                    width: "100%",
                    borderWidth: 2,
                    borderColor: "white"
                  }}
                  onPress={() =>
                    this.setState({
                      left: true
                    })
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
                    Move left
                  </Text>
                </TouchableOpacity>
              </ScrollView>

              {/* </Content> */}
              {/* );
              })} */}
            </View>
            <View
              style={{
                width: "60%",
                height: "100%",
                //  borderWidth: 1,
                borderColor: "#525156",
                borderColor: "green",
                backgroundColor: "#525156"
                // flexDirection: "row",
                // flexWrap: "wrap"
              }}
            >
              <Text
                style={{ color: "black", textAlign: "center", fontSize: 18 }}
              >
                {" "}
                Your Selected Operations{" "}
              </Text>

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  borderRadius: 70,
                  position: "absolute",
                  bottom: 5,
                  backgroundColor: "#e98223",
                  right: 5
                  // marginVertical: 20
                }}
                onPress={() => this.Start()}
              >
                <AntDesign name="play" color="white" size={45} />
              </TouchableOpacity>

              {this.state.TakeOf ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Take off
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ TakeOf: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}
              {this.state.Land ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Land
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ Land: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.stop ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Stop
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ stop: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.Emergency ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Emergency
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ Emergency: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.Speedincrease ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Speed Increase
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ Speedincrease: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.SpeedSlow ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      Speed slow
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ SpeedSlow: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}

              {this.state.right ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
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
                      move right
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ right: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}
              {this.state.left ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#94c760",
                      paddingVertical: 10,
                      marginVertical: 10,
                      width: 130
                      //   borderWidth: 1
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        textAlign: "center",
                        fontSize: 18
                      }}
                    >
                      move left
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      //position: "absolute",
                      //bottom: 10,
                      backgroundColor: "red",
                      marginLeft: 10
                      // right: 5
                    }}
                    onPress={() => this.setState({ left: false })}
                  >
                    <Entypo name="cross" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
