import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import TestStartIcon from '../../../assets/images/testStartIcon.png';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const TestStartScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          Background.primary,
          Paddings.paddingLg,
          {elevation: 10},
        ]}>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.WHITE],
              fontFamily: FontFamily.INTER_BOLD,
              fontSize: fontSizes.smd,
            },
            Margins.mlSm,
          ]}>
          Physics Online Test
        </Text>
      </View>
      <View
        style={[
          BaseStyle.flexColumn,
          BaseStyle.flexContainer,
          BaseStyle.justifyEvenly,
        ]}>
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View
            style={[
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Background.primary,
              {elevation: 5},
            ]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.WHITE],
                fontFamily: FontFamily.INTER_SEMIBOLD,
                fontSize: fontSizes.md,
              }}>
              Test 1
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.WHITE],
                fontFamily: FontFamily.INTER_SEMIBOLD,
                fontSize: fontSizes.md,
              }}>
              Questions : 10
            </Text>
          </View>
          <View
            style={[
              BaseStyle.alignCenter,
              BaseStyle.justifyCenter,
              Background.white,
              {
                borderColor: theme.colors[ColorLabels.PRIMARY],
                borderWidth: 1,
                borderRadius: 50,
                width: 60,
                height: 60,
                padding: 4,
              },
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.PRIMARY],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                  textAlign: 'center',
                },
              ]}>
              10 Mins
            </Text>
          </View>
        </View>
        <Image
          source={TestStartIcon}
          style={{width: '100%', height: '70%'}}
          resizeMode="contain"
        />
        <View style={[Paddings.paddingHorizontalMedium]}>
          <View style={[styles.btnsub1]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(UserScreens.quizScreen.routeName)
              }
              style={[
                {backgroundColor: theme.colors[ColorLabels.PRIMARY]},
                BaseStyle.justifyCenter,
                Paddings.paddingMd,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_BOLD,
                  textAlign: 'center',
                }}>
                Start Test
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestStartScreen;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
