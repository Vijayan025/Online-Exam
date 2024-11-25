import {
  View,
  Text,
  TouchableOpacity,
  Touchable,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import {ColorLabels, theme} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {usePlayerNavigationSource} from '../Common/PlayerNavigationSource';

const VideoPlayer = () => {
  const [puased, setPaused]: any = useState(false);
  const [progress, setProgress]: any = useState(null);
  const [fullScreen, setFullScreen]: any = useState(false);
  const [showControls, setShowControls]: any = useState(true);
  const [sliderValue, setSliderValue]: any = useState(0);
  const {setPlayerNavigationSource}: any = usePlayerNavigationSource();

  const navigation = useNavigation();
  const handleSliderChange = value => {
    setSliderValue(value);
    ref?.current?.seek(value);
  };
  const handleToggleControls = () => {
    setShowControls(!showControls);
    if (!showControls) {
      setSliderValue(progress?.currentTime);
    }
  };

  useEffect(() => {
    if (showControls && progress) {
      setSliderValue(progress?.currentTime);
    }
  }, [showControls, progress]);

  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
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

  const handleSeek = delta => {
    const newPosition = (progress?.currentTime || 0) + delta;
    setSliderValue(newPosition);
    ref?.current?.seek(newPosition);
  };

  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{width: '100%', height: fullScreen ? '100%' : 250}}
        onPressIn={handleToggleControls}>
        <Video
          paused={puased}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          ref={ref}
          onLoad={({seekableDuration}: any) =>
            setProgress(prevProgress => ({...prevProgress, seekableDuration}))
          }
          onProgress={x => {
            setProgress(x);
          }}
          style={{width: '100%', height: fullScreen ? '100%' : 250}}
          resizeMode="cover"
          //   muted
          onEnd={() => {
            setPaused(true);
            setSliderValue(0);
            ref?.current?.seek(0);
            setShowControls(true);
          }}
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
            <View
              style={[
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                {width: '70%'},
              ]}>
              <TouchableOpacity onPress={() => handleSeek(-10)}>
                <Image
                  source={require('../../../assets/images/backward.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!puased);
                }}>
                <Image
                  source={
                    puased
                      ? require('../../../assets/images/play-button.png')
                      : require('../../../assets/images/pause.png')
                  }
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    // marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSeek(10)}>
                <Image
                  source={require('../../../assets/images/forward.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    // marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>
                {progress?.currentTime
                  ? format(progress?.currentTime)
                  : '00:00'}
              </Text>
              <Slider
                style={{width: '80%', height: 40}}
                minimumValue={0}
                maximumValue={progress?.seekableDuration || 0}
                minimumTrackTintColor={theme.colors[ColorLabels.PRIMARY]}
                maximumTrackTintColor="#fff"
                onValueChange={x => {
                  ref?.current?.seek(x);
                }}
                onSlidingComplete={handleSliderChange}
                thumbTintColor={theme.colors[ColorLabels.PRIMARY]}
                value={sliderValue}
              />
              <Text style={{color: 'white'}}>
                {progress?.seekableDuration
                  ? format(progress?.seekableDuration)
                  : '00:00'}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 15,
                right: 15,
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (fullScreen) {
                    Orientation.lockToPortrait();
                  } else {
                    Orientation.lockToLandscape();
                  }
                  setFullScreen(!fullScreen);
                }}>
                <Image
                  source={
                    fullScreen
                      ? require('../../../assets/images/minimize.png')
                      : require('../../../assets/images/full-size.png')
                  }
                  style={{width: 20, height: 20, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 15,
                left: 15,
              }}>
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
          </TouchableOpacity>
        )}
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
