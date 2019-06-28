import { LinearGradient } from "expo-linear-gradient";
// import * as firebase from 'firebase';
import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage
} from "react-native";
// import { setLocalStorage } from '../../library/Helper';
// import SignUpBottomSection from './SignUpBottomSection';

export default class SignUpScreen extends Component {
    static navigationOptions = {
		title: '',
		header: null
	};
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      UserEmail: "",
      UserPassword: "",
      UserFirstName: "",
      UserLastName: ""
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.LogoContainer}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.LogoImageStyle}
          />
        </View>
        <Text style={styles.TextHeaderStyle}>CREATE ACCOUNT</Text>
        <TextInput
          placeholder="User name"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          onChangeText={UserName => this.setState({ UserName })}
        />

        <TextInput
          placeholder="Email"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          onChangeText={UserEmail => this.setState({ UserEmail })}
        />
        <TextInput
          placeholder="Password"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          onChangeText={UserPassword => this.setState({ UserPassword })}
        />

        <TextInput
          placeholder="Confirm Password"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          onChangeText={UserPassword => this.setState({ UserPassword })}
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.nextStep}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.buttontextstyle}>Next >></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  MainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    flexDirection: "column",
    alignItems: "stretch"
  },
  LogoImageStyle: {
    height: 70,
    width: 300
  },
  LogoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  },
  TextInputStyleClass: {
    marginBottom: 10,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    color: "#C8C8C8",
    backgroundColor: "#f2f1f2",
    // fontFamily: "Poppins"
  },
  TextHeaderStyle: {
    fontSize: 23,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    // fontFamily: "Poppins"
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: "#7e217f",
    justifyContent: "center",
    borderRadius: 5,
    height: 40,
    width: 100
  },
  buttontextstyle: {
    fontSize: 20,
    color: "#fff",
    // fontFamily: "Poppins",
    alignItems: "center",
    justifyContent: "center"
  }
};
