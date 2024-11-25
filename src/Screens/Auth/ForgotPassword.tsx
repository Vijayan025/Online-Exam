import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Layout} from '../../styles/Layout';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {BaseStyle} from '../../styles/Base';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Paddings} from '../../styles/Padding';
import {BorderStyle} from '../../styles/Border';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontFamily} from '../../types/Fonts';
import config from '../../common/config';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {AuthScreens} from '../../common/routes/auth/auth.screens';

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({});
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    navigation.navigate(AuthScreens.otpScreen.routeName);
  };
  return (
    <SafeAreaView
      style={[
        Background.lightWhite,
        BaseStyle.justifyCenter,
        Paddings.paddingHorizontalMedium,
        BaseStyle.flexContainer,
      ]}>
      <View
        style={[
          {minHeight: 300, elevation: 5},
          BorderStyle.borderRadiusMedium,
          Background.white,
        ]}>
        <KeyboardAwareScrollView
          enableOnAndroid
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
          style={[BaseStyle.flexContainer]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.lg,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtLg,
              Margins.mbXl,
            ]}>
            Forgot Password
          </Text>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.INTER_BOLD,
              },
              BaseStyle.textCenter,
            ]}>
            Enter email to reset Password
          </Text>
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtXMd]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: config.emailRegex,
                  message: 'Invalid email',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  contentStyle={{paddingHorizontal: 10}}
                  label="Email"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={{color: theme.colors[ColorLabels.RED]}}>
                {errors.email.message}
              </Text>
            )}
          </View>
          <View
            style={[
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtLg,
              Margins.mbLg,
            ]}>
            <TouchableOpacity
              style={[
                Background.primary,
                Margins.mtLg,
                {minHeight: 40},
                BaseStyle.justifyCenter,
                BorderStyle.borderRadiusMedium,
              ]}
              onPress={handleSubmit(onSubmit)}>
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  textAlign: 'center',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    minHeight: 550,
  },
  textInput: {
    minWidth: 294,
    borderColor: 'black',
    height: 52,
    borderRadius: 40,
  },
  borderStyle: {
    minHeight: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
