import {
  BackHandler,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import EntIcon from 'react-native-vector-icons/Entypo';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const QuizScreen = () => {
  const questions = [
    {
      text: 'A pull or a push applied or exerted on an object is?',
      options: ['Energy', 'Force', 'Velocity', 'Distance'],
      correctAnswer: 'Force',
    },
    {
      text: 'The ability to do work is?',
      options: ['Energy', 'Force', 'Velocity', 'Heat'],
      correctAnswer: 'Heat',
    },
    {
      text: 'is said to be done when a force of 1Newton moves an object of mass 1 gram, 1 meter in the direction of the force.?',
      options: ['Energy', 'Force', 'Time', 'Work'],
      correctAnswer: 'Work',
    },
    {
      text: 'The ability to do work is?',
      options: ['Energy', 'Force', 'Velocity', 'Heat'],
      correctAnswer: 'Heat',
    },
    {
      text: 'A pull or a push applied or exerted on an object is?',
      options: ['Energy', 'Force', 'Velocity', 'Distance'],
      correctAnswer: 'Force',
    },
    {
      text: 'A pull or a push applied or exerted on an object is?',
      options: ['Energy', 'Force', 'Velocity', 'Distance'],
      correctAnswer: 'Force',
    },
    {
      text: 'The ability to do work is?',
      options: ['Energy', 'Force', 'Velocity', 'Heat'],
      correctAnswer: 'Heat',
    },
    {
      text: 'is said to be done when a force of 1Newton moves an object of mass 1 gram, 1 meter in the direction of the force.?',
      options: ['Energy', 'Force', 'Time', 'Work'],
      correctAnswer: 'Work',
    },
    {
      text: 'The ability to do work is?',
      options: ['Energy', 'Force', 'Velocity', 'Heat'],
      correctAnswer: 'Heat',
    },
    {
      text: 'A pull or a push applied or exerted on an object is?',
      options: ['Energy', 'Force', 'Velocity', 'Distance'],
      correctAnswer: 'Force',
    },
  ];
  const totalQuestions = questions?.length;
  const [seconds, setSeconds] = useState(10 * 60);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          setShowSubmitModal(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const selectedOptionCount =
    selectedOptions &&
    selectedOptions?.filter(option => option !== null)?.length;
  const unselectedOptionCount = totalQuestions - selectedOptionCount;
  const renderOption = (
    option:
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.Key
      | null
      | undefined,
  ) => {
    const isSelected = selectedOptions[currentQuestionIndex] === option;

    let borderColor = theme.colors[ColorLabels.LIGHT_GREY];
    let icon = (
      <MatIcon
        name="radio-button-off"
        size={20}
        color={theme.colors[ColorLabels.GREY]}
      />
    );

    if (isSelected) {
      borderColor = theme.colors[ColorLabels.LIGHT_GREEN];

      icon = (
        <MatIcon
          name="check-circle"
          size={20}
          color={theme.colors[ColorLabels.LIGHT_GREEN]}
        />
      );
    }
    const handleSelectOption = () => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[currentQuestionIndex] = option;
      setSelectedOptions(newSelectedOptions);
    };

    return (
      <TouchableOpacity
        onPress={() => handleSelectOption(option)}
        key={option}
        style={[
          BorderStyle.borderRadiusMedium,
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
          Paddings.paddingSm,
          Margins.mtLg,
          {borderColor, borderWidth: 1},
          isSelected && {borderColor: theme.colors[ColorLabels.LIGHT_GREEN]},
        ]}>
        <Text
          style={{
            color: theme.colors[ColorLabels.LIGHT_BLACK],
            fontFamily: FontFamily.INTER_SEMIBOLD,
            fontSize: fontSizes.smm,
          }}>
          {option}
        </Text>
        {icon}
      </TouchableOpacity>
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex =>
      Math.min(prevIndex + 1, questions.length - 1),
    );
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleBackButton = () => {
    if (seconds > 0) {
      setShowExitModal(true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [seconds]);
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Background.primary,
            Paddings.paddingLg,
            {elevation: 10},
          ]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.WHITE],
                fontFamily: FontFamily.INTER_BOLD,
                fontSize: fontSizes.smd,
              },
              Margins.mlSm,
            ]}>
            Physics Online Test
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            Margins.mtLg,
            Background.white,
            BorderStyle.borderLightGreyFull,
            Paddings.paddingSm,
            BorderStyle.borderRadiusMedium,
            {elevation: 5},
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[BaseStyle.flexRow, Margins.mrMd]}>
              <EntIcon
                name="dot-single"
                color={theme.colors[ColorLabels.LIGHT_GREEN]}
                size={25}
              />
              <View style={[Margins.mtXsm]}>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.LIGHT_GREEN],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                  }}>
                  {selectedOptionCount}
                </Text>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.sm,
                  }}>
                  Answered
                </Text>
              </View>
            </View>
            <View style={[BaseStyle.flexRow]}>
              <EntIcon
                name="dot-single"
                color={theme.colors[ColorLabels.RED]}
                size={25}
              />
              <View style={[Margins.mtXsm]}>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.RED],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                  }}>
                  {unselectedOptionCount}
                </Text>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.sm,
                  }}>
                  Not Answered
                </Text>
              </View>
            </View>
          </View>
          <Pressable onPress={() => setShowSubmitModal(true)}>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.WHITE],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                  },
                  Margins.mrSm,
                  BorderStyle.borderPrimary,
                  BorderStyle.borderRadiusSmall,
                  Background.primary,
                ]}>
                Submit
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[BaseStyle.flexContainer, Paddings.paddingHorizontalMedium]}>
          <View
            style={[
              Background.white,
              {
                elevation: 5,
                marginTop: 60,
                borderColor:
                  minutes < 1
                    ? theme.colors[ColorLabels.RED]
                    : theme.colors[ColorLabels.PRIMARY],
                borderWidth: 0.8,
              },
              BorderStyle.borderRadiusMedium,
            ]}>
            <View style={[BaseStyle.alignCenter, {marginTop: -30}]}>
              <View
                style={[
                  BaseStyle.alignCenter,
                  {
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    borderColor:
                      minutes < 1
                        ? theme.colors[ColorLabels.RED]
                        : theme.colors[ColorLabels.PRIMARY],
                    borderWidth: 4,
                    elevation: 5,
                  },
                  BaseStyle.justifyCenter,
                  Background.white,
                ]}>
                <Text
                  style={{
                    color:
                      minutes < 1
                        ? theme.colors[ColorLabels.RED]
                        : theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_BOLD,
                    fontSize: fontSizes.sm,
                  }}>
                  {minutes?.toString()?.padStart(2, '0')}:
                  {remainingSeconds?.toString()?.padStart(2, '0')}
                </Text>
              </View>
            </View>
            <View style={[BaseStyle.alignCenter, Margins.mtLg]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.PRIMARY],
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  fontSize: fontSizes.sm,
                }}>
                Question{'  '}
                <Text
                  style={{
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontFamily: FontFamily.INTER_BOLD,
                    fontSize: fontSizes.smd,
                  }}>
                  {currentQuestionIndex + 1}{' '}
                </Text>
                / {totalQuestions}
              </Text>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                Paddings.paddingVerticalLarge,
                Paddings.paddingHorizontalMedium,
              ]}>
              <Text
                style={{
                  color: theme.colors[ColorLabels.LIGHT_BLACK],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.md,
                  lineHeight: 22,
                  letterSpacing: 0.2,
                }}>
                {questions && questions[currentQuestionIndex]?.text}
              </Text>
            </View>
          </View>
          <View style={[Margins.mtLg]}>
            {questions &&
              questions[currentQuestionIndex]?.options?.map(option =>
                renderOption(option),
              )}
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
            ]}>
            <View style={[styles.btnsub1, Margins.mtXl]}>
              {currentQuestionIndex > 0 && (
                <TouchableOpacity
                  onPress={handlePreviousQuestion}
                  style={[
                    {
                      backgroundColor: theme.colors[ColorLabels.WHITE],
                      borderColor: theme.colors[ColorLabels.PRIMARY],
                      borderWidth: 1,
                    },
                    BaseStyle.justifyCenter,
                    Paddings.paddingSm,
                    BorderStyle.borderRadiusMedium,
                  ]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Previous
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={[styles.btnsub1, Margins.mtXl]}>
              {currentQuestionIndex < questions.length - 1 && (
                <TouchableOpacity
                  style={[
                    {backgroundColor: theme.colors[ColorLabels.PRIMARY]},
                    BaseStyle.justifyCenter,
                    Paddings.paddingSm,
                    BorderStyle.borderRadiusMedium,
                  ]}
                  onPress={handleNextQuestion}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={[Margins.mbLg]} />
        </View>
      </ScrollView>
      <Modal
        onDismiss={() => setShowExitModal(false)}
        style={[
          Paddings.paddingHorizontalMedium,
          BaseStyle.flexRow,
          BaseStyle.flexColumn,
        ]}
        visible={showExitModal}
        contentContainerStyle={[
          Background.white,
          BorderStyle.borderRadiusMedium,
        ]}>
        <View
          style={[
            Paddings.paddingHorizontalMediumXl,
            Margins.mtMd,
            BaseStyle.justifySpaceBetween,
            Paddings.paddingHorizontalLarge,
          ]}>
          <Text style={styles.modalText}>
            Are you sure you want to exit the test ?
          </Text>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.justifySpaceBetween,
              BaseStyle.alignCenter,
            ]}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowExitModal(false)}>
              <Text style={styles.textStyle1}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={() =>
                navigation.navigate(UserScreens.testsList.routeName)
              }>
              <Text style={styles.textStyle}>Exit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {minutes === 0 ? (
        <Modal
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexRow,
            BaseStyle.flexColumn,
          ]}
          visible={showSubmitModal}
          contentContainerStyle={[
            Background.white,
            BorderStyle.borderRadiusMedium,
          ]}>
          <View
            style={[
              Paddings.paddingHorizontalMediumXl,
              Margins.mtMd,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingHorizontalLarge,
            ]}>
            <Text style={styles.modalText}>Time Over</Text>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.justifySpaceBetween,
                BaseStyle.alignCenter,
              ]}>
              <Pressable
                style={[styles.button, styles.buttonConfirm, {width: '100%'}]}
                onPress={() =>
                  navigation.navigate(UserScreens.testComplete.routeName)
                }>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          onDismiss={() => setShowSubmitModal(false)}
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexRow,
            BaseStyle.flexColumn,
          ]}
          visible={showSubmitModal}
          contentContainerStyle={[
            Background.white,
            BorderStyle.borderRadiusMedium,
          ]}>
          <View
            style={[
              Paddings.paddingHorizontalMediumXl,
              Margins.mtMd,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingHorizontalLarge,
            ]}>
            <Text style={styles.modalText}>
              Are you sure you want to Submit this test ?
            </Text>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.justifySpaceBetween,
                BaseStyle.alignCenter,
              ]}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setShowSubmitModal(false)}>
                <Text style={styles.textStyle1}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={() =>
                  navigation.navigate(UserScreens.testComplete.routeName)
                }>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  btnsub1: {
    width: '48%',
  },
  button: {
    borderRadius: 7,
    padding: 8,
    marginVertical: 25,
    width: '48%',
  },
  buttonClose: {
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
  },
  buttonConfirm: {
    backgroundColor: theme.colors[ColorLabels.PRIMARY],
  },
  textStyle: {
    color: theme.colors[ColorLabels.WHITE],
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle1: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 7,
    textAlign: 'center',
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    marginTop: 15,
  },
});
