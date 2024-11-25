import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LiveIcon from '../../../assets/images/livePic.jpg';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import {Layout} from '../../styles/Layout';
import {BorderStyle} from '../../styles/Border';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const LiveCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[Margins.mtMd, Margins.mbSm]}
      onPress={() =>
        navigation.navigate(UserScreens.liveClassScreen.routeName)
      }>
      <View
        style={[
          BaseStyle.flexRow,
          Background.white,
          {padding: 10, borderRadius: 12, elevation: 3},
        ]}>
        <Image
          source={LiveIcon}
          style={{width: 110, height: 100, borderRadius: 10}}
          resizeMode="contain"
        />
        <View
          style={[Margins.mlXMd, BaseStyle.justifySpaceBetween, Layout.flex1]}>
          <View style={[Margins.mbMd]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.PRIMARY],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.sm,
                  backgroundColor: '#f5e6fe',
                  paddingVertical: 3,
                  borderRadius: 30,
                  textAlign: 'center',
                },
                Margins.mbSm,
              ]}>
              Chemistry Session
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.md,
              }}>
              Acids, Bases and Salts
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.MEDIUM_GREY],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.sm,
              }}>
              Tutor Name : Ramesh
            </Text>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              BorderStyle.borderTopPrimaryFullWidth,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.MEDIUM_GREY],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.xsm,
                },
                Margins.mtSm,
              ]}>
              Mon-Fri | 9:30 AM
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.WHITE],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.xsm,
                  backgroundColor: theme.colors[ColorLabels.RED],
                  borderRadius: 30,
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                },
                Margins.mtSm,
              ]}>
              LIVE NOW
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default LiveCard;

const styles = StyleSheet.create({});
