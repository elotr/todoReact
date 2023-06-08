import React from 'react';

const ItemList = ({items, handleChange}) => {

const list = items.map(item => <div key={item.id} class="columns column box is-vcentered mt-2 has-background-warning-light">                                 
                                    <label class="checkbox columns column" >
                                        <input type="checkbox" class="column is-2" checked={item.done} onChange={() => {handleChange(item.id)}}  />
                                        <p class="column is-10">{item.name}</p>
                                    </label>
                                </div>);

    return (
        <>
            <div class="columns is-centered mt-5" >
                <div class="column is-three-fifths">
                    <h3>Kõik pahandused</h3>
                    {list}
                </div>
            </div>
        </>
    );
    
}

export default ItemList;