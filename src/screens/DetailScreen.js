import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";


export default function DetailScreen({ route, navigation }) {

  const { url, item } = route.params;
  const name = item.name;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  async function FetchPokemon() {
  
    fetch('https://pokeapi.co/api/v2/pokemon/2')    
    .then((res) => res.json())    
    .then((json) => {
      console.log(json);     
      
    })
    
    
  }

  useEffect(() => {
    console.log("TOTOTOTOT",route)
  },[])



  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuLink}>Menu
      </Text>
      <Text>
        {name}
      </Text>
      <Text>
        {url}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#3F3E3E",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgIcon: {
    width: 205,
    height: 125,
    resizeMode: "center",
    flex: 0.5,
  },
  menuLink: {
    backgroundColor: "rgba(196, 196, 196, 0.39)",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
});