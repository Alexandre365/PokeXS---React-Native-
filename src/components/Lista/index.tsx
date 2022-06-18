import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { } from 'react-native';
import { Lista, Card, H3, Img, P, Icon ,backgrandColor,CardTxt, IMG, CardIcon} from '../../Style/style'

export default ({setTogglmenu}) =>{
    const [Pokemon, setPokemon] = useState([])

    const navigation = useNavigation()

    let Name = (str) =>{
        return str[0].toUpperCase() + str.substr(1)
      }
    let IdNumero = (id) =>{
        if (id < 10) {
            return `00`+id
        }else if (id > 9 && id < 100 ) {
            return `0`+id
        }else{
            return id
        }
    }

    useEffect(()=>{
        const getPokemonUrl= id => `https://pokeapi.co/api/v2/pokemon/${id}`
        const pokemonPromises = []
      
        for (let i = 1; i <= 898; i++){
          pokemonPromises.push(fetch(getPokemonUrl(i)).then(Response => Response.json()))
        }
        Promise.all(pokemonPromises)
        .then(Pokemons =>{
          setPokemon(Pokemons)
          setTogglmenu(false)
        })
        
      },[])
    return(
        <Lista>
            {Pokemon.map(item =>(
                <Card  key={item.id} color={backgrandColor[item.types[0].type.name]} onPress={ async () => {
                    navigation.navigate('Poke')
                    await AsyncStorage.setItem('@savedado:id', JSON.stringify(item.id))
                        
                }}>
                    <IMG>
                        <Img source={{uri: item.sprites.front_default}} />
                    </IMG>
                    <CardTxt>
                        <H3>{Name(item.name)}</H3>
                        <P>#{IdNumero(item.id)}</P>
                    </CardTxt>
                    <CardIcon>
                        <Icon source={require('../../../img/chevron-right.png')} />
                    </CardIcon>
                </Card>
            ))}
        </Lista>
    )
    
}

/*

<Card key={item.id} color={backgrandColor[item.types[0].type.name]}>
                    <View>
                        <Img source={{uri: item.sprites.front_default}} />
                    </View>
                    <CardTxt>
                        <H3>{Name(item.name)}</H3>
                        <P>#{IdNumero(item.id)}</P>
                    </CardTxt>
                    <TouchableOpacity onPress={ async () => {
                        navigation.navigate('Poke')
                        await AsyncStorage.setItem('@savedado:id', JSON.stringify(item.id))
                            
                    }}>
                        <Icon source={require('../../../img/chevron-right.png')} />
                    </TouchableOpacity>
                </Card>
*/