import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { imagens } from "@/assets/images/images";
import ProdutoCard from "../components/produtoCard";
import Menu from "../components/menu"; // Novo componente de menu

const { width } = Dimensions.get("window");

const produtos = [
  {
    nome: "Guitarra Elétrica",
    imagem: imagens.guitarra,
    preco: "R$ 1.200,00",
  },
  {
    nome: "Teclado Musical",
    imagem: imagens.teclado,
    preco: "R$ 950,00",
  },
  {
    nome: "Violão Clássico",
    imagem: imagens.violao,
    preco: "R$ 600,00",
  },
];

export default function Home() {
  return (
    <ImageBackground
      source={imagens.background}
      style={styles.background}
      resizeMode="cover"
      blurRadius={3}
    >
      <Menu />

      <View style={styles.containerProdutos}>
        {produtos.map((produto, index) => (
          <ProdutoCard
            key={index}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
            tamanho="grande"
          />
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  containerProdutos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    paddingTop: 20,
  },
});