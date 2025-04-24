import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { imagens } from "@/assets/images/images";
import ProdutoCard from "../components/produtoCard";

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
  const navigation = useNavigation(); // Usando o hook de navegação

  return (
    <ImageBackground source={imagens.background} style={styles.background} blurRadius={3}>
      {/* Menu de Navegação */}
      <View style={styles.menu}>
        <View style={styles.logoContainer}>
          <Image source={imagens.logo} style={styles.logoMenu} />
          <Text style={styles.logoTexto}>Luth Store</Text>
        </View>
        {/* Links de Navegação */}
        <View style={styles.links}>
          <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Inicio</Text>
          <Text style={styles.link} onPress={() => navigation.navigate('Produtos')}>Produtos</Text>
          <Text style={styles.link}>Contato</Text>
        </View>
        {/* Carrinho e Links de Cadastro/Entrar */}
        <View style={styles.menuDireita}>
          <Text style={styles.carrinho}>🛒</Text>
          <Text style={styles.link}>Cadastrar</Text>
          <Text style={styles.link}>Entrar</Text>
        </View>
      </View>

      {/* Conteúdo */}
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
    resizeMode: "cover",
  },
  containerProdutos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoMenu: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 8,
  },
  logoTexto: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Pacifico",
    fontWeight: "600",
  },
  links: {
    flexDirection: "row",
    gap: 15,
  },
  link: {
    color: "#fff",
    fontSize: 16,
  },
  carrinho: {
    fontSize: 24,
    color: "#fff",
  },
  menuDireita: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});