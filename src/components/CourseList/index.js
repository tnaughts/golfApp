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
  ScrollView,
} from 'react-native';
import {get} from 'lodash';
import style from './style';
import {useQuery, gql} from '@apollo/client';
import {CourseCell} from './CourseCell';

const COURSES = gql`
  query getCourses {
    courseCollection {
      items {
        title
        info
        par
        holes
        public
        sys {
          id
        }
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
  }
`;
export const CourseList = ({navigation}) => {
  const {loading, error, data, refetch} = useQuery(COURSES);

  if (error) {
    if (error.graphQLErrors) {
      error.graphQLErrors.map(({message, locations, path}) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
    if (error.networkError) {
      console.log(`[Network error]: ${error.networkError}`);
    }
  }

  if (!data && loading) {
    return <ActivityIndicator style={style.actionContainer} />;
  }

  if (data && data.courseCollection && data.courseCollection.items) {
    return (
      <View style={style.container}>
        <FlatList
          data={data.courseCollection.items}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
          onRefresh={() => refetch()}
          refreshing={loading}
        />
      </View>
    );
  }

  function renderItem({item: course}) {
    return (
      <CourseCell
        course={course}
        handleClick={() => {
          navigation.navigate('Course', {
            courseId: course.sys.id,
            name: course.title,
          });
        }}
      />
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }>
      <Text>
        Unable to fetch course information, please try again or contact support
      </Text>
    </ScrollView>
  );
};
