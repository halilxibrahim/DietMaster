import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Giriş işlemleri burada yapılır
    // Örneğin, kullanıcı adı ve şifre kontrolü
    // Eğer başarılıysa kullanıcı adını kaydedebiliriz
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DietMaster</Text>
      <Text style={styles.title}>Hoş Geldiniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 300,
    color: '#3399FF'
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
