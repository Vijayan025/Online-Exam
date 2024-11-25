import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import LiveClassPlayer from './LiveClassPlayer';
import IonIcon from 'react-native-vector-icons/Ionicons';
import UserIcon from '../../../assets/images/userIcons.png';
import {Image} from 'react-native';
import {FlatList} from 'react-native';
import {Message} from 'react-hook-form';
import {BorderStyle} from '../../styles/Border';
const LiveClassScreen = () => {
  const {navigationPlayerSource}: any = usePlayerNavigationSource();
  const [isStarred, setIsStarred] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const flatListRef = useRef<FlatList | null>(null);

  const handleSend = () => {
    if (inputText.trim() === '') {
      return;
    }
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };
  const toggleChat = () => {
    setIsChat(!isChat);
  };

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (flatListRef?.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          {
            height: navigationPlayerSource === 'Landscape' ? '100%' : 250,
          },
        ]}>
        <LiveClassPlayer />
      </View>
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
            By Ramesh
          </Text>
        </View>
        <TouchableOpacity onPress={toggleChat}>
          {isChat ? (
            <View style={[BaseStyle.alignCenter]}>
              <IonIcon
                name={'documents'}
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
                Documents
              </Text>
            </View>
          ) : (
            <View style={[BaseStyle.alignCenter]}>
              <IonIcon
                name={'chatbox-ellipses'}
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
                Live Chat
              </Text>
            </View>
          )}
        </TouchableOpacity>
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
      <View
        style={[
          Paddings.paddingHorizontalMedium,
          Margins.mtLg,
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
        ]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image source={UserIcon} style={{width: 50, height: 50}} />
          <View style={[Margins.mlMd]}>
            <Text
              style={{
                color: theme.colors[ColorLabels.BLACK],
                fontFamily: FontFamily.INTER_SEMIBOLD,
                fontSize: fontSizes.smd,
              }}>
              Ramesh
            </Text>
            <Text
              style={{
                color: theme.colors[ColorLabels.MEDIUM_GREY],
                fontFamily: FontFamily.INTER_MEDIUM,
                fontSize: fontSizes.sm,
              }}>
              Chemistry (02:00 - 03:00 PM)
            </Text>
          </View>
        </View>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.WHITE],
              fontFamily: FontFamily.INTER_SEMIBOLD,
              fontSize: fontSizes.sm,
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 30,
            },
            Background.primary,
          ]}>
          Join Series
        </Text>
      </View>
      <View style={[Background.lightWhite, {height: 7}, Margins.mtLg]} />
      {isChat ? (
        <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
          <View
            style={[
              Paddings.paddingHorizontalMedium,
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 30,
                },
                Margins.mtSm,
                Margins.mbMd,
                BorderStyle.borderPrimary,
              ]}>
              Live Chat
            </Text>
          </View>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={[styles.messageContainer]}>
                <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                  <Image
                    source={UserIcon}
                    style={{width: 30, height: 30}}
                    resizeMode="contain"
                  />
                  <Text style={styles.nameText}>Vijay</Text>
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            style={[Paddings.paddingHorizontalSmall, {flex: 1}]}
          />
          <View
            style={[
              styles.inputContainer,
              Paddings.paddingHorizontalMedium,
              BaseStyle.alignEnd,
              BaseStyle.justifyEnd,
            ]}>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your message..."
              onSubmitEditing={handleSend}
              placeholderTextColor={theme.colors[ColorLabels.MEDIUM_GREY]}
            />
            <TouchableOpacity style={[styles.sendButton]} onPress={handleSend}>
              <IonIcon
                name="send"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
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
              Today Class Documents
            </Text>
            <DocCard />
            <DocCard />
            <DocCard />
            <DocCard />
            <DocCard />
          </View>
        </ScrollView>
      )}
      <View style={[Margins.mbSm]} />
    </SafeAreaView>
  );
};

export default LiveClassScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: fontSizes.md,
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
    borderRadius: 6,
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sendButtonText: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontFamily: FontFamily.INTER_BOLD,
    fontSize: fontSizes.md,
  },
  messageText: {
    color: theme.colors[ColorLabels.LIGHT_BLACK],
    fontFamily: FontFamily.INTER_SEMIBOLD,
    fontSize: fontSizes.smm,
  },
  nameText: {
    color: theme.colors[ColorLabels.MEDIUM_GREY],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: fontSizes.smm,
    marginLeft: 5,
    marginRight: 5,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    marginTop: 8,
    maxWidth: '80%',
    marginBottom: 8,
  },
});
