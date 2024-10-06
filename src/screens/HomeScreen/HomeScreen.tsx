import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Modal,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';
import { icons } from '../../assets/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
type Contact = {
    firstName: string;
    lastName: string;
    phone: string;
};

type RootStackParamList = {
    Chat: { contact: Contact };
};

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Chat'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    const [validContacts, setValidContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchStoredChats = async () => {
            try {
                const storedContacts = await AsyncStorage.getItem('chats');
                if (storedContacts) {
                    const parsedContacts = JSON.parse(storedContacts);
                    setContacts(parsedContacts);  
                }
            } catch (error) {
                console.log('Error fetching chats:', error);
            }
        };
        fetchStoredChats();
    }, []);

    useEffect(() => {
        if (searchText.trim() === '') {
            setFilteredContacts(contacts);
        } else {
            const lowerCasedText = searchText.toLowerCase();
            const filtered = contacts.filter(
                (contact) =>
                    contact.firstName.toLowerCase().includes(lowerCasedText) ||
                    contact.lastName.toLowerCase().includes(lowerCasedText) ||
                    contact.phone.includes(lowerCasedText)
            );
            setFilteredContacts(filtered);
        }
    }, [searchText, contacts]);

    useEffect(() => {
        const validContactsList = contacts.filter(contact => 
            contact.firstName && contact.lastName && contact.phone
        );
        setValidContacts(validContactsList);
    }, [contacts]);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const navigateToScreen = () => {
        navigation.navigate('NewChatScreen',);
        setModalVisible(false);
    };

    const navigateToChat = async (contact: Contact) => {
        try {
            const storedChats = await AsyncStorage.getItem('chats');
            let chats = storedChats ? JSON.parse(storedChats) : [];
            const existingChat = chats.find((chat: Contact) => chat.phone === contact.phone);
            console.log(existingChat)
            if (existingChat) {
                navigation.navigate('Chat', { contact: existingChat });
            } else {
                chats.push(contact);
                await AsyncStorage.setItem('chats', JSON.stringify(chats));
                navigation.navigate('Chat', { contact });
            }
        } catch (error) {
            console.log('Error navigating to chat:', error);
        }
    };
    

    const renderItem = ({ item }: { item: Contact }) => {
        if (!item.firstName || !item.lastName) {
            return null; 
        }
        return (
        <TouchableOpacity style={styles.chatItem} onPress={() => navigateToChat(item)}>
            <View style={styles.initialsContainer}>
                <Text style={styles.initialsText}>
                {`${item.firstName?.charAt(0) || ''}${item.lastName?.charAt(0) || ''}`}
                </Text>
            </View>
            <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.firstName} {item.lastName}</Text>
                <Text style={styles.chatPhone}>{item.phone}</Text>
            </View>
        </TouchableOpacity>
    );}

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Image source={icons.back} style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Messages</Text>
                    <Text style={styles.text}>{validContacts.length} Contacts</Text>
                </View>
                <TouchableOpacity onPress={openModal}>
                    <Image source={icons.bell} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.sectionStyle}>
                <Image source={icons.searchInterfaceSymbol} style={styles.searchImage} />
                <TextInput
                    style={styles.input}
                    placeholder="Search messages..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {filteredContacts.length > 0 ? (
                <FlatList
                    data={filteredContacts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.phone}
                />
            ) : (
                <View style={styles.mainView}>
                    <Image source={icons.chat} style={styles.chatIcon} />
                    <Text style={styles.mainText}>No Chats Yet!</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
                        <Text style={styles.buttonText}>Start Chat</Text>
                    </TouchableOpacity>
                </View>
            )}

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.modalOption} onPress={navigateToScreen}>
                                <Image source={icons.newChat} style={styles.modalIcon} />
                                <Text style={styles.modalText}>New Chat</Text>
                            </TouchableOpacity>

                            <View style={styles.modalOption}>
                                <Image source={icons.newGroup} style={styles.modalIcon} />
                                <Text style={styles.modalText}>New Group Chat</Text>
                            </View>
                            <View style={styles.modalOption}>
                                <Image source={icons.newAnnouncement} style={styles.modalIcon} />
                                <Text style={styles.modalText}>New Announcement</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </ScrollView>
    );
};

export default HomeScreen;









