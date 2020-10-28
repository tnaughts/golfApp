import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import style from './style';
import {useQuery, gql} from '@apollo/client';
import {get} from 'lodash';

const COURSE = gql`
  query getCourse($id: String!) {
    course(id: $id) {
      title
      info
      id
      par
      public
      courseImage {
        url(
          transform: {
            width: 500
            height: 400
            resizeStrategy: SCALE
            quality: 100
          }
        )
      }
    }
  }
`;

export const Course = (props) => {
  const {loading, error, data, refetch} = useQuery(COURSE, {
    variables: {id: get(props, 'route.params.courseId')},
  });
  if (!data && loading) {
    return <ActivityIndicator style={style.actionContainer} />;
  }
  if (error) {
    console.log('hit');
  }
  if (!data || error) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }>
        <Text>
          Unable to fetch course information, please try again or contact
          support
        </Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={style.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }>
      <Image
        style={style.image}
        source={{uri: get(data, 'course.courseImage.url')}}
      />
      <Text style={style.title}>Course Information</Text>
      <View style={style.infoContainer}>
        <Text>{data.course.info}</Text>
      </View>
    </ScrollView>
  );
};
