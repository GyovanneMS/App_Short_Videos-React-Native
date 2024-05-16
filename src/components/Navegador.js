import React from "react";
import { Image, Pressable } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Estilo from "../styles/Estilo";

export default function Navegador(props) {
    
    
    return<LinearGradient style={Estilo.navegador} colors={["transparent", "#000000"]}>
        <Pressable onPress={() => props.navigation.navigate("Home")}>
            <Image source={ require("../../assets/house.png")} style={Estilo.navegadorIcone}/>
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("Search")}> 
            <Image source={ require("../../assets/magnifying.png")} style={Estilo.navegadorIcone}/>
        </Pressable>

        <Pressable onPress={() => props.navigation.navigate("Likes")}>
            <Image source={ require("../../assets/heart.png")} style={Estilo.navegadorIcone}/>
        </Pressable>
    </LinearGradient>
}
