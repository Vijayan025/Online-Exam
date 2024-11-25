import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {BorderStyle} from '../../styles/Border';
import {Margins} from '../../styles/Margins';
import {Image} from 'react-native';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';

interface Props {
  iconSource?: any;
  text?: string;
  onPress?: any;
}
const PopularCourseCard: React.FC<Props> = ({iconSource, text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {minHeight: 80, width: '28%'},
        Background.white,
        BaseStyle.alignCenter,
        BaseStyle.justifyEvenly,
        BorderStyle.borderRadiusMedium,
        BorderStyle.borderLightGreyFull,
        Margins.mbSLg,
      ]}>
      <Image source={iconSource} style={{width: 40, height: 40}} />
      <Text
        style={[
          {
            color: theme.colors[ColorLabels.LIGHT_BLACK],
            fontFamily: FontFamily.INTER_SEMIBOLD,
            fontSize: fontSizes.smm,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default PopularCourseCard;

const styles = StyleSheet.create({});
