import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tituloFundacao: {
    color: "#DAA520",
    fontWeight: "bold",
    fontSize: 40,
    margin: 2,
  },
  containerNomeFundacao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderBlockColor: "#DAA520",
    backgroundColor: "#202020",
    margin: 2,
    padding: 0.2
  },
  texto: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "white"
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    margin: 10,

  },
  containerImagemPai: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImagem: {
    borderWidth: 4,
    borderColor: "#DAA520",
    borderRadius: 100,
    width: 208,
  },
  containerNome: {
    justifyContent: "center",
    alignContent: "center",
    margin: 10
  },
  nome: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "black"
  },
  containerTextoHistoria: {
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    borderWidth: 4,
    borderColor: "#DAA520",
    backgroundColor: "#202020",
    margin: 8
  },
  textoHistoria: {
    color: "white",
    textAlign: "center",
    margin: 8
  }
});

export default styles;