import styled from 'styled-components/native'

import { Animated } from 'react-native'

export const H2 = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 42px;
`
export const H3 = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 32px;
`
export const H4 = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
`
export const P = styled.Text`
    color: ${({color}) => color || '#000000'};
    font-weight: 500;
    font-size: 16px;
`


export const Conteiner = styled.View`
    width: 100%;
    height: 100%;
    background-color: #16171E;
`
export const Box = styled.View`
    position: relative;
    top: 30px;
    padding: 0px 20px;
`

export const Loading = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`
export const LoadingBox = styled.View`
    width: 200px;
    flex-direction: row;
    justify-content: space-between;
`
export const Ball = styled(Animated.View)`
    width: 25px;
    height: 25px;
    border-radius: 14px;
    background-color: ${({color}) => color || '#777'};
`

export const Lista = styled.ScrollView`
    border-radius: 10px;
`

/* Card List*/
export const Card = styled.TouchableOpacity`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: ${({color}) => color || '#1F212A'};
`
export const IMG = styled.View`
    margin-top: 5px;
    margin-bottom: 5px;
    width: 110px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardTxt = styled.View`
    width: 200px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
export const CardIcon = styled.View`
    width: 50px;
    padding: 10px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const Img = styled.Image`
    width: 100px;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
    background-color: #16171E;
    border-radius: 50px;
`

export const Icon = styled.Image`
    width: 20px;
    height: 20px;
    max-width: 100%;
    max-height: 100%;
`


/* Pokémon */

export const backgrandColor = {
    water:'#1790FF',
    grass:'#36C490',
    fire:'#D93F31',
    electric:'#ECD145',
    flaying:'#A890F0',
    normal:'#A7A678',
    rock:'#B8A038',
    ground:'#E0C068',
    bug:'#A8B820',
    ice:'#98D8D8',
    psychic:'#F85888',
    dark:'#705848',
    ghost:'#705898',
    dragon:'#7038F8',
    fairy:'#F0B6BC',
    poison:'#9D63B5',
    fighting:'#ec7b10',
    steel:'#BEBECB'
}
export const backgrandColorWhite = {
    water:'#9cc5ec',
    grass:'#68d8af',
    fire:'#e47065',
    electric:'#e9da90',
    flaying:'#8c6bee',
    normal:'#c9c76b',
    rock:'#d8c368',
    ground:'#e0b746',
    bug:'#dae672',
    ice:'#65e6e6',
    psychic:'#f083a3',
    dark:'#a16c49',
    ghost:'#6f45b3',
    dragon:'#9872f1',
    fairy:'#f07a86',
    poison:'#9c3dc5',
    fighting:'#f1a864',
    steel:'#b1b1e2'
}
export const HeaderPoke= styled.View`
    background-color: ${({color}) => color || '#777'};
    height: 500px;
    padding: 30px 10px 10px 10px;
`
export const HeaderTitle = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`
export const IconPoke = styled.Image`
    width: 30px;
    height: 30px;
`
export const NameIdTypes = styled.View`
    width: 100%;
`
export const NameId = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`
export const CardTypes = styled.Text`
    width: 80px;
    height: 30px;
    margin-top: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    background-color: ${({color}) => color || '#777'};
`
export const ConteinerPk = styled.View`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImgPk = styled.Image`
    width: 300px;
    height: 300px;
`

export const MainPoke= styled.View`
    padding: 10px 10px 10px 10px;
`

export const Sobre = styled.View`
    
`