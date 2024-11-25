import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
import AntIcon from 'react-native-vector-icons/AntDesign';
import ClassIcon from '../../../assets/images/SelectedCourseICon.jpg';
import {TouchableOpacity} from 'react-native';
import {UserScreens} from '../../common/routes/user/user.screens';
import {BallIndicator, MaterialIndicator} from 'react-native-indicators';

const SelectedCourseScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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
            Selected Course
          </Text>
        </View>
        <View style={[BorderStyle.borderBottomPrimary, Margins.mtMd]} />
      </View>
      <View
        style={[
          BaseStyle.alignCenter,
          BaseStyle.flexContainer,
          BaseStyle.justifyCenter,
        ]}>
        <Image
          source={ClassIcon}
          resizeMode="contain"
          style={{width: '90%', height: 210}}
        />
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontFamily: FontFamily.INTER_BOLD,
              fontSize: fontSizes.lg,
            },
            Margins.mtLg,
          ]}>
          You have selected Class 10
        </Text>
        <View style={[styles.btnsub1, Margins.mtXl]}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
            ]}
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                navigation.navigate('Dashboard');
              }, 1500);
            }}>
            {loading ? (
              <View style={[Paddings.paddingMd]}>
                <BallIndicator color="white" size={18} />
              </View>
            ) : (
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                  textAlign: 'center',
                }}>
                Proceed
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectedCourseScreen;

const styles = StyleSheet.create({
  btnsub1: {
    width: '80%',
  },
});
