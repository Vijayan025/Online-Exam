import {StyleSheet, Text, View} from 'react-native';
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
import CourseIcon from '../../../assets/images/courseIcon.png';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

const MyCourses = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const containerStyle = {backgroundColor: theme.colors[ColorLabels.WHITE]};

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
            My Courses
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BorderStyle.borderLightGreyFull,
            Margins.mtLg,
            Paddings.paddingSm,
            BorderStyle.borderRadiusMedium,
            Background.white,
          ]}>
          <Image
            source={CourseIcon}
            resizeMode="contain"
            style={{width: 65, height: 65, borderRadius: 50}}
          />
          <View style={[Margins.mlLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_BOLD,
                  fontSize: fontSizes.smd,
                },
                Margins.mbMd,
              ]}>
              Class 12
            </Text>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View style={[styles.btnsub1, Margins.mrLg]}>
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.PRIMARY],
                      padding: 5,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusSmall,
                  ]}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.btnsub1]}>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.WHITE],
                      padding: 5,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusSmall,
                    BorderStyle.borderPrimary,
                  ]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BorderStyle.borderLightGreyFull,
            Margins.mtLg,
            Paddings.paddingSm,
            BorderStyle.borderRadiusMedium,
            Background.white,
          ]}>
          <Image
            source={CourseIcon}
            resizeMode="contain"
            style={{width: 65, height: 65, borderRadius: 50}}
          />
          <View style={[Margins.mlLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_BOLD,
                  fontSize: fontSizes.smd,
                },
                Margins.mbMd,
              ]}>
              Bank Exams
            </Text>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View style={[styles.btnsub1, Margins.mrLg]}>
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.PRIMARY],
                      padding: 5,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusSmall,
                  ]}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.btnsub1]}>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.WHITE],
                      padding: 5,
                    },
                    BaseStyle.justifyCenter,
                    BorderStyle.borderRadiusSmall,
                    BorderStyle.borderPrimary,
                  ]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
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
                  textAlign: 'center',
                },
              ]}>
              Are you sure you want to remove this course?
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
                  onPress={() => setShow(false)}>
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

export default MyCourses;

const styles = StyleSheet.create({
  btnsub1: {
    width: '40%',
  },
});
