import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { StyleSheet } from "react-native";
import PokemonApi from "../components/PokemonApi";
import DetailScreen from './DetailScreen';


export default function PokemonScreen({ navigation }) {


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async () => {

    const datas = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22");
    const pokemon = await datas.json();
    setData(pokemon.results)
    console.log(data)
    console.log(pokemon.results)
  }, [])


  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>Pokemon </Text>
      <FlatList
        data={data}
        keyExtractor={({ url }, index) => url}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate('Detail', {
                item: item,
                url: item.url,
              })
            }
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
