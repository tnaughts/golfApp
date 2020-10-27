import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
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
    }
  }
`;

export const Course = (props) => {
  console.log(props);
  const {loading, error, data} = useQuery(COURSE, {
    variables: {id: get(props, 'route.params.courseId')},
  });
  if (!data) {
    return <Text>null</Text>;
  }

  console.log(data);
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.title}>Course Information</Text>
      <View style={style.infoContainer}>
        <Text>{data.course.info}</Text>
      </View>
    </ScrollView>
  );
};
