import {StyleSheet} from 'react-native';

import {dimens} from '../../styles/dimens';
import {colors} from '../../styles/color';
import {fonts} from '../../styles/text';

export default StyleSheet.create({
  container: {
    padding: dimens.pageGutter,
  },

  infoContainer: {
    paddingHorizontal: dimens.pageGutter,
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
