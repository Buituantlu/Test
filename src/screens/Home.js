import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import ItemMovie from './component/ItemMovie';
import Strings from '../until/strings';

const Home = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const onRefresh = useCallback(async () => {
    setLoading(true);
    if (count == 0) {
      try {
        let response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=26763d7bf2e94098192e629eb975dab0&page=1',
        );
        let responseJson = await response.json();
        setCount(1)
        setMovies(responseJson.results.concat(movies));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('No more new data');
      setLoading(false);
    }
  }, [loading]);

  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>{Strings.TxtList}</Text>
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ItemMovie item={item} />;
        }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  txtHeader: {
    fontSize: 24,
    color: '#2F4F4F',
    paddingLeft: 5,
    fontWeight: '500',
    marginBottom: 20,
  },
});
