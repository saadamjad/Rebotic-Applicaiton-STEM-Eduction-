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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        ProductName: "Daily Wear",

        Maleimage: require("../../assets/images/Deadpool_Leather_Jacket.jpg"),
        FemaleImage: require("../../assets/images/dailywear.jpeg")
      },
      {
        ProductName: "Formal Wear",

        Maleimage: require("../../assets/images/formal.jpg"),
        FemaleImage: require("../../assets/images/maxresdefault22.jpg")
      },

      {
        ProductName: "Party Wear",

        Maleimage: require("../../assets/images/partywear.jpg"),
        FemaleImage: require("../../assets/images/partywearrrr.jpg")
      },
      {
        ProductName: "Others",

        Maleimage: require("../../assets/images/leatherr.jpg"),
        FemaleImage: require("../../assets/images/other.jpeg")
      }
      //   {
      //     ProductName: "Waste",

      //     image: require("../../assets/images/dummyimg(6).png")
      //   }
    ],
    data: ""
  };
  componentDidMount() {
    //  console.log("navigation", this.props.navigation.state.params.type);
    var data = this.props.navigation.state.params.type;
    //  console.warn("hellrro", data);
    this.setState({ data });
    //alert(data);
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
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="SELECT Category"
          />
        </ScrollView>
      </View>
    );
  }
}
