import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChemistryIcon from '../../../assets/images/chemistryIcon.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const VideoCard = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(UserScreens.videoScreen.routeName)}
      style={[
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        BaseStyle.justifySpaceBetween,
        Background.white,
        BorderStyle.borderRadiusMedium,
        BorderStyle.borderLightGreyFull,
        Paddings.paddingSm,
        Margins.mtXMd,
      ]}>
      <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
        <MatIcon
          name="video-library"
          size={28}
          color={theme.colors[ColorLabels.PRIMARY]}
        />
        <View style={[Margins.mlMd]}>
          <Text
            style={{
              color: theme.colors[ColorLabels.BLACK],
              fontFamily: FontFamily.INTER_SEMIBOLD,
              fontSize: fontSizes.smd,
            }}>
            Acids, Bases and Salts
          </Text>
          <Text
            style={{
              color: theme.colors[ColorLabels.MEDIUM_GREY],
              fontFamily: FontFamily.INTER_MEDIUM,
              fontSize: fontSizes.sm,
            }}>
            Video | 09:44 min
          </Text>
        </View>
      </View>
      <IonIcon
        name="arrow-forward-circle"
        color={theme.colors[ColorLabels.PRIMARY]}
        size={23}
      />
    </Pressable>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
