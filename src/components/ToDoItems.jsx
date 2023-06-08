import React from 'react';

const ToDoItems = ({items, handleChange}) => {

const todoItems = items.filter((item) => !item.done)
                        .map(item => <div key={item.id} class="columns column box is-vcentered mt-2 has-background-danger-light">                                 
                                        <label class="checkbox columns column" >
                                            <input type="checkbox" class="column is-2" checked={item.done} onChange={() => {handleChange(item.id)}}  />
                                            <p class="column is-10">{item.name}</p>
                                        </label>
                                    </div>);

    return (
        <>
            <div class="columns is-centered mt-6" >
                <div class="column is-three-fifths">
                    <h3>Tegemata pahandused</h3>
                    {todoItems}
                </div>
            </div>
        </>
    );
    
}

export default ToDoItems;