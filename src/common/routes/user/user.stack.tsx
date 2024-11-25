import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreens} from './user.screens';
import {ColorLabels, theme} from '../../theme';
import Dashboard from '../../../Screens/Dashboard/Dashboard';
import Profile from '../../../Screens/Profile/Profile';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FouIcon from 'react-native-vector-icons/Foundation';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EditProfile from '../../../Screens/Profile/EditProfile';
import Notifications from '../../../Screens/Notifications/Notifications';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ExamHistory from '../../../Screens/ExamHistory/ExamHistory';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ReferAndEarn from '../../../Screens/ReferEarn/ReferAndEarn';
import ChangePassword from '../../../Screens/Change Password/ChangePassword';
import TestsLists from '../../../Screens/Tests/TestsLists';
import MyCourseLists from '../../../Screens/Tests/MyCourseLists';
import QuizScreen from '../../../Screens/Tests/QuizScreen';
import TestStartScreen from '../../../Screens/Tests/TestStartScreen';
import TestCompleteScreen from '../../../Screens/Tests/TestCompleteScreen';
import ViewSolutions from '../../../Screens/Tests/ViewSolutions';
import CourseTab from '../../../Screens/Courses/CourseTab';
import SelectedCourseScreen from '../../../Screens/Courses/SelectedCourseScreen';
import ChatBot from '../../../Screens/Support/ChatBot';
import MyCourses from '../../../Screens/Profile/MyCourses';
import VideoScreen from '../../../Screens/Tests/VideoScreen';
import LiveClassScreen from '../../../Screens/Tests/LiveClassScreen';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontSize: 22,
          color: '#000',
        },
        tabBarActiveTintColor: '#0049a8',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          backgroundColor: '#FFF',
          height: 52,
          borderColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '400',
          top: -3,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
              }}>
              <AntIcon
                name={focused ? 'appstore1' : 'appstore-o'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="examHistory"
        component={ExamHistory}
        options={{
          tabBarLabel: 'Exam Scores',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <IonIcon
                name={focused ? 'timer' : 'timer-outline'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <MatIcon
                name={focused ? 'notifications' : 'notifications-none'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <FAIcon
                name={focused ? 'user' : 'user-o'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={focused ? 25 : 20}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Main'}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
      <RootStack.Screen
        name={UserScreens.dashboard.routeName}
        component={Dashboard}
      />
      <RootStack.Screen
        name={UserScreens.profile.routeName}
        component={Profile}
      />
      <RootStack.Screen
        name={UserScreens.editProfile.routeName}
        component={EditProfile}
      />
      <RootStack.Screen
        name={UserScreens.referEarn.routeName}
        component={ReferAndEarn}
      />
      <RootStack.Screen
        name={UserScreens.changePassword.routeName}
        component={ChangePassword}
      />
      <RootStack.Screen
        name={UserScreens.testsList.routeName}
        component={TestsLists}
      />
      <RootStack.Screen
        name={UserScreens.myCourseLists.routeName}
        component={MyCourseLists}
      />
      <RootStack.Screen
        name={UserScreens.quizScreen.routeName}
        component={QuizScreen}
      />
      <RootStack.Screen
        name={UserScreens.testStart.routeName}
        component={TestStartScreen}
      />
      <RootStack.Screen
        name={UserScreens.testComplete.routeName}
        component={TestCompleteScreen}
      />
      <RootStack.Screen
        name={UserScreens.viewSolutions.routeName}
        component={ViewSolutions}
      />
      <RootStack.Screen
        name={UserScreens.courseTab.routeName}
        component={CourseTab}
      />
      <RootStack.Screen
        name={UserScreens.selectedCourse.routeName}
        component={SelectedCourseScreen}
      />
      <RootStack.Screen
        name={UserScreens.supportScreen.routeName}
        component={ChatBot}
      />
      <RootStack.Screen
        name={UserScreens.myCourses.routeName}
        component={MyCourses}
      />
      <RootStack.Screen
        name={UserScreens.videoScreen.routeName}
        component={VideoScreen}
      />
      <RootStack.Screen
        name={UserScreens.liveClassScreen.routeName}
        component={LiveClassScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
