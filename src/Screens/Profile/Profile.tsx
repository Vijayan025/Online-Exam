import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import UserIcon from '../../../assets/images/userIcon.png';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import {Layout} from '../../styles/Layout';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import EntIcon from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import RadioButton from '../../common/ui/RadioButton';
import {Modal, Portal} from 'react-native-paper';
import {useNavigationSource} from '../Common/NavigationSource';

const Profile = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [show, setShow] = useState(false);
  const {setNavigationSource}: any = useNavigationSource();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  const handleRadioButtonSelection = (option: string) => {
    setSelectedOption(option);
  };
  const containerStyle = {backgroundColor: theme.colors[ColorLabels.WHITE]};

  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          BaseStyle.flexRow,
          Paddings.paddingHorizontalMedium,
          Background.white,
          Paddings.paddingVerticalMedium,
          {elevation: 7},
          BaseStyle.alignCenter,
        ]}>
        <Image
          source={UserIcon}
          style={{width: 60, height: 60, borderRadius: 50}}
        />
        <View
          style={[
            Margins.mlMd,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            Layout.flex1,
          ]}>
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
              Vijay
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                },
                Margins.mrSm,
                Margins.mbXSm,
              ]}>
              Class XII - ID : 1003
            </Text>
          </View>
          <Text
            onPress={() =>
              navigation.navigate(UserScreens.editProfile.routeName)
            }
            style={[
              {
                color: theme.colors[ColorLabels.PRIMARY],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.sm,
                paddingVertical: 3,
                paddingHorizontal: 5,
              },
              Margins.mrSm,
              BorderStyle.borderPrimary,
              BorderStyle.borderRadiusSmall,
            ]}>
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium, BaseStyle.flexContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.myCourses.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e2f5e2'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <FontIcon
                name="book"
                color={'#5cb65c'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  My Courses
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
                  Selected Courses
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('examHistory')}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e3f4f7'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <EntIcon
                name="time-slot"
                color={'#59c2d3'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Exam Scores
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
                  All Subjects
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.myCourseLists.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e7e5f2'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <MatIcon
                name="edit-note"
                color={'#7977a9'}
                size={28}
                style={[Margins.mrLg, Margins.mlSm]}
              />
              <View style={{marginLeft: -3}}>
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
                  Take Test
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
                  All Subjects
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.courseTab.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#fef0e4'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <EntIcon
                name="shuffle"
                color={'#f5b670'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Change Course
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
                  List Of Courses
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.referEarn.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e3f4f7'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <EntIcon
                name="share"
                color={'#59c2d3'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Refer & Earn
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
                  Refer Your Friends
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.supportScreen.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e2f5e2'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <MatIcon
                name="support-agent"
                color={'#5cb65c'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Support
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
                  To Resolve Queries
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.changePassword.routeName)
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#e7e5f2'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <MatIcon
                name="password"
                color={'#7977a9'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Change Password
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
                  Password
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              bottomSheetModalRef.current.present();
            }}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#fef0e4'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <MatIcon
                name="dark-mode"
                color={'#f5b670'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Dark Mode
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
                  Change to dark or light mode
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setShow(true);
            }}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {backgroundColor: '#ffd0d6'},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
                Margins.mtLg,
              ]}>
              <MatIcon
                name="logout"
                color={'#ec3c51'}
                size={25}
                style={[Margins.mrLg, Margins.mlSm]}
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
                  Logout
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
                  Logout Account
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={[BaseStyle.alignCenter, Margins.mtLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.PRIMARY],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                Margins.mtLg,
              ]}>
              Powered By Yaa Creations
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
                Margins.mtSm,
              ]}>
              App Version 0.1
            </Text>
          </View>
          <View style={[Margins.mbXl]} />
        </ScrollView>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing
        backgroundStyle={{backgroundColor: theme.colors[ColorLabels.WHITE]}}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        handleHeight={50}
        onDismiss={() => bottomSheetModalRef.current?.close()}>
        <BottomSheetView>
          <View
            style={[
              Paddings.paddingVerticalSmall,
              Margins.mbLg,
              Paddings.paddingHorizontalMedium,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mtSm,
              ]}>
              Dark Mode
            </Text>
            <TouchableOpacity onPress={() => handleRadioButtonSelection('On')}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtLg,
                ]}>
                {selectedOption === 'On' ? (
                  <MatIcon
                    name="radio-button-on"
                    size={20}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                ) : (
                  <MatIcon
                    name="radio-button-off"
                    size={20}
                    color={theme.colors[ColorLabels.LIGHT_BLACK]}
                  />
                )}
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mlLg,
                  ]}>
                  On
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRadioButtonSelection('Off')}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtLg,
                ]}>
                {selectedOption === 'Off' ? (
                  <MatIcon
                    name="radio-button-on"
                    size={20}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                ) : (
                  <MatIcon
                    name="radio-button-off"
                    size={20}
                    color={theme.colors[ColorLabels.LIGHT_BLACK]}
                  />
                )}
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mlLg,
                  ]}>
                  Off
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRadioButtonSelection('System Default')}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtLg,
                ]}>
                {selectedOption === 'System Default' ? (
                  <MatIcon
                    name="radio-button-on"
                    size={20}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                ) : (
                  <MatIcon
                    name="radio-button-off"
                    size={20}
                    color={theme.colors[ColorLabels.LIGHT_BLACK]}
                  />
                )}
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mlLg,
                  ]}>
                  System Default
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      <Portal>
        <Modal
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexRow,
            BaseStyle.flexColumn,
          ]}
          visible={show}
          onDismiss={() => {
            setShow(false);
          }}
          contentContainerStyle={[
            containerStyle,
            BorderStyle.borderRadiusMedium,
          ]}>
          <View
            style={[
              Paddings.paddingHorizontalMediumXl,
              Margins.mtMd,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingVerticalLarge,
              BaseStyle.alignCenter,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
              ]}>
              Are you sure you want to logout?
            </Text>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtLg,
                BaseStyle.justifySpaceBetween,
              ]}>
              <View style={[styles.btnsub1, Margins.mrMd]}>
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.PRIMARY],
                      padding: 7,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusMedium,
                  ]}
                  onPress={() => setNavigationSource('')}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.btnsub1]}>
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.WHITE],
                      padding: 7,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusMedium,
                    BorderStyle.borderPrimary,
                  ]}
                  onPress={() => setShow(false)}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btnsub1: {
    width: '48%',
  },
});
