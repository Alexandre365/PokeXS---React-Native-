import React, {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native';
import { backgrandColor, backgrandColorWhite, Conteiner, HeaderPoke, HeaderTitle, NameIdTypes, NameId, P, H3, H2, H4, IconPoke, CardTypes, ImgPk, ConteinerPk, MainPoke, Sobre} from '../../Style/style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default  () =>{
    const [Pokemon, setPokemon] = useState({})
    const navigation = useNavigation()

    let Na = (str) =>{
        return str[0].toUpperCase() + str.substr(1)
      }

    let Name = () =>{
        let str = String(Pokemon.Name)
        return str[0].toUpperCase() + str.substr(1)
      }
    let IdNumero = () =>{
        const id = Number(Pokemon.Id)
        if (id < 10) {
            return `#00${id}`
        }else if (id > 9 && id < 100 ) {
            return `#0${id}`
        }else{
            return `#${id}`
        }
    }

    
    
    useEffect(async ()=>{

        const value = await AsyncStorage.getItem('@savedado:id')

        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((json) => {


            const pokemon = {
                Id:json.id,
                Name: json.name,
                Img:json.sprites.front_default,
                Type: json.types[0].type.name,
                Sobre: `Pokémon ${Na(String(json.name))}, do típo ${Na(String(json.types[0].type.name))}. `
            }
            setPokemon(pokemon)
        });
    })
    
    return(
       <Conteiner>
           <HeaderPoke color={backgrandColor[Pokemon.Type]}>
            <HeaderTitle>
                <TouchableOpacity onPress={ async () => {navigation.navigate('Home')
                    }}>
                    <IconPoke source={require('../../../img/chevron-left.png')} />
                </TouchableOpacity>
                <H3>PokeXS</H3>
            </HeaderTitle>
            <NameIdTypes>
                <NameId >
                    <H2>{Name()}</H2>
                    <H4>{IdNumero()}</H4>
                </NameId>
                <CardTypes color={backgrandColorWhite[Pokemon.Type]}>
                    {Na(String(Pokemon.Type))}
                </CardTypes>
            </NameIdTypes>
            <ConteinerPk>
                <ImgPk source={{uri: Pokemon.Img}} />
            </ConteinerPk>
           </HeaderPoke>
           <MainPoke>
               <Sobre>
                   <H3>Sobre</H3>
                   <P color={'#bebebe'}>{Pokemon.Sobre}</P>
               </Sobre>
           </MainPoke>
       </Conteiner>
    )
    
}
