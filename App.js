import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";
import * as Font from "expo-font";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",
    };
  }
  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] == "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => {});
    }
    this.winGame();
  };

  choosItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] != "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };
  choosItemColor = (itemNumber) => {
    if (itemArray[itemNumber] != "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  };
  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: "" });
    //force update to the component
    this.forceUpdate();
  };
  winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win"),
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.choosItemIcon(0)}
                  size={50}
                  color={this.choosItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.choosItemIcon(1)}
                  size={50}
                  color={this.choosItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.choosItemIcon(2)}
                  size={50}
                  color={this.choosItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.choosItemIcon(3)}
                  size={50}
                  color={this.choosItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.choosItemIcon(4)}
                  size={50}
                  color={this.choosItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.choosItemIcon(5)}
                  size={50}
                  color={this.choosItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.choosItemIcon(6)}
                  size={50}
                  color={this.choosItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.choosItemIcon(7)}
                  size={50}
                  color={this.choosItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.choosItemIcon(8)}
                  size={50}
                  color={this.choosItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button
          full
          rounded
          primary
          style={styles.button}
          onPress={() => this.resetGame()}
        >
          <Text style={styles.btntext}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {},
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
