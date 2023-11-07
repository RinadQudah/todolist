import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import React from 'react';
import './App.css';

let nextId = 0;

function App() {
  const [myList, setmyList] = useState([]);
  const [myItem, setMyItem] = useState('');

  const addItem = () => {
    setmyList([...myList, { id: nextId++, itemName: myItem }]);
    setMyItem('');
  };

  const deleteItem = (id1) => {
    setmyList(myList.filter((x) => x.id !== id1));
  }

  return (
    <>
      <div className="fixed-background"></div>
      <div className="container">
        <div className="fixed">
          <label className="header">To Do List:</label>
          <div className="input-container">
            <input type="text" className="input" value={myItem} onChange={(e) => setMyItem(e.target.value)}placeholder="What is your task?"/>
            <button onClick={addItem} className="btn btn-add">+</button>
          </div>
          <div className="item-list">
            {myList.map((item) => (
              <div key={item.id} className="item">
                <button onClick={() => deleteItem(item.id)}className="btn btn-delete">X</button>
                {item.itemName}
              </div>))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
