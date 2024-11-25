import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import {useNavigation} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Layout} from '../../styles/Layout';
import {UserScreens} from '../../common/routes/user/user.screens';

const ViewSolutions = () => {
  const navigation = useNavigation();
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
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.PRIMARY]}
            size={20}
            style={[Margins.mrSm]}
            onPress={() => navigation.navigate('Dashboard')}
          />
          <Text
            style={{
              color: theme.colors[ColorLabels.PRIMARY],
              fontFamily: FontFamily.INTER_SEMIBOLD,
              fontSize: fontSizes.smd,
            }}>
            Solutions
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            Margins.mtMd,
            Margins.mbMd,
          ]}>
          {questions &&
            questions?.map((question, index) => (
              <View key={index} style={[BaseStyle.flexRow, Margins.mtMd]}>
                <Text
                  style={{
                    color: theme.colors[ColorLabels.BLACK],
                    fontFamily: FontFamily.INTER_SEMIBOLD,
                    fontSize: fontSizes.md,
                  }}>
                  {index + 1}.{' '}
                </Text>
                <View style={[Layout.flex1]}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.BLACK],
                      fontFamily: FontFamily.INTER_SEMIBOLD,
                      fontSize: fontSizes.md,
                    }}>
                    {question?.text}
                  </Text>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontFamily: FontFamily.INTER_REGULAR,
                        fontSize: fontSizes.md,
                      },
                      Margins.mtMd,
                    ]}>
                    Answer : {question?.correctAnswer}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewSolutions;

const styles = StyleSheet.create({});
