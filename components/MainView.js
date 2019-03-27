import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

type Props = {};

export default class MainView extends Component<Props> {
  static navigationOptions = {
    title: 'Daniel Wawiórka - Akcelerometr',
  };

  render() {
    const {navigation} = this.props;
    const {navigate} = navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate("Model3D", {name: "bucket", scale: 0.3, zoom: -0.5, rotate: 0})}
          style={styles.button}
        >
          <Text style={styles.textButton}>Wiadro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Model3D", {name: "hammer", scale: 0.2, zoom: -1.5, rotate: 90})}
          style={styles.button}
        >
          <Text style={styles.textButton}>Młot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Model3D", {name: "sword", scale: 0.3, zoom: -1.5, rotate: 90})}
          style={styles.button}
        >
          <Text style={styles.textButton}>Miecz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2295f2",
    width: 250,
    height: 75,
    marginTop: 10
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  }
});
