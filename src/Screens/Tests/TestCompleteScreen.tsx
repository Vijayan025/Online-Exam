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
import TestCompleteIcon from '../../../assets/images/testCompleteIcon.png';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';
import EntIcon from 'react-native-vector-icons/Entypo';

const TestCompleteScreen = () => {
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
          Physics Online Test Completed
        </Text>
      </View>
      <View style={[BaseStyle.alignCenter]}>
        <View
          style={[
            BaseStyle.alignCenter,
            Margins.mtLg,
            BaseStyle.justifyEvenly,
            {
              width: 100,
              borderRadius: 50,
              height: 100,
              borderColor: theme.colors[ColorLabels.PRIMARY],
              borderWidth: 4,
            },
            Paddings.paddingSm,
          ]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_BOLD,
                fontSize: fontSizes.sm,
              },
              Margins.mtSm,
            ]}>
            Your Score
          </Text>
          <Text
            style={{
              color: theme.colors[ColorLabels.PRIMARY],
              fontFamily: FontFamily.INTER_BOLD,
              fontSize: fontSizes.xlg,
            }}>
            8
          </Text>
        </View>
      </View>
      <View
        style={[
          BaseStyle.flexContainer,
          BaseStyle.flexColumn,
          BaseStyle.justifyEvenly,
        ]}>
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexRow,
            {width: '100%'},
          ]}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              Background.white,
              BorderStyle.borderLightGreyFull,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              {elevation: 5, width: '100%'},
            ]}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifyEvenly,
                {width: '100%'},
              ]}>
              <View style={[BaseStyle.flexRow]}>
                <EntIcon
                  name="dot-single"
                  color={theme.colors[ColorLabels.LIGHT_GREEN]}
                  size={25}
                />
                <View style={[Margins.mtXsm]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.LIGHT_GREEN],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.md,
                    }}>
                    8
                  </Text>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.sm,
                    }}>
                    Answered
                  </Text>
                </View>
              </View>
              <View style={[BaseStyle.flexRow]}>
                <EntIcon
                  name="dot-single"
                  color={theme.colors[ColorLabels.RED]}
                  size={25}
                />
                <View style={[Margins.mtXsm]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.RED],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.md,
                    }}>
                    2
                  </Text>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.sm,
                    }}>
                    Not Answered
                  </Text>
                </View>
              </View>
              <View style={[BaseStyle.flexRow]}>
                <EntIcon
                  name="back-in-time"
                  color={theme.colors[ColorLabels.PRIMARY]}
                  size={20}
                  style={[Margins.mtXsm]}
                />
                <View style={[Margins.mtXsm, Margins.mlSm]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.md,
                    }}>
                    18:00
                  </Text>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.sm,
                    }}>
                    Time Taken
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          source={TestCompleteIcon}
          style={{width: '100%', height: '55%'}}
          resizeMode="contain"
        />
        <View style={[Paddings.paddingHorizontalMedium]}>
          <View style={[styles.btnsub1]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(UserScreens.viewSolutions.routeName)
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
                View Solutions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestCompleteScreen;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
