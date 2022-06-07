import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../until/colors';

const width = Dimensions.get('window').width;

const ItemMovie = ({item}) => {
  const img = 'https://image.tmdb.org/t/p/w500';
  const onPress = () => {
    alert('Succes')
  }
  return (
    <TouchableOpacity onPress={onPress}>
    <ImageBackground
      imageStyle={styles.imgBg}
      source={{uri: img + `${item.poster_path}`}}
      style={styles.container}>
      <View style={styles.vote}>
        <LinearGradient
          start={{x: 0.3, y: 0.2}}
          end={{x: 1, y: 1}}
          colors={['#FFA12C', '#FE5F75', '#FC5296']}
          style={styles.circle}>
          <Text style={styles.txtVote}>{item.vote_average}</Text>
        </LinearGradient>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginBottom: 10,
          marginLeft: 10,
        }}>
        <Text style={styles.txt}>
          {Moment(item.release_date).format('YYYY')}
        </Text>
        <Text style={[styles.txt, styles.font]}>
          {item.title?.toUpperCase()}
        </Text>
      </View>
    </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2 - 30,
    margin: 10,
    aspectRatio: 0.65,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#949494',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBg: {
    borderRadius: 10,
  },
  vote: {
    alignItems: 'flex-end', 
    marginTop: 10, 
    marginRight: 10
  },
  txt: {
    color: Colors.white, 
    fontSize: 14
  },
  font: {
    fontWeight: '500'
  },
  txtVote: {
    color: Colors.white,
  }
});
