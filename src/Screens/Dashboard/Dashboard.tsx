import {
  Appearance,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import UserIcon from '../../../assets/images/userIcon.png';
import {Image} from 'react-native';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Layout} from '../../styles/Layout';
import {Margins} from '../../styles/Margins';
import {Paddings} from '../../styles/Padding';
import {BorderStyle} from '../../styles/Border';
import UpscIcon from '../../../assets/images/UpscIcon.jpg';
import CatIcon from '../../../assets/images/CatIcon.jpg';
import NeetIcon from '../../../assets/images/JeNeetIcon.jpg';
import GateIcon from '../../../assets/images/GateIcon.jpg';
import ClatIcon from '../../../assets/images/ClatIcon.jpg';
import AppIcon from '../../../assets/images/yaa.png';
import TeachIcon from '../../../assets/images/TeachIcon.png';
import DefenceIcon from '../../../assets/images/defenceLogo.png';
import RailIcon from '../../../assets/images/railwayIcon.png';
import PoliceIcon from '../../../assets/images/policeIcon.png';
import AgriIcon from '../../../assets/images/agricultureIcon.png';
import InterviewIcon from '../../../assets/images/interviewIcon.png';
import AntIcon from 'react-native-vector-icons/AntDesign';
import DashboardIcon from '../../../assets/images/dashboardIcon.png';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Font6Icon from 'react-native-vector-icons/FontAwesome6';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import LiveIcon from '../../../assets/images/liveIcon.png';
import PadIcon from '../../../assets/images/testPadIcon.png';
import Carousel from 'react-native-reanimated-carousel';
import SlideOne from '../../../assets/images/onlineClass.png';
import SlideTwo from '../../../assets/images/OnlineTest.jpg';

const Dashboard = () => {
  // const [isDarkMode, setIsDarkMode] = useState(
  //   Appearance.getColorScheme() === 'dark',
  // );

  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({colorScheme}) => {
  //     setIsDarkMode(colorScheme === 'dark');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const [selectedCategory, setSelectedCategory] = useState('Class 12');
  const width = Dimensions.get('window').width;
  const renderSubjects = () => {
    if (selectedCategory === 'Class 12') {
      return (
        <View style={[Margins.mtMd]}>
          <View
            style={[
              BaseStyle.flexRow,
              {flexWrap: 'wrap'},
              Margins.mtMd,
              BaseStyle.justifySpaceBetween,
            ]}>
            <Pressable
              style={[{width: '45%'}, Background.white]}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'Physics',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={10}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          1/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  Physics Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'Computer Science',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={40}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          4/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  Computer Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'Chemistry',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={20}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          2/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  Chemistry Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'Biology',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={60}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          6/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  Biology Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'English',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={70}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          7/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  English Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.myCourseLists.routeName)
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <Font6Icon
                  name="circle-arrow-right"
                  size={25}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  See All
                </Text>
              </View>
            </Pressable>
          </View>
          <Text
            style={{
              color: theme.colors[ColorLabels.BLACK],
              fontFamily: FontFamily.INTER_BOLD,
              fontSize: fontSizes.smd,
            }}>
            Learning Analysis
          </Text>
          <View style={[Margins.mtXMd]}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  {backgroundColor: '#f5e6fe', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <MatCIcon
                    name="file-document-multiple"
                    size={25}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                  <View
                    style={[
                      {
                        borderColor: theme.colors[ColorLabels.PRIMARY],
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.PRIMARY],
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      12
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Documents Viewed
                </Text>
              </View>
              <View
                style={[
                  {backgroundColor: '#e7e5f2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <MatIcon name="video-library" size={25} color={'#7977a9'} />
                  <View
                    style={[
                      {
                        borderColor: '#7977a9',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#7977a9',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      8
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Videos Watched
                </Text>
              </View>
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  {backgroundColor: '#ffe6e2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <Image
                    source={LiveIcon}
                    resizeMode="contain"
                    style={{width: 32, height: 35}}
                  />
                  <View
                    style={[
                      {
                        borderColor: '#fc573b',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#fc573b',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      2
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Live Class Attended
                </Text>
              </View>
              <View
                style={[
                  {backgroundColor: '#e2f5e2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <Image
                    source={PadIcon}
                    resizeMode="contain"
                    style={{width: 32, height: 35}}
                  />
                  <View
                    style={[
                      {
                        borderColor: '#5cb65c',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#5cb65c',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      5
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Tests Attempted
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (selectedCategory === 'Bank Exam') {
      return (
        <View style={[Margins.mtMd]}>
          <View
            style={[
              BaseStyle.flexRow,
              {flexWrap: 'wrap'},
              Margins.mtMd,
              BaseStyle.justifySpaceBetween,
            ]}>
            <Pressable
              style={[{width: '45%'}, Background.white]}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'SBI PO Tests',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={30}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          3/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  SBI PO Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'SBI Clerk Tests',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={10}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          1/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  SBI Clerk Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'RBI Asst. Tests',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={60}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          6/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  RBI Asst. Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'LIC AAO Tests',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={80}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          8/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  LIC AAO Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName, {
                  name: 'LIC ADO Tests',
                })
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
                  <AnimatedCircularProgress
                    size={65}
                    width={5}
                    fill={50}
                    tintColor={theme.colors[ColorLabels.PRIMARY]}
                    rotation={170}
                    backgroundColor={theme.colors[ColorLabels.LIGHT_WHITE]}
                    children={() => (
                      <View>
                        <Text
                          style={{
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_BOLD,
                            fontSize: fontSizes.md,
                          }}>
                          5/10
                        </Text>
                      </View>
                    )}
                  />
                </View>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  LIC ADO Tests
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{width: '45%'}}
              onPress={() =>
                navigation.navigate(UserScreens.myCourseLists.routeName)
              }>
              <View
                style={[
                  BorderStyle.borderPrimary,
                  Paddings.paddingSm,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  Margins.mbLg,
                  BorderStyle.borderRadiusMedium,
                  Background.white,
                  {elevation: 1, height: 110},
                ]}>
                <Font6Icon
                  name="circle-arrow-right"
                  size={25}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.MEDIUM_GREY],
                      fontFamily: FontFamily.INTER_BOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                    Margins.mtMd,
                  ]}>
                  See All
                </Text>
              </View>
            </Pressable>
          </View>
          <Text
            style={{
              color: theme.colors[ColorLabels.BLACK],
              fontFamily: FontFamily.INTER_BOLD,
              fontSize: fontSizes.smd,
            }}>
            Learning Analysis
          </Text>
          <View style={[Margins.mtXMd]}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  {backgroundColor: '#f5e6fe', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <MatCIcon
                    name="file-document-multiple"
                    size={25}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                  <View
                    style={[
                      {
                        borderColor: theme.colors[ColorLabels.PRIMARY],
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.PRIMARY],
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      12
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Documents Viewed
                </Text>
              </View>
              <View
                style={[
                  {backgroundColor: '#e7e5f2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <MatIcon name="video-library" size={25} color={'#7977a9'} />
                  <View
                    style={[
                      {
                        borderColor: '#7977a9',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#7977a9',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      8
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Videos Watched
                </Text>
              </View>
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  {backgroundColor: '#ffe6e2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <Image
                    source={LiveIcon}
                    resizeMode="contain"
                    style={{width: 32, height: 35}}
                  />
                  <View
                    style={[
                      {
                        borderColor: '#fc573b',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#fc573b',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      2
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Live Class Attended
                </Text>
              </View>
              <View
                style={[
                  {backgroundColor: '#e2f5e2', width: '46%', height: 85},
                  Paddings.paddingSm,
                  BorderStyle.borderRadiusMedium,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                  ]}>
                  <Image
                    source={PadIcon}
                    resizeMode="contain"
                    style={{width: 32, height: 35}}
                  />
                  <View
                    style={[
                      {
                        borderColor: '#5cb65c',
                        borderWidth: 2,
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      },
                      BaseStyle.alignCenter,
                      BaseStyle.justifyCenter,
                    ]}>
                    <Text
                      style={[
                        {
                          color: '#5cb65c',
                          fontFamily: FontFamily.INTER_EXTRABOLD,
                          fontSize: fontSizes.sm,
                          textAlign: 'center',
                        },
                      ]}>
                      5
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.MEDIUM_GREY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.smm,
                  }}>
                  Tests Attempted
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          Paddings.paddingHorizontalMedium,
          {elevation: 10, height: 70},
          Background.white,
          BaseStyle.justifySpaceBetween,
        ]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image
            source={UserIcon}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
          <View style={[Margins.mlMd]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.smm,
              }}>
              Hello, Vijay
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_BOLD,
                fontSize: fontSizes.md,
              }}>
              Welcome Back!
            </Text>
          </View>
        </View>
        <Image source={AppIcon} style={{width: 50, height: 50}} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, marginTop: -20}}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(3).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({index}) => {
              let content;
              switch (index) {
                case 0:
                  content = (
                    <View
                      style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
                      <View
                        style={[
                          BaseStyle.flexRow,
                          BaseStyle.alignCenter,
                          BorderStyle.borderRadiusMedium,
                          BorderStyle.borderPrimary,
                          Background.white,
                          {elevation: 2},
                        ]}>
                        <Image
                          source={DashboardIcon}
                          style={{width: 150, height: 150}}
                        />
                        <Text
                          style={[
                            {
                              color: theme.colors[ColorLabels.LIGHT_BLACK],
                              fontFamily: FontFamily.INTER_BOLD,
                              fontSize: fontSizes.md,
                              lineHeight: 20,
                              letterSpacing: 0.2,
                            },
                            Layout.flex1,
                          ]}>
                          Choose your course to attend the test & improve your
                          knowledge.
                        </Text>
                      </View>
                    </View>
                  );
                  break;
                case 1:
                  content = (
                    <View
                      style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
                      <View
                        style={[
                          BaseStyle.flexRow,
                          BaseStyle.alignCenter,
                          BorderStyle.borderRadiusMedium,
                          BorderStyle.borderPrimary,
                          Background.primary,
                          {elevation: 2},
                        ]}>
                        <Image
                          source={SlideOne}
                          style={[{width: '100%', height: 150}]}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  );
                  break;
                default:
                  content = (
                    <View
                      style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
                      <View
                        style={[
                          BaseStyle.flexRow,
                          BaseStyle.alignCenter,
                          BorderStyle.borderRadiusMedium,
                          BorderStyle.borderPrimary,
                          Background.lightWhite,
                          {elevation: 2},
                        ]}>
                        <Image
                          source={SlideTwo}
                          style={[{width: '100%', height: 150}]}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  );
              }
              return content;
            }}
          />
        </View>

        <View style={[Paddings.paddingHorizontalMedium, Margins.mtXMd]}>
          <View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
              ]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_BOLD,
                  fontSize: fontSizes.smd,
                }}>
                My Courses
              </Text>
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtXMd,
                Margins.mbSm,
              ]}>
              <Text
                onPress={() => setSelectedCategory('Class 12')}
                style={[
                  {
                    color:
                      selectedCategory === 'Class 12'
                        ? theme.colors[ColorLabels.WHITE]
                        : theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                    borderRadius: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                  },
                  selectedCategory === 'Class 12' && Background.primary,
                  BorderStyle.borderPrimary,
                  Margins.mrMd,
                ]}>
                Class 12
              </Text>
              <Text
                onPress={() => setSelectedCategory('Bank Exam')}
                style={[
                  {
                    color:
                      selectedCategory === 'Bank Exam'
                        ? theme.colors[ColorLabels.WHITE]
                        : theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                    borderRadius: 50,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                  },
                  selectedCategory === 'Bank Exam' && Background.primary,
                  BorderStyle.borderPrimary,
                  Margins.mrMd,
                ]}>
                Bank Exam
              </Text>
            </View>
            {renderSubjects()}
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
            ]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_BOLD,
                fontSize: fontSizes.smd,
              }}>
              Choose Your Class
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.courseTab.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.PRIMARY],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.sm,
                  paddingVertical: 6,
                  paddingHorizontal: 8,
                },
                Background.lightWhite,
                BorderStyle.borderRadiusMedium,
              ]}>
              See More
            </Text>
          </View>
          <View
            style={[
              Margins.mtLg,
              BaseStyle.flexRow,
              {flexWrap: 'wrap'},
              BaseStyle.justifySpaceBetween,
            ]}>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              LKG
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              UKG
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              Class 1
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              Class 2
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              Class 3
            </Text>
            <Text
              onPress={() =>
                navigation.navigate(UserScreens.selectedCourse.routeName)
              }
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  width: '30%',
                  paddingVertical: 6,
                },
                BorderStyle.borderPrimary,
                BaseStyle.textCenter,
                BorderStyle.borderRadiusSmall,
                Background.white,
                Margins.mbSLg,
              ]}>
              Class 4
            </Text>
          </View>
          <View style={[Margins.mtLg]}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
              ]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_BOLD,
                  fontSize: fontSizes.smd,
                }}>
                Popular Exams
              </Text>
              <Text
                onPress={() =>
                  navigation.navigate(UserScreens.courseTab.routeName)
                }
                style={[
                  {
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.sm,
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                  },
                  Background.lightWhite,
                  BorderStyle.borderRadiusMedium,
                ]}>
                See More
              </Text>
            </View>
            <View
              style={[
                Margins.mtLg,
                BaseStyle.flexRow,
                {flexWrap: 'wrap'},
                BaseStyle.justifySpaceBetween,
              ]}>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={UpscIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  UPSC CSE
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image
                  source={CatIcon}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  CAT
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={NeetIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  NEET
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={NeetIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  JEE
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image
                  source={GateIcon}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  GATE
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={ClatIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  CLAT
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[Margins.mtLg]}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
              ]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_BOLD,
                  fontSize: fontSizes.smd,
                }}>
                Other Exams
              </Text>
              <Text
                onPress={() =>
                  navigation.navigate(UserScreens.courseTab.routeName)
                }
                style={[
                  {
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.sm,
                    paddingVertical: 6,
                    paddingHorizontal: 8,
                  },
                  Background.lightWhite,
                  BorderStyle.borderRadiusMedium,
                ]}>
                See More
              </Text>
            </View>
            <View
              style={[
                Margins.mtLg,
                BaseStyle.flexRow,
                {flexWrap: 'wrap'},
                BaseStyle.justifySpaceBetween,
              ]}>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={TeachIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                    BaseStyle.textCenter,
                  ]}>
                  Teaching
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image
                  source={DefenceIcon}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  Defence
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={RailIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  Railway
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={PoliceIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  Police
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image
                  source={AgriIcon}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  Agriculture
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.selectedCourse.routeName)
                }
                style={[
                  {minHeight: 80, width: '28%'},
                  Background.white,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyEvenly,
                  BorderStyle.borderRadiusMedium,
                  BorderStyle.borderLightGreyFull,
                  Margins.mbSLg,
                ]}>
                <Image source={InterviewIcon} style={{width: 40, height: 40}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.LIGHT_BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.smm,
                    },
                  ]}>
                  Interview
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
