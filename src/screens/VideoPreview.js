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
import Video from "react-native-video";
export default class Home extends React.Component {
  state = {};

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
            headingText="previewww"
          />
          <Video
            source={{ uri: "https://youtu.be/Qp-BA9e0TnA" }} // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            // style={styles.backgroundVideo}
          />
        </ScrollView>
      </View>
    );
  }
}
