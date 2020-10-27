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
import {useQuery, gql} from '@apollo/client';
import {CourseCell} from './CourseCell';

const COURSES = gql`
  query getCourses {
    courseCollection {
      items {
        title
        info
        sys {
          id
        }
      }
    }
  }
`;
export const CourseList = ({navigation}) => {
  const {loading, error, data} = useQuery(COURSES);
  if (!data && loading) {
    return <ActivityIndicator style={style.actionContainer} />;
  }
  if (!data) {
    return (
      <View>
        <Text>NOPE</Text>
      </View>
    );
  }

  if (data && data.courseCollection && data.courseCollection.items) {
    return (
      <View style={style.container}>
        <FlatList
          data={data.courseCollection.items}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }

  function renderItem({item: course}) {
    return (
      <CourseCell
        course={course}
        handleClick={() => {
          console.log('HELLO');
          navigation.navigate('Course', {
            courseId: course.sys.id,
            name: course.title,
          });
        }}
      />
    );
  }

  return (
    <View>
      <Text>NOPEL</Text>
    </View>
  );
};
