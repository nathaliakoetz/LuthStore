// components/Menu.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { imagens } from "@/assets/images/images";

export default function Menu() {
  return (
    <View style={styles.menu}>
      <View style={styles.logoContainer}>
        <Image source={imagens.logo} style={styles.logoMenu} />
        <Text style={styles.logoTexto}>Luth Store</Text>
      </View>

      <View style={styles.links}>
        <Text style={styles.link}>Inicio</Text>
        <Text style={styles.link}>Produtos</Text>
        <Text style={styles.link}>Contato</Text>
      </View>

      <View style={styles.menuDireita}>
        <Text style={styles.carrinho}>🛒</Text>
        <Text style={styles.link}>Cadastrar</Text>
        <Text style={styles.link}>Entrar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
