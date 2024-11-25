import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import EntIcon from 'react-native-vector-icons/Entypo';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme, ColorLabels} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import {Margins} from '../../styles/Margins';
import {FontFamily} from '../../types/Fonts';
import {usePlayerNavigationSource} from '../Common/PlayerNavigationSource';

const LiveClassPlayer = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [showControls, setShowControls]: any = useState(true);
  const {setPlayerNavigationSource}: any = usePlayerNavigationSource();
  const navigation = useNavigation();
  const handleToggleControls = () => {
    setShowControls(!showControls);
  };
  useEffect(() => {
    if (fullScreen) {
      StatusBar.setHidden(true);
      Orientation.lockToLandscape();
      setPlayerNavigationSource('Landscape');
    } else {
      StatusBar.setHidden(false);
      Orientation.lockToPortrait();
      setPlayerNavigationSource('');
    }
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, [fullScreen]);

  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{width: '100%', height: fullScreen ? '100%' : 250}}
        onPressIn={handleToggleControls}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          style={{flex: 1}}
          resizeMode="cover"
          repeat={true}
          ignoreSilentSwitch="ignore"
          playInBackground={false}
          playWhenInactive={false}
        />
        {showControls && (
          <TouchableOpacity
            onPress={() => setShowControls(false)}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <>
              <View style={{position: 'absolute', top: 15, left: 15}}>
                <MatCIcon
                  name="keyboard-backspace"
                  color={theme.colors[ColorLabels.WHITE]}
                  size={23}
                  onPress={() => {
                    navigation.goBack();
                    setFullScreen(false);
                  }}
                />
              </View>
              {!fullScreen && (
                <View style={{position: 'absolute', top: 15, right: 15}}>
                  <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
                    <Image
                      source={require('../../../assets/images/full-size.png')}
                      style={{width: 20, height: 20, tintColor: 'white'}}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {fullScreen && (
                <View style={{position: 'absolute', top: 15, right: 15}}>
                  <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
                    <Image
                      source={require('../../../assets/images/minimize.png')}
                      style={{width: 20, height: 20, tintColor: 'white'}}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </>
          </TouchableOpacity>
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            left: 15,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 3,
            borderRadius: 6,
          }}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <EntIcon
              name="dot-single"
              color={theme.colors[ColorLabels.RED]}
              size={25}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.WHITE],
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
                Margins.mbXSm,
                Margins.mrMd,
              ]}>
              Live
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default LiveClassPlayer;
