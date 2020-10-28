import {StyleSheet} from 'react-native';

import {dimens} from '../../../styles/dimens';
import {colors} from '../../../styles/color';
import {fonts} from '../../../styles/text';

export default StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  title: {
    ...fonts.styles.h3Medium,
    paddingBottom: 10,
    paddingRight: 10,

    color: 'white',
  },

  infoText: {
    ...fonts.styles.smallMedium,
    paddingBottom: 5,
    color: 'white',
  },

  subInfo: {
    paddingLeft: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 0.25,
    height: 200,
  },
});
