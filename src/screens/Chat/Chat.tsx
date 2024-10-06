import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { GiftedChat, InputToolbar, Send, IMessage } from "react-native-gifted-chat";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { icons } from '../../assets/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'
type ChatProps = {
  route: RouteProp<{ params: { initials: string; firstName: string; lastName: string; phone: string } }>;
  navigation: NativeStackNavigationProp<any, any>;
};

const Chat: React.FC<ChatProps> = ({ route, navigation }) => {
  const { initials, firstName, lastName, phone } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] = useState(false);
  const [optionModalVisible, setOptionModalVisible] = useState(false);


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem(`${firstName}_${lastName}_messages`);
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        } else {
          setMessages([
            {
              _id: 1,
              text: 'Hello Developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ]);
        }
        const existingChats = await AsyncStorage.getItem('chats');
        const parsedContacts = existingChats ? JSON.parse(existingChats) : [];
        const contactExists = parsedContacts.find(
          (contact: { phone: string }) => contact.phone === phone
        );

        if (!contactExists) {
          const newContact = { firstName, lastName, phone };
          const updatedChats = [...parsedContacts, newContact];
          await AsyncStorage.setItem('chats', JSON.stringify(updatedChats));
        }
      } catch (error) {
        console.log('Error loading messages:', error);

      }
    };

    fetchMessages();

  }, [firstName, lastName, phone]);

  const onSend = useCallback(async (newMessages: IMessage[]) => {
    setMessages((previousMessages) => {
      const updatedMessages = GiftedChat.append(previousMessages, newMessages);
      saveMessages(updatedMessages);
      return updatedMessages;
    });
  }, []);

  const saveMessages = async (updatedMessages: IMessage[]) => {
    try {
      await AsyncStorage.setItem(`${firstName}_${lastName}_messages`, JSON.stringify(updatedMessages));
    } catch (error) {
      console.log('Error saving messages:', error);
    }
  };
  const openReactionModal = (message: IMessage) => {
    setSelectedMessage(message);
    setModalVisible(true);
  };

  const selectEmoji = (emoji: string) => {
    if (selectedMessage) {
      const updatedMessages = messages.map((msg) => {
        if (msg._id === selectedMessage._id) {
          return { ...msg, emoji };
        }
        return msg;
      });
      setMessages(updatedMessages);
      setModalVisible(false);
    }
  };
  const deleteAllMessages = async () => {
    try {
      setMessages([]);
      await AsyncStorage.removeItem(`${firstName}_${lastName}_messages`);
    } catch (error) {
      console.log('Error deleting messages:', error);
    }
  };

  const deleteMessage = () => {
    if (selectedMessage) {
      const updatedMessages = messages.filter((msg) => msg._id !== selectedMessage._id);
      setMessages(updatedMessages);
      saveMessages(updatedMessages);
      setModalVisible(false);
      setConfirmDeleteModalVisible(false);
    }
  };
  const renderMessage = (props: any) => {
    const { currentMessage } = props;
    const isCurrentUser = currentMessage.user._id === 1;
    return (
      <TouchableOpacity onLongPress={() => {
        if (isCurrentUser) {
          openReactionModal(currentMessage);
        }
      }} style={[styles.messageContainer, isCurrentUser ? styles.messageRight : styles.messageLeft]}>
        <View style={{ position: 'relative' }}>
          {currentMessage?.emoji && (
            <Text style={styles.emojiText}>{currentMessage.emoji}</Text>
          )}
          <Text>{currentMessage.text}</Text>

        </View>
      </TouchableOpacity>
    );
  };
  const handleBackPress = () => {
    navigation.navigate("HomeScreen", {
      firstName: firstName,
      lastName: lastName,
      initials: initials,
    });
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={icons.back} style={styles.icon} />
          </TouchableOpacity>

          <View style={styles.avatarContainer}>
            <Text style={styles.initials}>{initials}</Text>
          </View>
          <Text style={styles.name}>{firstName} {lastName}</Text>
          <TouchableOpacity onPress={() => setOptionModalVisible(true)}>
            <Image source={icons.threeDots} style={styles.iconThree} />
          </TouchableOpacity>

        </View>

        <GiftedChat
          messages={messages}
          onSend={(newMessages) => {
            onSend(newMessages);
          }}
          user={{
            _id: 1,
          }}
          alwaysShowSend
          renderUsernameOnMessage={false}
          renderMessage={renderMessage}
          renderAvatar={null}
          renderInputToolbar={renderInputToolBar}
          renderSend={renderSend}
        //   scrollToBottom
        //   scrollToBottomComponent={scrollToBottomComponent}
        // renderBubble={renderBubble}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.reactionContainer}>
                  {["👍", "❤️", "😢", "🎉", "👎"].map((emoji) => (
                    <TouchableHighlight key={emoji} onPress={() => selectEmoji(emoji)}>
                      <Text style={styles.emoji}>{emoji}</Text>
                    </TouchableHighlight>
                  ))}
                </View>
                <View style={styles.optionContainer}>
                  {["Reply", "Forward", "Copy", "Star", "Report", "Delete"].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={styles.optionButton}
                      onPress={() => {
                        if (option === "Delete") {
                          setModalVisible(false);
                          setConfirmDeleteModalVisible(true);
                        }
                      }}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

        </Modal>
        <Modal
          visible={confirmDeleteModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setConfirmDeleteModalVisible(false)}>
          <TouchableWithoutFeedback onPress={() => setConfirmDeleteModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.alertBox}>
                <Image source={icons.bin} style={styles.alertImage} />
                <Text style={styles.alertTitle}>Delete message?</Text>
                <Text style={styles.alertMessage}>
                  Are you sure you want to delete this message?
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity style={styles.alertButton} onPress={() => setConfirmDeleteModalVisible(false)}>
                    <Text style={styles.alertButtonText}>No, Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.alertButton}
                    onPress={deleteMessage}>
                    <Text style={styles.alertButtonText}>Yes, Delete</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </TouchableWithoutFeedback>

        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={optionModalVisible}
          onRequestClose={() => setOptionModalVisible(false)}

        >
          <TouchableWithoutFeedback onPress={() => setOptionModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.modalContainerIcon}>
                  <Image source={icons.eye} style={styles.modalIcon} />
                  <Text style={styles.optionText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainerIcon}>
                  <Image source={icons.pinNot} style={styles.modalIcon} />
                  <Text style={styles.optionText}>Unpin Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalContainerIcon}>
                  <Image source={icons.searchInterfaceSymbol} style={styles.modalIcon} />
                  <Text style={styles.optionText}>Search Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteAllMessages();
                    setOptionModalVisible(false);
                  }}
                  style={styles.modalContainerIcon}
                >
                  <Image source={icons.delete} style={styles.modalIcon} />
                  <Text style={styles.optionText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>

        </Modal>
      </View>
    </SafeAreaProvider>
  );
};
// const scrollToBottomComponent = () => {
//   return <FontAwesome name="angle-double-down" size={22} color="#333" />;
// };
const renderInputToolBar = (props: any) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        borderRadius: 16,
        backgroundColor: "#f2f8fc",
        borderTopWidth: 0,
        marginBottom: 15,
        marginHorizontal: 10,
        marginTop: 7,
      }}
    />
  );
};
const renderSend = (props: any) => {
  return (
    <Send {...props} containerStyle={{}}>
      <Image
        source={icons.send}
        style={{ marginRight: 10, marginBottom: 5, width: 35, height: 35 }}
        resizeMode="center"
      />
    </Send>
  );
};

export default Chat;
