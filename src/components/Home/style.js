import {StyleSheet} from 'react-native';

import {dimens} from '../../styles/dimens';
import {colors} from '../../styles/color';
import {fonts} from '../../styles/text';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 10,
    height: 40,
    backgroundColor: colors.neutralLight,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLoader: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    right: 30,
  },

  errorText: {
    textAlign: 'center',
  },
});
