import React, {useEffect, useState} from "react";
import { View, Pressable, Image, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import Estilo from "../styles/Estilo";
import SalvarVideoCurto from "../functions/SalvarVideoCurtido";
import ObterVideoCurtido from "../functions/ObterVideoCurtido";
import LimparVideoCurtido from "../functions/LimparVideoCurtido";
//PARAMOS AQUI
export default function Conteudo(props) {


    const [estado, definirEstado] = useState(true)
    const [curtido, definirCurtido] = useState(false)

    function Curtir(){
        if(curtido)
            LimparVideoCurtido(props.codigo);
        else 
            SalvarVideoCurto(props.codigo)
        definirCurtido(!curtido)
    }

    useEffect(function() {
        async function obterCurtidas() {
            const lista = await ObterVideoCurtido()

            if(lista.includes(props.codigo))
                definirCurtido(true);
        }
        obterCurtidas()
    }, [])

    return <View>
        <LinearGradient style={Estilo.conteudoBarra} color={["#000", "yellow", "purple", "transparent"]}>
            <View style={Estilo.conteudoBarraDentro}>
                <Text style={Estilo.conteudoTitulo}> {props.nome} </Text>
                <Text style={Estilo.conteudoDescricao}> {props.descricao} </Text>
                <Text style={Estilo.conteudoEtiqueta}> {props.etiqueta.join(" & ")} </Text>
            </View>

            <View>
                <Pressable
                    onPress={ Curtir}>
                    {
                        curtido ?
                            <Image source={ require("../../assets/heart-fill.png")}/>
                        :
                            <Image source={ require("../../assets/heart.png")}/>
                    }
                </Pressable>
            </View>
            
        </LinearGradient>
        <Pressable
            onPress={ () => definirEstado(!estado)}>
            <Video
                style={Estilo.video}
                source={props.fonte}
                resizeMode={ResizeMode.COVER}
                useNativeControls={false}
                shouldPlay={estado}
                isLooping
                isMuted/>
        </Pressable>
    </View>
}