import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
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
import {UserScreens} from '../../common/routes/user/user.screens';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import BankLogo from '../../../assets/images/bankLogo.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Modal, Portal} from 'react-native-paper';

const MyCourseLists = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Class 12');
  const [show, setShow] = useState(false);

  const renderSubjects = () => {
    if (selectedCategory === 'Class 12') {
      return (
        <View style={[Margins.mtMd]}>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        1/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        2/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        6/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        7/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        4/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
        </View>
      );
    } else if (selectedCategory === 'Bank Exam') {
      return (
        <View style={[Margins.mtMd]}>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                  <Image source={BankLogo} style={styles.pic} />
                </View>
                <View style={[Margins.mlMd]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.md,
                    }}>
                    SBI PO
                  </Text>
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        3/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                  <Image source={BankLogo} style={styles.pic} />
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        1/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                  <Image source={BankLogo} style={styles.pic} />
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        7/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                  <Image source={BankLogo} style={styles.pic} />
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        8/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => setShow(true)}>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Background.white,
                BorderStyle.borderLightGreyFull,
                Margins.mtXMd,
                BorderStyle.borderRadiusMedium,
                {padding: 10, elevation: 2},
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
                  <Image source={BankLogo} style={styles.pic} />
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
                </View>
              </View>
              <View style={[Margins.mrMd]}>
                <AnimatedCircularProgress
                  size={45}
                  width={4}
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
                          fontSize: fontSizes.smm,
                        }}>
                        5/10
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </Pressable>
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
            My Courses
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
        <View style={[Margins.mbXl]} />
      </ScrollView>
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
            BorderStyle.borderRadiusMedium,
            Background.white,
          ]}>
          <View
            style={[
              BaseStyle.justifySpaceBetween,
              Paddings.paddingVerticalLarge,
              Paddings.paddingHorizontalMedium,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
              ]}>
              Physics
            </Text>
            <View
              style={{
                borderBottomColor: theme.colors[ColorLabels.PRIMARY],
                borderBottomWidth: 2.5,
                width: 30,
                marginTop: 2,
              }}
            />
            <View
              style={[
                Background.white,
                BorderStyle.borderRadiusMedium,
                Margins.mtMd,
              ]}>
              <Pressable
                onPress={() => {
                  setShow(false);
                  navigation.navigate(UserScreens.testsList.routeName, {
                    name: 'Physics',
                  });
                }}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                    Paddings.paddingSm,
                  ]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontFamily: FontFamily.INTER_REGULAR,
                          fontSize: fontSizes.smd,
                        },
                        Margins.mrMd,
                      ]}>
                      1.
                    </Text>
                    <View>
                      <Text
                        style={[
                          {
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_SEMIBOLD,
                            fontSize: fontSizes.md,
                          },
                          Margins.mbXSm,
                        ]}>
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
                  <IonIcon
                    name="arrow-forward-circle"
                    color={theme.colors[ColorLabels.PRIMARY]}
                    size={23}
                  />
                </View>
              </Pressable>
              <View
                style={[
                  BorderStyle.borderBottomPrimary,
                  Margins.mtSm,
                  Margins.mbSm,
                ]}
              />
              <Pressable
                onPress={() => {
                  setShow(false);
                  navigation.navigate(UserScreens.testsList.routeName, {
                    name: 'Physics',
                  });
                }}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                    Paddings.paddingSm,
                  ]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontFamily: FontFamily.INTER_REGULAR,
                          fontSize: fontSizes.smd,
                        },
                        Margins.mrMd,
                      ]}>
                      2.
                    </Text>
                    <View>
                      <Text
                        style={[
                          {
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_SEMIBOLD,
                            fontSize: fontSizes.md,
                          },
                          Margins.mbXSm,
                        ]}>
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
                  <IonIcon
                    name="arrow-forward-circle"
                    color={theme.colors[ColorLabels.PRIMARY]}
                    size={23}
                  />
                </View>
              </Pressable>
              <View
                style={[
                  BorderStyle.borderBottomPrimary,
                  Margins.mtSm,
                  Margins.mbSm,
                ]}
              />
              <Pressable
                onPress={() => {
                  setShow(false);
                  navigation.navigate(UserScreens.testsList.routeName, {
                    name: 'Physics',
                  });
                }}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                    Paddings.paddingSm,
                  ]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontFamily: FontFamily.INTER_REGULAR,
                          fontSize: fontSizes.smd,
                        },
                        Margins.mrMd,
                      ]}>
                      3.
                    </Text>
                    <View>
                      <Text
                        style={[
                          {
                            color: theme.colors[ColorLabels.BLACK],
                            fontFamily: FontFamily.INTER_SEMIBOLD,
                            fontSize: fontSizes.md,
                          },
                          Margins.mbXSm,
                        ]}>
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
                  <IonIcon
                    name="arrow-forward-circle"
                    color={theme.colors[ColorLabels.PRIMARY]}
                    size={23}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default MyCourseLists;

const styles = StyleSheet.create({
  pic: {
    width: 35,
    height: 35,
  },
});
