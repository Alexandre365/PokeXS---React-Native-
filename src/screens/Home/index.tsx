import React, {useState} from 'react'
import Lista from '../../components/Lista';
import Poke from '../Poke';

import { Conteiner, Box, H2 } from '../../Style/style'


export default () =>{
    
    return(
        <Conteiner>
            <Box>
                <H2>
                    PokeXS
                </H2>
                <Lista />
            </Box>
        </Conteiner>
    )
}

/*
*/