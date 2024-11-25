import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import LandingIcon from '../../../assets/images/landingIcon.png';
import {BorderStyle} from '../../styles/Border';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AuthScreens} from '../../common/routes/auth/auth.screens';
import LandingMainIcon from '../../../assets/images/LandingMainIcon.png';
const Landing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          BaseStyle.alignCenter,
          Paddings.paddingHorizontalLarge,
          BaseStyle.flexContainer,
          BaseStyle.justifyEvenly,
        ]}>
        <View>
          <View style={[BaseStyle.alignCenter]}>
            <Image
              source={LandingMainIcon}
              resizeMode="contain"
              style={[{width: 60, height: 60, borderRadius: 50}, Margins.mbMd]}
            />
          </View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_BOLD,
                fontSize: fontSizes.lg,
                lineHeight: 30,
              },
              BaseStyle.textCenter,
            ]}>
            Elevate your learning experience with our tests
          </Text>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.GREY_LIGHT],
                fontFamily: FontFamily.INTER_REGULAR,
                fontSize: fontSizes.sm,
                lineHeight: 20,
              },
              BaseStyle.textCenter,
              Margins.mtSm,
            ]}>
            Preparing minds for tomorrow's challenges
          </Text>
        </View>
        <Image
          source={LandingIcon}
          resizeMode="contain"
          style={{width: '100%', height: 300}}
        />
        <View style={[styles.btnsub1]}>
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthScreens.login.routeName)}
            style={[
              {
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingLg,
              BorderStyle.borderRadiusMedium,
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
            ]}>
            <Text
              style={{
                color: ColorLabels.WHITE,
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_BOLD,
                textAlign: 'center',
              }}>
              Login
            </Text>
            <AntIcon
              name="login"
              color={theme.colors[ColorLabels.WHITE]}
              size={18}
              style={[Margins.mlMd]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
