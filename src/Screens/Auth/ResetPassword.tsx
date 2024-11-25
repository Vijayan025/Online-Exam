import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontFamily} from '../../types/Fonts';
import {AuthScreens} from '../../common/routes/auth/auth.screens';

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
  } = useForm({});
  const route = useRoute();
  const newPassword = watch('newPassword');
  const {navigate, addListener} = useNavigation();

  const onSubmit = (data: any) => {
    navigate(AuthScreens.login.routeName);
  };

  useEffect(() => {
    const removeBeforeRemoveListener = addListener('beforeRemove', e => {
      if (['POP', 'GO_BACK'].includes(e?.data?.action.type)) {
        e.preventDefault();
      }
    });

    return () => {
      removeBeforeRemoveListener();
    };
  }, [addListener]);

  const validateConfirmPassword = (value: any) => {
    return value === newPassword || 'Passwords do not match';
  };

  return (
    <SafeAreaView
      style={[
        Background.lightWhite,
        BaseStyle.justifyCenter,
        BaseStyle.flexContainer,
        Paddings.paddingHorizontalMedium,
      ]}>
      <View
        style={[
          {minHeight: 400, elevation: 5},
          BorderStyle.borderRadiusMedium,
          Background.white,
        ]}>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.lg,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Paddings.paddingHorizontalExtraMedium,
            Margins.mtXl,
            Margins.mbMd,
          ]}>
          Reset Password
        </Text>
        <KeyboardAwareScrollView
          enableOnAndroid
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
          style={[BaseStyle.flexContainer]}>
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtLg]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.smm,
                fontFamily: FontFamily.INTER_BOLD,
              }}>
              New Password
            </Text>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'New password is required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  placeholder="Enter your new password"
                  mode="flat"
                  style={[styles.textInput, Background.white, {fontSize: 14}]}
                  textColor={ColorLabels.BLACK}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  secureTextEntry={passwordVisible}
                  autoCapitalize="none"
                  contentStyle={{paddingHorizontal: 10}}
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      iconColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
                    />
                  }
                />
              )}
              name="newPassword"
            />
            {errors.newPassword && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.newPassword.message}
              </Text>
            )}
          </View>
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtLg]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.smm,
                fontFamily: FontFamily.INTER_BOLD,
              }}>
              Confirm Password
            </Text>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Confirm password is required',
                },
                validate: validateConfirmPassword,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  mode="flat"
                  placeholder="Enter your new password again"
                  style={[styles.textInput, Background.white, {fontSize: 14}]}
                  textColor={ColorLabels.BLACK}
                  placeholderTextColor={ColorLabels.GREY}
                  contentStyle={{paddingHorizontal: 10}}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  value={value}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  secureTextEntry={confirmPasswordVisible}
                  right={
                    <TextInput.Icon
                      icon={confirmPasswordVisible ? 'eye' : 'eye-off'}
                      onPress={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                      iconColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
                    />
                  }
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.confirmPassword.message}
              </Text>
            )}
          </View>
          <View
            style={[
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtMd,
              Margins.mbLg,
            ]}>
            <TouchableOpacity
              style={[
                isValid ? Background.primary : Background.white,
                Margins.mtLg,
                {
                  padding: 10,
                  borderColor: theme.colors[ColorLabels.GREY],
                  borderWidth: isValid ? 0 : 1,
                },
                BorderStyle.borderRadiusMedium,
              ]}
              onPress={handleSubmit(onSubmit)}>
              <Text
                style={{
                  color: isValid
                    ? theme.colors[ColorLabels.WHITE]
                    : theme.colors[ColorLabels.GREY],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  textAlign: 'center',
                }}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    minHeight: 550,
  },
  textInput: {
    minWidth: 294,
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
    height: 50,
    paddingHorizontal: 2,
  },
  borderStyle: {
    minHeight: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
