import styled from '@emotion/styled';
import React from 'react'
import useMoneda from '../Hooks/useMoneda';

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

const Formulario = () => {

    const MONEDAS =[
        {codigo:'USD',nombre:'Dolar Estadounidense'},
        {codigo:'ARS',nombre:'Peso Argentino'},
        {codigo:'MXN',nombre:'Peso Mexicano'},
        {codigo:'EUR',nombre:'Euro'}
    ]

    const [moneda,SelectMonedas]= useMoneda ('Elige tu moneda:','',MONEDAS);
    return (  
        <form>
            <SelectMonedas/>
            <Boton
            type='submit'
            value='Calcular'
            />
        </form>

    );
}
 
export default Formulario;