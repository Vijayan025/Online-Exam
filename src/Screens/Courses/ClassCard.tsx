import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BorderStyle} from '../../styles/Border';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {useNavigation} from '@react-navigation/native';

interface Props {
  iconSource?: any;
  text?: string;
  onPress?: any;
}
const ClassCard: React.FC<Props> = ({iconSource, text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: '48%',
        },
        BorderStyle.borderPrimary,
        BorderStyle.borderRadiusSmall,
        Background.white,
        Margins.mbSLg,
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        Paddings.paddingSm,
      ]}>
      <Image source={iconSource} style={{width: 40, height: 40}} />
      <Text
        style={[
          {
            color: theme.colors[ColorLabels.LIGHT_BLACK],
            fontFamily: FontFamily.INTER_BOLD,
            fontSize: fontSizes.smm,
          },
          BaseStyle.textCenter,
          Margins.mlMd,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ClassCard;

const styles = StyleSheet.create({});
