import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import users from '../../assets/users.json';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ListRenderItem } from 'react-native';
import { icons } from '../../assets/index';
import { vw, vh } from '../../utils/Dimensions';
import styles from './style'

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
};

type RootStackParamList = {
  Chat: { contact: Contact };
};

type NewChatScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Chat'>;
  route: RouteProp<RootStackParamList, 'Chat'>;
};

const NewChatScreen: React.FC<NewChatScreenProps> = ({ navigation }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(users as any);
  }, []);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
      contact.phone.includes(query)
    );
    setFilteredContacts(filtered);
  };

  const handleContactSelect = (contact: Contact) => {
    const initials = getInitials(contact.firstName, contact.lastName);

    const routeParams: any = {
      initials: initials,
      firstName: contact.firstName || '',
      lastName: contact.lastName || '',
      phone: contact.phone || ''
    } as {
      initials: string,
      firstName: string,
      lastName: string,
      phone: any
    }

    navigation.navigate('Chat', routeParams);
  };

  const renderItem: ListRenderItem<Contact> = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactSelect(item)} style={styles.userContainer}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>
          {getInitials(item.firstName, item.lastName)}
        </Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.userPhone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 45, marginBottom: 16, }}>
        <TouchableOpacity onPress={()=> navigation.goBack()} >
        <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {filteredContacts.length === 0 && searchQuery ? (
        <View style={{ flex: 0.8,alignItems: 'center', justifyContent: 'center' }}>
          <Image source={icons.noResult} style={styles.chatIcon} />
          <Text style={styles.noResults}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};



export default NewChatScreen;







