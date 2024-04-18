import { Dimensions, StyleSheet } from "react-native";
import Conteudo from "../components/Conteudo";

export default StyleSheet.create({
    tela: {
        backgroundColor: "#000",
        flex: 1,
    },
    video:{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("secreen").width,
    },
    conteudoBarra: {
        gap: 32,
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 64,
        position: "absolute",
        width: "100%",
        zIndex: 9,
    },
    conteudoBarraDentro: {
        flex: 1,
    },
    conteudoTitulo: {
        color: "#FFF",
        fontSize: 22,
        marginVertical: 4,
    },
    conteudoDescricao: {
        color: "#FFF",
        fontSize: 16,
        marginVertical: 4,
        opacity: 0.6,
    },
    conteudoEtiqueta:{
        color: "#FFF",
        fontSize: 12,
        opacity: 0.6,
    },
})