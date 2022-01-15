import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useCriptomoneda from '../Hooks/useCriptomoneda';
import useMoneda from '../Hooks/useMoneda';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a3fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ({guardarMoneda,guardarCriptomoneda}) => {
    //state criptomoendas
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false)

    const MONEDAS =[
        {codigo:'USD',nombre:'Dolar Estadounidense'},
        {codigo:'ARS',nombre:'Peso Argentino'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'EUR',nombre:'Euro'}
    ]

    const [moneda,SelectMonedas]= useMoneda ('Elige tu moneda:','',MONEDAS);
    
    const [criptomoneda,SelectCripto] = useCriptomoneda('Elige tu criptomoneda','',listacripto);
    
    //llamado a la api

    useEffect(() => {
       const consultarAPI = async ()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
            
        }
        consultarAPI();
    }, [])

    const cotizarMoneda = e =>{
        e.preventDefault();
        //validar campos
        if (moneda === ''|| criptomoneda ==='' ) { 
            guardarError(true)
            return
        };
        //pasar al componente principal
        guardarError(false);
        guardarMoneda(moneda) ;
        guardarCriptomoneda(criptomoneda) ;
    }
    
    return (  
        <form
            onSubmit={cotizarMoneda}
            >
                {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMonedas/>
            <SelectCripto/>
            <Boton
            type='submit'
            value='Calcular'
            />
        </form>

    );
}
 
export default Formulario;