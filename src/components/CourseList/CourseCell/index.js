import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';

import {get} from 'lodash';

export const CourseCell = (props) => {
  return (
    <TouchableOpacity style={style.container} onPress={props.handleClick}>
      <View style={style.infoContainer}>
        <Text numberOfLines={2} style={style.title}>
          {props.course.title}
        </Text>
        <Text numberOfLines={2} style={style.author}>
          {props.course.info}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
