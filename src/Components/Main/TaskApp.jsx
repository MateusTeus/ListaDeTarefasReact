import React, { useState } from 'react';
import style from './Task.module.css'


import { FaTrash,  FaHeart } from 'react-icons/fa'



function TaskApp() {
  const [currentPage, setCurrentPage] = useState("ativos");
  const [item, setItem] = useState(''); //iniciado com string vazia, setItem serve p editar
  const [itemList, setItemList] = useState([]); //iniciado com array vazio serve p setItemList editar lista

  const toggleTaskStatus = (itemToToggle) => {
    const updatedItemList = itemList.map((item) => {
      if (item === itemToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItemList(updatedItemList);
  };

  const filteredTasks = itemList.filter((item) => {
    if (currentPage === "ativos") {
      return !item.completed;
    } else if (currentPage === "concluídos") {
      return item.completed;
    }
    return true;
  });

  const addItem = () => {
    if (item.trim() !== "") { // Verifica se o valor de item não está vazio
      setItemList([{ text: item, completed: false }, ...itemList]);
      setItem('');
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
        <input className={style.inputItem}
          type="text"
          placeholder="tarefa"
          value={item}
          name="item"
          onChange={(e) => setItem(e.target.value)}
        /><br />
        <button onClick={addItem}>Adicionar tarefa</button>
       
        <div className={style.containerButton}>
          <button className={style.btnPage} onClick={() => setCurrentPage("ativos")}>Tarefas Ativas</button>
          <button className={style.btnPage} onClick={() => setCurrentPage("concluídos")}>Tarefas Concluídas</button>
        </div>
        <ul>
          {filteredTasks.map((item) => (
            <li key={item.text} className={style.listItem}>
              {item.text}{' '}
              <div className={style.itemActions}>
                <input
                  type="checkbox"
                  name="completed"
                  className={style.buttonCheckBox}
                  checked={item.completed}
                  onChange={() => toggleTaskStatus(item)}
                />
                <button
                  className={style.buttonTrash}
                  onClick={() => deleteItem(item)}
                >
                  <FaTrash className={style.TrashIcon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskApp;
