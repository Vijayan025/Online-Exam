import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {ActivityIndicator} from 'react-native-paper';
import {ColorLabels, theme} from '../../common/theme';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {Paddings} from '../../styles/Padding';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {useNavigation} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import {Position} from '../../styles/Position';
import {Image} from 'react-native';
import UserIcon from '../../../assets/images/LandingMainIcon.png';
import {BorderStyle} from '../../styles/Border';
import SupportImg from '../../../assets/images/supportImg.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

interface Message {
  id: string;
  text: string;
  fromUser: boolean;
}

const predefinedQueries = [
  {id: '1', text: 'Privacy Policy'},
  {id: '2', text: 'Login'},
  {id: '3', text: 'My Profile'},
  {id: '4', text: 'Test Issue'},
  {id: '5', text: 'Report a Problem'},
];

const ChatBot: React.FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const flatListRef = useRef<FlatList | null>(null);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') {
      return;
    }

    const userMessage: Message = {
      id: String(messages.length + 1),
      text: inputText,
      fromUser: true,
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    setShowActivityIndicator(true);

    setTimeout(() => {
      const predefinedQueriesMessage: Message = {
        id: String(messages.length + 2),
        text: 'Would you like to try one of these options?',
        fromUser: false,
      };
      setMessages(prevMessages => [...prevMessages, predefinedQueriesMessage]);
      setShowActivityIndicator(false);
    }, 1000);
  };

  useEffect(() => {
    setMessages([
      {id: '0', text: `Hi Vijay 👋, I'm here to assist you`, fromUser: false},
    ]);
  }, []);

  const handleQueryClick = (query: string) => {
    let botResponse = '';
    switch (query) {
      case 'Recharge':
        botResponse = 'Here is the Recharge information...';
        break;
      case 'Login':
        botResponse = 'Here is the Login information...';
        break;
      case 'My Profile':
        botResponse = 'Here is the Profile information...';
        break;
      case 'Payments':
        botResponse = 'Here is the Payments information...';
        break;
      default:
        botResponse = "Sorry, I couldn't find information for that query.";
        break;
    }
    const userQueryMessage: Message = {
      id: String(messages.length + 1),
      text: query,
      fromUser: true,
    };
    setMessages([...messages, userQueryMessage]);
    setShowActivityIndicator(true);
    setTimeout(() => {
      const botResponseMessage: Message = {
        id: String(messages.length + 2),
        text: botResponse,
        fromUser: false,
      };
      setMessages(prevMessages => [...prevMessages, botResponseMessage]);
      setShowActivityIndicator(false);
    }, 1000);
    setTimeout(() => {
      if (
        botResponse === "Sorry, I couldn't find information for that query."
      ) {
        const defaultMessage: Message = {
          id: String(messages.length + 3),
          text: 'Would you like to try one of these options?',
          fromUser: false,
        };
        setMessages(prevMessages => [...prevMessages, defaultMessage]);
      }
    }, 2000);
  };
  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };
  return (
    <SafeAreaView
      style={[
        BaseStyle.flexContainer,
        {backgroundColor: theme.colors[ColorLabels.SECONDARY]},
      ]}>
      <View style={[{elevation: 10, height: 55}, Background.white]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            {height: 55},
            Background.white,
            BaseStyle.justifySpaceBetween,
            Paddings.paddingHorizontalMedium,
          ]}>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.BLACK]}
            size={20}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_SEMIBOLD,
              },
              BaseStyle.textCenter,
              Margins.mlMd,
            ]}>
            Help & Support
          </Text>
          <Image source={UserIcon} style={[{width: 35, height: 35}]} />
        </View>
      </View>
      <View style={[BaseStyle.alignCenter]}>
        <Image
          source={SupportImg}
          style={{width: 300, height: 300, position: 'absolute', top: 150}}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container, Paddings.paddingHorizontalSmall]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          data={messages}
          onContentSizeChange={() => scrollToBottom()}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            if (item.fromUser) {
              return (
                <View
                  style={
                    item.fromUser
                      ? styles.userMessageContainer
                      : styles.botMessageContainer
                  }>
                  <Text
                    style={
                      item.fromUser
                        ? styles.userMessageText
                        : styles.messageText
                    }>
                    {item.text}
                  </Text>
                </View>
              );
            } else {
              if (item.text === 'Would you like to try one of these options?') {
                return (
                  <View>
                    <View
                      style={
                        item.fromUser
                          ? styles.userMessageContainer
                          : styles.botMessageContainer
                      }>
                      <Text
                        style={
                          item.fromUser
                            ? styles.userMessageText
                            : styles.messageText
                        }>
                        {item.text}
                      </Text>
                    </View>
                    <View
                      style={[
                        {
                          padding: 10,
                          width: '70%',
                          elevation: 4,
                          marginLeft: 4,
                        },
                        Background.white,
                        BorderStyle.borderRadiusMedium,
                        Margins.mbMd,
                      ]}>
                      {predefinedQueries.map((query, index) => (
                        <TouchableOpacity
                          disabled={showActivityIndicator}
                          key={query.id}
                          style={[styles.queryItem, Margins.mrMd]}
                          onPress={() => handleQueryClick(query.text)}>
                          <View
                            style={[
                              BaseStyle.flexRow,
                              BaseStyle.alignCenter,
                              BaseStyle.justifySpaceBetween,
                              BorderStyle.borderPrimary,
                              {padding: 5},
                              BorderStyle.borderRadiusMedium,
                            ]}>
                            <Text style={styles.query}>{query.text}</Text>
                            <MatIcon
                              name="arrow-forward-ios"
                              color={theme.colors[ColorLabels.PRIMARY]}
                              size={14}
                            />
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                );
              } else {
                return (
                  <View
                    style={
                      item.fromUser
                        ? styles.userMessageContainer
                        : styles.botMessageContainer
                    }>
                    <Text
                      style={
                        item.fromUser
                          ? styles.userMessageText
                          : styles.messageText
                      }>
                      {item.text}
                    </Text>
                  </View>
                );
              }
            }
          }}
          contentContainerStyle={styles.messagesContainer}
        />
      </View>
      <View>
        <View style={[BaseStyle.alignCenter]}>
          <View style={[Position.absolute, {top: -70}]}>
            {showActivityIndicator && (
              <View>
                <WaveIndicator
                  color={theme.colors[ColorLabels.PRIMARY]}
                  size={70}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
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
            size={22}
            style={[Margins.mlSm]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors[ColorLabels.PRIMARY],
    padding: 8,
    marginTop: 15,
    borderRadius: 8,
    maxWidth: '80%',
    marginBottom: 10,
    elevation: 4,
    marginRight: 4,
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors[ColorLabels.WHITE],
    padding: 8,
    marginTop: 15,
    borderRadius: 8,
    maxWidth: '80%',
    marginBottom: 10,
    elevation: 4,
    marginLeft: 4,
  },
  messageText: {
    color: theme.colors[ColorLabels.LIGHT_BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: fontSizes.smm,
  },
  userMessageText: {
    color: theme.colors[ColorLabels.WHITE],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: fontSizes.smm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 15,
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: fontSizes.md,
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
  queryContainer: {
    paddingHorizontal: 12,
    backgroundColor: theme.colors[ColorLabels.WHITE],
    padding: 10,
    elevation: 20,
  },
  queryHeader: {
    fontFamily: FontFamily.INTER_BOLD,
    marginBottom: 5,
    color: theme.colors[ColorLabels.BLACK],
  },
  queryItem: {
    paddingVertical: 5,
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
  query: {
    fontFamily: FontFamily.INTER_MEDIUM,
    color: theme.colors[ColorLabels.PRIMARY],
    backgroundColor: theme.colors[ColorLabels.WHITE],
    paddingHorizontal: 13,
    paddingVertical: 4,
  },
});

export default ChatBot;
