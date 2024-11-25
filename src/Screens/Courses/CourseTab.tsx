import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {BorderStyle} from '../../styles/Border';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ScrollView} from 'react-native';
import ClassIcon from '../../../assets/images/classIcon.png';
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
import DashboardIcon from '../../../assets/images/dashboardIcon.png';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
import Font6Icon from 'react-native-vector-icons/FontAwesome6';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import ClassCard from './ClassCard';
import PopularCourseCard from './PopularCourseCard';
import {UserScreens} from '../../common/routes/user/user.screens';

const CourseTab = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Class 1 to 12',
      originalTitle: 'Class 1 to 12',
    },
    {
      key: 'two',
      title: 'Other Courses',
      originalTitle: 'Popular & Other Courses',
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
        <View
          style={[
            Margins.mtLg,
            BaseStyle.flexRow,
            {flexWrap: 'wrap'},
            BaseStyle.justifySpaceBetween,
          ]}>
          <ClassCard
            iconSource={ClassIcon}
            text="LKG"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="UKG"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 1"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 2"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 3"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 4"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 5"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 6"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 7"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 8"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 9"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 10"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Class 11"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Medical"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Non-Medical"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Commerce"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="Humanities"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="CA Foundation"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <ClassCard
            iconSource={ClassIcon}
            text="CLAT UG"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
        </View>
      </View>
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
        <View
          style={[
            Margins.mtLg,
            BaseStyle.flexRow,
            {flexWrap: 'wrap'},
            BaseStyle.justifySpaceBetween,
          ]}>
          <PopularCourseCard
            iconSource={UpscIcon}
            text="UPSC CSE"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={CatIcon}
            text="CAT"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={NeetIcon}
            text="NEET"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={NeetIcon}
            text="JEE"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={GateIcon}
            text="GATE"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={ClatIcon}
            text="CLAT"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={TeachIcon}
            text="Teaching"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={DefenceIcon}
            text="Defence"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={RailIcon}
            text="Railway"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={PoliceIcon}
            text="Police"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={AgriIcon}
            text="Agriculture"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
          <PopularCourseCard
            iconSource={InterviewIcon}
            text="Interview"
            onPress={() =>
              navigation.navigate(UserScreens.selectedCourse.routeName)
            }
          />
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
            <FontIcon
              name="bank"
              size={25}
              color={theme.colors[ColorLabels.PRIMARY]}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.smm,
                },
              ]}>
              Bank Exams
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
            <Font5Icon
              name="hand-holding-heart"
              size={25}
              color={theme.colors[ColorLabels.PRIMARY]}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.smm,
                },
              ]}>
              Startup Basics
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
            <Font6Icon
              name="hands-holding-child"
              size={25}
              color={theme.colors[ColorLabels.PRIMARY]}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.smm,
                },
                BaseStyle.textCenter,
              ]}>
              Insurance Exams
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
            <MatIcon
              name="computer"
              size={25}
              color={theme.colors[ColorLabels.PRIMARY]}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.smm,
                },
                BaseStyle.textCenter,
              ]}>
              Software Development
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
  });
  const renderTabBar = (props: any) => (
    <TabBar
      labelStyle={styles.appointmentlabel}
      {...props}
      activeColor={theme.colors[ColorLabels.PRIMARY]}
      indicatorStyle={[{backgroundColor: theme.colors[ColorLabels.BLACK]}]}
      style={styles.appointmenttabview}
      inactiveColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
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
          <Text
            style={{
              color: theme.colors[ColorLabels.PRIMARY],
              fontFamily: FontFamily.INTER_SEMIBOLD,
              fontSize: fontSizes.smd,
            }}>
            Courses
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
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

export default CourseTab;

const styles = StyleSheet.create({
  appointmentview: {
    flex: 1,
  },
  appointmentlabel: {
    fontSize: 15,
    fontFamily: FontFamily.INTER_MEDIUM,
    textAlign: 'center',
  },
  appointmenttabview: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
});
