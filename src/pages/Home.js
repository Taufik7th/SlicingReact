import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleInput = (key, text)=>{
    this.setState({ [key]: text});
  };
  submitLogin = () => {
    if (this.state.username == "admin" && this.state.password == "admin"){
      alert("Login Berhasil");
    } else {
      alert("Login Gagal");
    }
  };
  render() {
    return (
      <View>
        <TextInput placeholder="Ketik username" onChangeText={text => this.handleInput("username", text)}/>
        <TextInput placeholder="Ketik password" onChangeText={text => this.handleInput("password", text)}/>
        <TouchableOpacity onPress={this.submitLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
