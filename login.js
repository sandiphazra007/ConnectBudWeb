import React, { Component } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Button
} from "react-native";

export default class LoginScreen extends Component {

    static navigationOptions = {
		title: '',
		header: null
	};
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  userRegister=()=>{
      this.props.navigation.navigate('SignUpScreen')
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <View style={styles.LogoContainer}>
            <Image
              source={require("./assets/logo.png")}
              style={styles.LogoImageStyle}
            />
          </View>

          <View style={styles.titleText}>
            <Text style={{ fontWeight: "bold" }}>Higher Education in USA</Text>
            <Text style={{ fontWeight: "bold" }}>
              Dedicated to help ONE Million Students by 2020!
            </Text>
          </View>

          <Text style={styles.TextHeaderStyle}>LOGIN</Text>
          <TextInput
            placeholder="Email"
            onChangeText={UserEmail => this.setState({ UserEmail })}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Password"
            onChangeText={UserPassword => this.setState({ UserPassword })}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={styles.forgotpasswordStyle}>Forgot Password?</Text>
            <TouchableOpacity
              block
              style={styles.buttonStyle}
              onPress={this.userLogin}
            >
              <Text style={styles.buttontextstyle}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5 }}>
            <TouchableOpacity
              block
              style={styles.GbuttonStyle}
              titleStyle={styles.buttontextstyle}
              onPress={this.loginWithGoogle}
            >
              <Text style={styles.buttontextstyle}>Continue With Google</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.ORTextStyle}>OR</Text>

          <TouchableOpacity
            block
            style={styles.fbuttonStyle}
            titleStyle={styles.buttontextstyle}
            onPress={this.loginWithGoogle}
          >
            <Text style={styles.buttontextstyle}>Continue With Facebook</Text>
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#7e217f",
                fontWeight: "bold"
              }}
              onPress={this.userRegister}
            >
              Sign Up With Email.
            </Text>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text>
              By signing up you indicate that you have read and agree to
              Connectbud's Terms of Service and Privacy Policy.
            </Text>
          </View>

          <View>
            <Text style={{ color: "#7e217f", marginTop: 47 }}>
              Privacy Policy
            </Text>
            <Text style={{ color: "#7e217f", marginTop: 10 }}>
              Terms & Condition
            </Text>
          </View>

          <View style={styles.footerView}>
            <Text>Copyright © 2019 ConnectBud LLC |</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export const styles = {
  MainContainer: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    padding: 5,
    flexDirection: "column"
  },
  LogoImageStyle: {
    // alignItems: 'center',
    height: 50,
    width: 300
  },
  LogoContainer: {
    flexDirection: "row",
    // justifyContent: "left",
    // alignItems: "",
    margin: 15
  },
  TextInputStyleClass: {
    marginBottom: 10,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    color: "#C8C8C8",
    backgroundColor: "#e8f0fe"
  },
  TextComponentStyle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left",

    marginTop: 10
  },
  forgotpasswordStyle: {
    fontSize: 16,
    color: "#a22a7f",
    textAlign: "right",
    marginTop: 10
  },
  TextHeaderStyle: {
    fontSize: 20,
    color: "#161616",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20
  },
  ORTextStyle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  buttonStyle: {
    marginTop: 25,
    backgroundColor: "#a22a7f",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    padding: 5,
    justifyContent: "center"
  },
  GbuttonStyle: {
    backgroundColor: "#df4931",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    padding: 5
  },
  fbuttonStyle: {
    backgroundColor: "#507CC0",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    padding: 5
  },
  buttontextstyle: {
    fontSize: 20,
    color: "#ffffff",

    marginLeft: 5
  },

  //for sign up with email part
  bottomView: {
    paddingLeft: 40,
    paddingBottom: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginTop: 65
  },
  Gicon: {
    height: 25,
    width: 25
  },
  TextComponentStyleFooter: {
    fontSize: 14,
    color: "#161616",
    textAlign: "left",
    marginTop: 45
    // paddingBottom:
  },

  //for copyright part
  footerView: {
    bottom: 10,
    // marginLeft: 50,
    flexDirection: "row",
    marginTop: 30
  },

  titleText: {
    alignItems: "center"
  }
};
