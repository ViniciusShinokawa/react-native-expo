import { Button, StyleSheet, Text, TextInput, View, Alert, ScrollView } from 'react-native';
import { useState } from 'react';

type Produtos = {
  id: string;
  descricao: string;
  preco: string;
  categoria: string;
  quantidade: string;
};

export default function Novo() {
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [Produtos, setProdutos] = useState<Produtos[]>([]);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const addUProdutos = () => {
    if (descricao && preco && categoria && quantidade) {
      if (editandoId) {
        // Atualiza o produto existente
        setProdutos((prevProdutos) =>
          prevProdutos.map((produto) =>
            produto.id === editandoId
              ? { ...produto, descricao, preco, categoria, quantidade }
              : produto
          )
        );
        setEditandoId(null);
      } else {
        // Adiciona um novo produto
        setProdutos((prevProdutos) => [
          ...prevProdutos,
          { id: Math.random().toString(), descricao, preco, categoria, quantidade },
        ]);
      }
      setDescricao('');
      setPreco('');
      setCategoria('');
      setQuantidade('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos!');
    }
  };

  const editarProduto = (id: string) => {
    const produto = Produtos.find((prod) => prod.id === id);
    if (produto) {
      setDescricao(produto.descricao);
      setPreco(produto.preco);
      setCategoria(produto.categoria);
      setQuantidade(produto.quantidade);
      setEditandoId(produto.id);
    }
  };

  const deletarProduto = (id: string) => {
    setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.formContainer, styles.shadowProp]}>
        <img
          src="https://intercol.ind.br/assets/images/Logo-light%20copiar.png"
          alt="Logo"
          style={styles.logo}
        />
        <Text style={styles.titulo}>
          {editandoId ? 'Editar Produto' : 'Cadastro de Produtos'}
        </Text>

        <TextInput
          placeholder="Descrição"
          value={descricao}
          style={styles.input}
          keyboardType="default"
          onChangeText={setDescricao}
        />

        <TextInput
          placeholder="Preço"
          value={preco}
          style={styles.input}
          keyboardType="numeric"
          maxLength={11}
          onChangeText={setPreco}
        />

        <TextInput
          placeholder="Categoria"
          value={categoria}
          style={styles.input}
          keyboardType="default"
          onChangeText={setCategoria}
        />

        <TextInput
          placeholder="Quantidade"
          value={quantidade}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setQuantidade}
        />

        <Button title={editandoId ? 'Salvar Alterações' : 'Cadastrar'} color="#FF7607" onPress={addUProdutos} />
      </View>

      <View style={styles.listaContainer}>
        {Produtos.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.itemText}>Descrição: {item.descricao}</Text>
            <Text style={styles.itemText}>Categoria: {item.categoria}</Text>
            <Text style={styles.itemText}>Preço: R$ {item.preco}</Text>
            <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>

            <View style={styles.buttonRow}>
              <Button title="Editar" color="#4CAF50" onPress={() => editarProduto(item.id)} />
              <Button title="Deletar" color="#f44336" onPress={() => deletarProduto(item.id)} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FF7607',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#25292e',
    width: '40%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7607',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    borderColor: '#FF7607',
    borderWidth: 1,
  },
  listaContainer: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '90%',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 15,
  },
});
