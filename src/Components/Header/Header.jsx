import React from 'react';
import style from './Header.module.css'; // Importe o arquivo de estilo do cabeçalho
import { FaHeart } from 'react-icons/fa';

function Header() {
    return (
        <header className={style.header}> 
              <span>Mateus Henrique <span><FaHeart/></span></span>
              <span>Paula Cristina <span><FaHeart/></span></span>
        </header>
    )    
}

export default Header