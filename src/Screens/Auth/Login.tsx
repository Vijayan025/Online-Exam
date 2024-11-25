import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createContext, useState} from 'react';
import {Layout} from '../../styles/Layout';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {BaseStyle} from '../../styles/Base';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Paddings} from '../../styles/Padding';
import {TextInput} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../types/Fonts';
import {validateEmail} from '../../common/utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BorderStyle} from '../../styles/Border';
import LoginIcon from '../../../assets/images/LoginIcon.jpg';
import {AuthScreens} from '../../common/routes/auth/auth.screens';
import {useNavigationSource} from '../Common/NavigationSource';

export const LoginContext = createContext(false);
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {setNavigationSource}: any = useNavigationSource();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'admin@yaacreations.com',
      password: '123',
    },
  });
  const navigation = useNavigation();
  const onSubmit = (data: any) => {
    setNavigationSource('VERIFIED');
  };
  const isValidPhoneNumber = (value: string) => {
    const phoneRegex = /^[6-9][0-9]{9}$/;
    return phoneRegex.test(value);
  };

  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[BaseStyle.alignCenter, Margins.mtXl]}>
        <View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.lg,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Paddings.paddingHorizontalExtraMedium,
            ]}>
            Welcome back!
          </Text>
        </View>
      </View>
      <Image
        source={LoginIcon}
        style={[{width: '100%', height: '40%'}, Margins.mtXl]}
        resizeMode="contain"
      />
      <View style={[{height: '45%'}, Margins.mtMd]}>
        <KeyboardAwareScrollView
          enableOnAndroid
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
          style={[BaseStyle.flexContainer]}>
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtMLg]}>
            <Controller
              control={control}
              rules={{
                validate: value => {
                  if (!value) {
                    return 'Email is required';
                  }
                  if (!validateEmail(value)) {
                    return 'Please enter a valid email';
                  }
                  return true;
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'Email'}
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
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtMd]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'Enter Password'}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  keyboardType="default"
                  returnKeyType="done"
                  secureTextEntry={passwordVisible}
                  contentStyle={{paddingHorizontal: 10}}
                  label="Password"
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible(!passwordVisible)}
                      iconColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
                    />
                  }
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={{color: theme.colors[ColorLabels.RED]}}>
                {errors.password.message}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.btnsub1,
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtMLg,
            ]}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={[
                {
                  backgroundColor: theme.colors[ColorLabels.PRIMARY],
                },
                BaseStyle.justifyCenter,
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                  textAlign: 'center',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              BaseStyle.alignCenter,
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtMd,
            ]}>
            <TouchableOpacity
              style={[Margins.mtSm]}
              onPress={() =>
                navigation.navigate(AuthScreens.forgotPassword.routeName)
              }>
              <Text
                style={{
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    minHeight: 440,
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
  btnsub1: {
    width: '100%',
  },
});
