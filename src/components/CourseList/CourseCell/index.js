import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import style from './style';

import {get} from 'lodash';
type Props = {
  course: {
    title: number,
    par: number,
    holes: number,
    public: boolean,
  },
};
export const CourseCell = (props: Props) => {
  return (
    <TouchableOpacity style={style.container} onPress={props.handleClick}>
      <ImageBackground
        style={style.image}
        source={{uri: get(props, 'course.courseImage.url')}}>
        <View style={style.infoContainer}>
          <Text numberOfLines={2} style={style.title}>
            {props.course.title}
          </Text>
          <View style={style.subInfo}>
            <Text style={style.infoText}>Par: {props.course.par}</Text>
            <Text numberOfLines={2} style={style.infoText}>
              Holes: {props.course.holes}
            </Text>
            <Text numberOfLines={2} style={style.infoText}>
              {props.course.public ? 'Public' : 'Private'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
