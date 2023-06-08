import React from 'react';
import { useState } from 'react'
import AddNew from './components/AddNew';
import DoneItems from './components/DoneItems';
import ItemList from './components/ItemList';
import ToDoItems from './components/ToDoItems';

export default function App() {


  let [modalActive, setModalActive] = useState(false);
  console.log(modalActive);
  let [newItem, setNewItem] = useState('');
  let [items, setItems] = useState([
    { id: 1, name: 'Tõmba kassi sabast', done: false },
    { id: 2, name: 'Kiusa Juhanit', done: true },
    { id: 3, name: 'Litsu kaks nätsu suvalise tooli alla', done: false },
    { id: 4, name: 'Määri ukselingid majoneesiga kokku', done: true },
  ]);

  // bulma modal aken
  function onClickModalHandler() {
    if(modalActive == false) {
      setModalActive(true);
    }
    else if(modalActive == true) {
      setModalActive(false);
    } 
    console.log(modalActive);
  }

  // lisa uus ylesanne
  function add() {
    if (newItem == '') {
      setModalActive(false);
    }
    else {
      items.push({ id: Math.random(), name: newItem, done: false })
      setNewItem('');
    }   
  }

  // checbox handler
  const handleChange = (id) => {
    const newItemsArray = items.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      }
      return item;
    });
   
    setItems(newItemsArray);
    
    //console.log(id + " index")
    //console.log(items)
  }

  return (
    <>
      <div class="content">

        <div class="columns is-centered mt-1">
          <div class="column is-half">
            <button class="button box is-warning is-medium is-fullwidth has-text-weight-bold" onClick={onClickModalHandler}>LISA UUS</button>
          </div>
        </div>

        <AddNew
          modalActive={modalActive}
          setModalActive={setModalActive}
          onClickModalHandler={onClickModalHandler}
          setNewItem={setNewItem}
          add={add}
          newItem={newItem}
        ></AddNew>

        <ItemList
          items={items}
          handleChange={handleChange}
        ></ItemList>

        <DoneItems
          items={items}
          handleChange={handleChange}
        ></DoneItems>

        <ToDoItems
          items={items}
          handleChange={handleChange}
        ></ToDoItems>
      
      </div>

    </>
  );
}