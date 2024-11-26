import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, ScrollView } from 'react-native';

type Usuario = {
  id: string;
  nome: string;
  email: string;
};

export default function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const addUsuario = () => {
    if (nome && email) {
      setUsuarios((prevUsuarios) => [
        ...prevUsuarios,
        { id: Math.random().toString(), nome, email },
      ]);
      setNome('');
      setEmail('');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Usuários</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
        <View style={styles.buttonContainer}>
          <Button title="Adicionar Usuário" color="#FF7607" onPress={addUsuario} />
        </View>

        <View style={styles.listaContainer}>
          {usuarios.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.rowText}>Nome: {item.nome}</Text>
              <Text style={styles.rowText}>Email: {item.email}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FF7607',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    borderColor: '#FF7607',
    borderWidth: 1,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
  listaContainer: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
