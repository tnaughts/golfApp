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
    borderTopWidth: 1,
  },

  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },

  title: {
    ...fonts.styles.bodyMedium,
    paddingBottom: 10,
    paddingRight: 10,
    flex: 1,
  },

  author: {
    ...fonts.styles.smallregular,
    paddingBottom: 10,
    flex: 1,
  },

  image: {
    height: 75,
    width: 75,
  },
});
