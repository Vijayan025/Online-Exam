import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import ReferIcon from '../../../assets/images/referIcon.png';
import {Image} from 'react-native';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Layout} from '../../styles/Layout';
import EntIcon from 'react-native-vector-icons/Entypo';

const ReferEarn = () => {
  const navigation = useNavigation();
  const openShare = async () => {
    try {
      const options = {
        url: `Hi, Invite your friend by sharing your referral link`,
        type: 'url',
      };
      await Share.open(options);
    } catch (error) {
      console.error('Error opening share:', error);
    }
  };
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.PRIMARY]}
            size={20}
            style={[Margins.mrSm]}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              color: theme.colors[ColorLabels.PRIMARY],
              fontFamily: FontFamily.INTER_SEMIBOLD,
              fontSize: fontSizes.smd,
            }}>
            Refer & Earn
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Margins.mtLg]}>
          <Image
            source={ReferIcon}
            style={{width: '100%', height: 250}}
            resizeMode="contain"
          />
        </View>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
          <View style={[Margins.mbLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mbMd,
              ]}>
              Referral Code
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  borderStyle: 'dashed',
                  borderColor: '#f5b670',
                  borderWidth: 0.8,
                  backgroundColor: '#fef0e4',
                },
                Margins.mbSm,
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
              ]}>
              VIJ09123
            </Text>
          </View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.INTER_SEMIBOLD,
              },
              Margins.mbSm,
            ]}>
            How it works?
          </Text>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Margins.mtMd,
              Background.white,
              {borderColor: '#5cb65c', borderWidth: 1},
            ]}>
            <EntIcon
              name="megaphone"
              color={theme.colors[ColorLabels.WHITE]}
              size={25}
              style={[
                Margins.mrLg,
                Margins.mlSm,
                {
                  padding: 5,
                  borderRadius: 50,
                  backgroundColor: '#5cb65c',
                },
              ]}
            />
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontFamily: FontFamily.INTER_MEDIUM,
                    fontSize: fontSizes.md,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                Invite Your Friends
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontFamily: FontFamily.INTER_REGULAR,
                    fontSize: fontSizes.xxsm,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                To take test on this app.
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Margins.mtXMd,
              Background.white,
              {borderColor: '#ec3c51', borderWidth: 1},
            ]}>
            <MatIcon
              name="human-queue"
              color={theme.colors[ColorLabels.WHITE]}
              size={25}
              style={[
                Margins.mrLg,
                Margins.mlSm,
                {
                  padding: 5,
                  borderRadius: 50,
                  backgroundColor: '#ec3c51',
                },
              ]}
            />
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontFamily: FontFamily.INTER_MEDIUM,
                    fontSize: fontSizes.md,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                Friends Signup
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontFamily: FontFamily.INTER_REGULAR,
                    fontSize: fontSizes.xxsm,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                Using your code/invite link
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Margins.mtXMd,
              Background.white,
              {borderColor: '#7977a9', borderWidth: 1},
            ]}>
            <MatIcon
              name="gift-open"
              color={theme.colors[ColorLabels.WHITE]}
              size={25}
              style={[
                Margins.mrLg,
                Margins.mlSm,
                {
                  padding: 5,
                  borderRadius: 50,
                  backgroundColor: '#7977a9',
                },
              ]}
            />
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontFamily: FontFamily.INTER_MEDIUM,
                    fontSize: fontSizes.md,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                Reward
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontFamily: FontFamily.INTER_REGULAR,
                    fontSize: fontSizes.xxsm,
                  },
                  Margins.mrSm,
                  Margins.mbXSm,
                ]}>
                You both get Rewards
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexContainer,
            BaseStyle.justifyEnd,
            Margins.mbXl,
            Paddings.paddingHorizontalMedium,
            Margins.mtXl,
          ]}>
          <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: theme.colors[ColorLabels.PRIMARY],
                },
                BaseStyle.justifyCenter,
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
              ]}
              onPress={openShare}>
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_BOLD,
                  textAlign: 'center',
                }}>
                Share Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
