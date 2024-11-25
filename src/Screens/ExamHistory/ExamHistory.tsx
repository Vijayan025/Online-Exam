import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {Paddings} from '../../styles/Padding';
import {BorderStyle} from '../../styles/Border';
import PhysicsIcon from '../../../assets/images/physicsIcon.png';
import ChemistryIcon from '../../../assets/images/chemistryIcon.png';
import BiologyIcon from '../../../assets/images/biologyIcon.png';
import EnglishIcon from '../../../assets/images/englishIcon.png';
import ComputerLogo from '../../../assets/images/computerLogo.png';
import {useNavigation} from '@react-navigation/native';
import BankIcon from '../../../assets/images/bankLogo.png';

const ExamHistory = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Class 12');
  const renderSubjects = () => {
    if (selectedCategory === 'Class 12') {
      return (
        <View style={[Margins.mtMd]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                  borderBottomColor: theme.colors[ColorLabels.PRIMARY],
                  borderBottomWidth: 1.5,
                },
              ]}>
              Class 12
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.smm,
                },

                Margins.mlSm,
              ]}>
              : Test 1
            </Text>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={PhysicsIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                Physics
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 70/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={ChemistryIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                Chemistry
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 40/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BiologyIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                Biology
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 80/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={EnglishIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                English
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 60/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={ComputerLogo} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                Computer Science
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 90/100
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (selectedCategory === 'Bank Exam') {
      return (
        <View style={[Margins.mtMd]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                  borderBottomColor: theme.colors[ColorLabels.PRIMARY],
                  borderBottomWidth: 1.5,
                },
              ]}>
              Bank Exam
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.smm,
                },
                Margins.mlSm,
              ]}>
              : Test 1
            </Text>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BankIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                SPI PO
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 100/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BankIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                SBI Clerk
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 10/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BankIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                RBI Asst
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 50/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BankIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                LIC AAO
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 90/100
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              BorderStyle.borderLightGreyFull,

              Margins.mtXMd,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}>
            <View
              style={[
                {
                  padding: 4,
                },
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image source={BankIcon} style={styles.pic} />
            </View>
            <View style={[Margins.mlMd]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.md,
                }}>
                LIC ADO
              </Text>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontFamily: FontFamily.INTER_REGULAR,
                  fontSize: fontSizes.sm,
                }}>
                Score : 30/100
              </Text>
            </View>
          </View>
        </View>
      );
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
            Exam Scores
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[BaseStyle.flexContainer, Paddings.paddingHorizontalMedium]}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExamHistory;

const styles = StyleSheet.create({
  pic: {
    width: 35,
    height: 35,
  },
});
