import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {get} from 'lodash';
import style from './style';
import {CourseList} from '../CourseList';

export const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={{flex: 1}}>
        <CourseList navigation={navigation} />
      </View>
    </View>
  );
};
