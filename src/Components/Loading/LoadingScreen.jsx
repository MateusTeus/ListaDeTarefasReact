import React from 'react';
import style from './Loading.module.css'

import { FaHeart } from 'react-icons/fa'

function LoadingScreen() {
  return (
    <div className={style.loadingScreen}>
        
        <div className={style.containerNomes}>
         <h1>Feito com carrinho por</h1><br />
         <h2>Mateus Henrique <span className={style.iconCoracao}><FaHeart /></span></h2><br />
         <h2>&</h2><br />
         <h2>Paula Cristina <span className={style.iconCoracao}><FaHeart /></span></h2> 

        </div>
        
    </div>
  );
}

export default LoadingScreen;
