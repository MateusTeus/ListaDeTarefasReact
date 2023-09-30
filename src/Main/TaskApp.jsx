import React, { useState } from 'react';
import style from '../Main/Task.module.css'

import { FaTrash} from 'react-icons/fa'


function TaskApp() {
    const [currentPage, setCurrentPage] = useState("ativos");

    const [item, setItem] = useState(''); //iniciado com string vazia, setItem serve p editar
    const [itemList, setItemList] = useState([]) //iniciado com array vazio serve p setItemList editar lista


    
    const addItem = () => {
      if (item.trim() !== "") { // Verifica se o valor de item não está vazio
        setItemList([item].concat(itemList))
        setItem('')
      }
     
  }

  const deleteItem = (itemToDelete) => {
    const updatedItemList = itemList.filter((item) => item !== itemToDelete);
    setItemList(updatedItemList);
  };



  return (
    <>
     <div className={style.AppMain}>
      <h1>Lista de Tarefas</h1>
      <input type="text" placeholder="tarefa" value={item} name="item" onChange = {e => setItem(e.target.value)}/><br/>
      <button onClick={addItem}>Adicionar tarefa</button>
      <ul>
      {itemList.map((item) => (
      <li key={item} className={style.listItem}>
          {item}{' '}
          <div className={style.itemActions}>
          <input type="checkbox" name="completed"  className={style.buttonCheckBox} />
          <button className={style.buttonTrash} onClick={() => deleteItem(item)}>
                <FaTrash className={style.TrashIcon} />
            </button>
            </div>
        </li>

       /*   <li>{item}  <FaTrash/></li>*/
        ))}
      </ul>
        

      </div>
    </>
  )
}

export default TaskApp;
