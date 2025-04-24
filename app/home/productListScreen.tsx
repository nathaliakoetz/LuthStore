import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ProdutoCard from '../components/produtoCard'; // Importando o componente ProdutoCard
import { imagens } from "@/assets/images/images";

const products = [
  { id: 1, nome: 'Guitar', preco: 'R$ 1.200', imagem: imagens.guitarra },
  { id: 2, nome: 'Drums', preco: 'R$ 1.500', imagem: imagens.teclado },
  { id: 3, nome: 'Piano', preco: 'R$ 3.000', imagem: imagens.violao },
  { id: 4, nome: 'Violin', preco: 'R$ 900', imagem: imagens.guitarra },
  { id: 5, nome: 'Trumpet', preco: 'R$ 800', imagem: imagens.teclado },
  { id: 6, nome: 'Saxophone', preco: 'R$ 1.100', imagem: imagens.violao },
  { id: 7, nome: 'Flute', preco: 'R$ 600', imagem: imagens.guitarra },
  { id: 8, nome: 'Timpani', preco: 'R$ 2.000', imagem: imagens.teclado },
];

const ProductListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Todos os Produtos</Text>
      <View style={styles.productList}>
        {products.map((product) => (
          <ProdutoCard
            key={product.id}
            nome={product.nome}
            preco={product.preco}
            imagem={product.imagem}
            tamanho="pequeno" // Ou "grande" se você preferir
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default ProductListScreen;