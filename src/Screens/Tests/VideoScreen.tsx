import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import VideoPlayer from './VideoPlayer';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Paddings} from '../../styles/Padding';
import DocCard from './DocCard';
import {usePlayerNavigationSource} from '../Common/PlayerNavigationSource';
import AntIcon from 'react-native-vector-icons/AntDesign';

const VideoScreen = () => {
  const {navigationPlayerSource}: any = usePlayerNavigationSource();
  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          {
            height: navigationPlayerSource === 'Landscape' ? '100%' : 250,
          },
        ]}>
        <VideoPlayer />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            Margins.mtLg,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View>
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
              09:44 min
            </Text>
          </View>
          <TouchableOpacity
            style={[BaseStyle.alignCenter, Margins.mrMd]}
            onPress={toggleStar}>
            <AntIcon
              name={isStarred ? 'star' : 'staro'}
              color={theme.colors[ColorLabels.PRIMARY]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.MEDIUM_GREY],
                  fontFamily: FontFamily.INTER_MEDIUM,
                  fontSize: fontSizes.xsm,
                },
                Margins.mtSm,
              ]}>
              Rate
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[Background.lightWhite, {height: 7}, Margins.mtLg]} />
        <View
          style={[
            Paddings.paddingHorizontalMedium,
            BaseStyle.flexContainer,
            Margins.mtMd,
          ]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_SEMIBOLD,
                fontSize: fontSizes.smd,
              },
            ]}>
            Related Documents
          </Text>
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
        </View>
        <View style={[Margins.mbLg]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
