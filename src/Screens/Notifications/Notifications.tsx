import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {BorderStyle} from '../../styles/Border';
import {useNavigation} from '@react-navigation/native';
import UserIcon from '../../../assets/images/userIcon.png';
import {Image} from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import BellIcon from '../../../assets/images/bellIcon.png';
import TestIcon from '../../../assets/images/testIcon.png';
import BookIcon from '../../../assets/images/bookIcon.png';
import MorningIcon from '../../../assets/images/morningIcon.png';

const Notifications = () => {
  const navigation = useNavigation();
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
            Notifications
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Login Successfully
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
                Today, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={MorningIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Good Morning, Vijay
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
                Today, 6:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Vijay, Welcome to Online Exam !
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
                Today, 10:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BookIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Course Changed Successfully
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
                Monday, 8:00 PM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Profile Updated Successfully
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
                Today, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Login Successfully
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
                Today, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Login Successfully
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
                Today, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={TestIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Physics Test 1 Completed
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
                Tuesday, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={TestIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Physics Test 1 Score : 50/100
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
                Tuesday, 9:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Login Successfully
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
                Today, 8:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Vijay, Welcome to Online Exam !
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
                Today, 10:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BookIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Course Changed Successfully
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
                Monday, 8:00 PM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Vijay, Welcome to Online Exam !
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
                Today, 10:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BookIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Course Changed Successfully
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
                Monday, 8:00 PM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BellIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Vijay, Welcome to Online Exam !
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
                Today, 10:00 AM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
            <Image
              source={BookIcon}
              style={{width: 40, height: 40, borderRadius: 50}}
            />
            <View style={[Margins.mlLg]}>
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
                Course Changed Successfully
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
                Monday, 8:00 PM
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.LIGHT_GREY],
                borderBottomWidth: 0.8,
              },
              Margins.mtXMd,
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
