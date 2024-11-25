import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {BorderStyle} from '../../styles/Border';
import {UserScreens} from '../../common/routes/user/user.screens';
import TestIcon from '../../../assets/images/testIcon.png';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ChemistryIcon from '../../../assets/images/chemistryIcon.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DocCard from './DocCard';
import VideoCard from './VideoCard';
import LiveCard from './LiveCard';

const TestsLists = () => {
  const [nameData, setNameData] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const name = route?.params?.name;
  console.log('routes', name);
  useEffect(() => {
    setNameData(name);
  }, []);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Documents',
      originalTitle: 'Docs',
    },
    {
      key: 'two',
      title: 'Videos',
      originalTitle: 'Videos',
    },
    {
      key: 'three',
      title: 'Tests',
      originalTitle: 'Tests',
    },
    {
      key: 'four',
      title: 'Live Classes',
      originalTitle: 'Live Classes',
    },
  ]);

  const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />  
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );
  const SecondRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );
  const ThirdRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UserScreens.testComplete.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 6},
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    {
                      padding: 4,
                    },
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Image source={TestIcon} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_SEMIBOLD,
                        fontSize: fontSizes.md,
                      }}>
                      Test 1
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.CHART_GREEN],
                          fontFamily: FontFamily.INTER_SEMIBOLD,
                          fontSize: fontSizes.sm,
                        },
                        Margins.mlSm,
                      ]}>
                      (Completed)
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_REGULAR,
                      fontSize: fontSizes.sm,
                    }}>
                    Test : 10 questions - 10 Mins
                  </Text>
                </View>
              </View>
              <MatIcon
                name="arrow-right-drop-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={23}
                style={[Margins.mrMd]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UserScreens.testStart.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 6},
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    {
                      padding: 4,
                    },
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Image source={TestIcon} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_SEMIBOLD,
                        fontSize: fontSizes.md,
                      }}>
                      Test 2
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.RED],
                          fontFamily: FontFamily.INTER_SEMIBOLD,
                          fontSize: fontSizes.sm,
                        },

                        Margins.mlSm,
                      ]}>
                      (New)
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_REGULAR,
                      fontSize: fontSizes.sm,
                    }}>
                    Test : 10 questions - 10 Mins
                  </Text>
                </View>
              </View>
              <MatIcon
                name="arrow-right-drop-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={23}
                style={[Margins.mrMd]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UserScreens.testStart.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 6},
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    {
                      padding: 4,
                    },
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Image source={TestIcon} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_SEMIBOLD,
                        fontSize: fontSizes.md,
                      }}>
                      Test 3
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.RED],
                          fontFamily: FontFamily.INTER_SEMIBOLD,
                          fontSize: fontSizes.sm,
                        },

                        Margins.mlSm,
                      ]}>
                      (New)
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_REGULAR,
                      fontSize: fontSizes.sm,
                    }}>
                    Test : 10 questions - 10 Mins
                  </Text>
                </View>
              </View>
              <MatIcon
                name="arrow-right-drop-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={23}
                style={[Margins.mrMd]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UserScreens.testStart.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 6},
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    {
                      padding: 4,
                    },
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Image source={TestIcon} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_SEMIBOLD,
                        fontSize: fontSizes.md,
                      }}>
                      Test 4
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.RED],
                          fontFamily: FontFamily.INTER_SEMIBOLD,
                          fontSize: fontSizes.sm,
                        },

                        Margins.mlSm,
                      ]}>
                      (New)
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_REGULAR,
                      fontSize: fontSizes.sm,
                    }}>
                    Test : 10 questions - 10 Mins
                  </Text>
                </View>
              </View>
              <MatIcon
                name="arrow-right-drop-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={23}
                style={[Margins.mrMd]}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UserScreens.testStart.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 6},
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    {
                      padding: 4,
                    },
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Image source={TestIcon} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_SEMIBOLD,
                        fontSize: fontSizes.md,
                      }}>
                      Test 5
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.RED],
                          fontFamily: FontFamily.INTER_SEMIBOLD,
                          fontSize: fontSizes.sm,
                        },

                        Margins.mlSm,
                      ]}>
                      (New)
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_REGULAR,
                      fontSize: fontSizes.sm,
                    }}>
                    Test : 10 questions - 10 Mins
                  </Text>
                </View>
              </View>
              <MatIcon
                name="arrow-right-drop-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={23}
                style={[Margins.mrMd]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
  const FourthRoute = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[BaseStyle.flexContainer, Background.lightWhite]}>
      <View
        style={[
          Background.lightWhite,
          BaseStyle.flexContainer,
          Paddings.paddingHorizontalMedium,
        ]}>
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
      </View>
      <View style={[Margins.mbMd]} />
    </ScrollView>
  );
  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
    three: ThirdRoute,
    four: FourthRoute,
  });
  const renderTabBar = (props: any) => (
    <TabBar
      labelStyle={styles.appointmentlabel}
      {...props}
      activeColor={theme.colors[ColorLabels.PRIMARY]}
      indicatorStyle={[{backgroundColor: theme.colors[ColorLabels.PRIMARY]}]}
      style={[styles.appointmenttabview]}
      inactiveColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
      pressColor="transparent"
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            styles.appointmentlabel,
            {color},
            focused
              ? {fontWeight: 'bold'}
              : {fontFamily: FontFamily.INTER_REGULAR},
          ]}>
          {route?.originalTitle}
        </Text>
      )}
    />
  );
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
          <View style={[Margins.mlSm]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.PRIMARY],
                fontFamily: FontFamily.INTER_SEMIBOLD,
                fontSize: fontSizes.smd,
              }}>
              Acids, Bases and Salts
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.MEDIUM_GREY],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.sm,
              }}>
              5 Videos | 26 Docs | 10 Tests
            </Text>
          </View>
        </View>
      </View>
      <View style={[BaseStyle.flexContainer]}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default TestsLists;

const styles = StyleSheet.create({
  pic: {
    width: 35,
    height: 35,
  },
  appointmentview: {
    flex: 1,
  },
  appointmentlabel: {
    fontSize: 13,
    fontFamily: FontFamily.INTER_MEDIUM,
    textAlign: 'center',
    marginBottom: -10,
    padding: 0,
    margin: 0,
  },
  appointmenttabview: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
});
