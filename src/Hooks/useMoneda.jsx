import React, { Fragment, useState } from 'react'

const useMoneda = (label,stateInicial,opciones) => {

    const [state, actulizarState] = useState('stateInicial')

    const Seleccionar = ()=>(
        <Fragment>
            <label>{label}</label>
            <select 
                onChange={e => actulizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion=>(
                   <option key={opcion.codigo} value={opcion.codigo}> {opcion.nombre}</option> 
                ))}
            </select>
        </Fragment>
    );
    //retornar state,interfaz y funcion
    return [state,Seleccionar,actulizarState]
}
 
export default useMoneda;