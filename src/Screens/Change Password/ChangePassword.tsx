import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Margins} from '../../styles/Margins';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {Paddings} from '../../styles/Padding';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Controller, useForm} from 'react-hook-form';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {TextInput} from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BorderStyle} from '../../styles/Border';

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({});
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(true);

  const oldPassword = 'test';

  const onSubmit = (data: any) => {
    navigation.navigate('Profile');
  };
  const newPassword = watch('newPassword');
  const validateConfirmPassword = (value: any) => {
    return value === newPassword || 'Passwords do not match';
  };
  const currentPass = oldPassword;
  const validateCurrentPassword = (value: any) => {
    return value === currentPass || 'Current password does not match';
  };
  const validateNewPassword = (value: any) => {
    const currentPassword = watch('currentPassword');
    return (
      value !== currentPassword ||
      'New Password must be different from the current password'
    );
  };
  return (
    <SafeAreaView
      style={[
        BaseStyle.flexContainer,
        Background.white,
        Paddings.paddingHorizontalMedium,
      ]}>
      <View>
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
            Change Password
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
        <View
          style={[
            Background.white,
            Paddings.paddingHorizontalSmall,
            BorderStyle.borderLightGreySmall,
            BorderStyle.borderRadiusMedium,
            {elevation: 5, minHeight: 410},
            Margins.mtMLg,
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
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                  marginLeft: -10,
                },
                Paddings.paddingHorizontalExtraMedium,
                Margins.mtLg,
                Margins.mbMd,
              ]}>
              Enter your passwords to change
            </Text>
            <View style={[Paddings.paddingHorizontalMedium, Margins.mtSm]}>
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Current password is required',
                    },
                    validate: validateCurrentPassword,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInputPaper
                      style={[
                        styles.textInput,
                        Background.white,
                        {fontSize: 14},
                      ]}
                      textColor={ColorLabels.BLACK}
                      placeholder={'Enter Current Password'}
                      placeholderTextColor={ColorLabels.GREY}
                      outlineColor={theme.colors[ColorLabels.GREY]}
                      value={value}
                      onChangeText={onChange}
                      keyboardType="default"
                      returnKeyType="done"
                      autoCapitalize="none"
                      secureTextEntry={currentPasswordVisible}
                      contentStyle={{paddingHorizontal: 10}}
                      label="Current Password"
                      mode="outlined"
                      right={
                        <TextInput.Icon
                          icon={currentPasswordVisible ? 'eye' : 'eye-off'}
                          onPress={() =>
                            setCurrentPasswordVisible(!currentPasswordVisible)
                          }
                          iconColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
                        />
                      }
                    />
                  )}
                  name="currentPassword"
                />
                <View style={{height: 20}}>
                  {errors.currentPassword && (
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.ERROR_ORANGE],
                      }}>
                      {errors.currentPassword.message}
                    </Text>
                  )}
                </View>
              </View>
              <View style={[Margins.mtSm]}>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'New Password is required',
                    },
                    validate: validateNewPassword,
                  }}
                  render={({field: {onChange, value}}) => (
                    <TextInputPaper
                      style={[
                        styles.textInput,
                        Background.white,
                        {fontSize: 14},
                      ]}
                      textColor={ColorLabels.BLACK}
                      placeholder={'Enter New Password'}
                      label="New Password"
                      mode="outlined"
                      placeholderTextColor={ColorLabels.GREY}
                      outlineColor={theme.colors[ColorLabels.GREY]}
                      contentStyle={{paddingHorizontal: 10}}
                      value={value}
                      onChangeText={onChange}
                      keyboardType="default"
                      returnKeyType="done"
                      autoCapitalize="none"
                      secureTextEntry={passwordVisible}
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
                <View style={{height: 20}}>
                  {errors.newPassword && (
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.ERROR_ORANGE],
                      }}>
                      {errors.newPassword.message}
                    </Text>
                  )}
                </View>
              </View>
              <View style={[Margins.mtSm]}>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Confirm password is required',
                    },
                    validate: validateConfirmPassword,
                  }}
                  render={({field: {onChange, value}}) => (
                    <TextInputPaper
                      style={[
                        styles.textInput,
                        Background.white,
                        {fontSize: 14},
                      ]}
                      textColor={ColorLabels.BLACK}
                      placeholder={'Enter Confirm Password'}
                      label="Confirm Password"
                      mode="outlined"
                      placeholderTextColor={ColorLabels.GREY}
                      outlineColor={theme.colors[ColorLabels.GREY]}
                      contentStyle={{paddingHorizontal: 10}}
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
                <View style={{height: 20}}>
                  {errors.confirmPassword && (
                    <Text
                      style={{
                        color: theme.colors[ColorLabels.ERROR_ORANGE],
                      }}>
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </View>
              </View>
            </View>
            <View
              style={[
                styles.btnmain,
                Margins.mtLg,
                Margins.mbMd,
                Paddings.paddingHorizontalMedium,
              ]}>
              <View style={styles.btnsub1}>
                <TouchableOpacity
                  style={[
                    styles.btn1,
                    BorderStyle.borderRadiusMedium,
                    {
                      backgroundColor: isValid
                        ? theme.colors[ColorLabels.PRIMARY]
                        : theme.colors[ColorLabels.WHITE],
                      borderColor: theme.colors[ColorLabels.GREY],
                      borderWidth: isValid ? 0 : 1,
                    },
                  ]}
                  onPress={handleSubmit(onSubmit)}>
                  <Text
                    style={{
                      color: isValid ? 'white' : theme.colors[ColorLabels.GREY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    }}>
                    Change Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  mainStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textInput: {
    minWidth: '100%',
    fontSize: 16,
  },
  btn1: {
    alignItems: 'center',
    minHeight: 40,
    justifyContent: 'center',
  },
  btnsub1: {
    width: '100%',
  },
  btnsub2: {
    width: '45%',
  },
  btn2: {
    backgroundColor: theme.colors[ColorLabels.BLACK],
    borderColor: theme.colors[ColorLabels.BLACK],
    borderWidth: 1,
    alignItems: 'center',
    minHeight: 40,
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 5,
  },
  btnmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
});
