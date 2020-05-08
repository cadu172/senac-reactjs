import React from 'react';
import { Link } from 'react-router-dom';

function NotFound404() {
    return(
        <>
            <h3>Página Não Encontrada</h3>
            <p>Componente customizado para página com erro 404, Usando React-Route</p>
            <p><Link to="/">Página Principal <strong>Function APP</strong></Link></p>
        </>
    );
}

export default NotFound404;