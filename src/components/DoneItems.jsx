import React from 'react';

const DoneItems = ({items, handleChange}) => {

const doneItems = items.filter((item) => item.done)
                        .map(item => <div key={item.id} class="columns column box is-vcentered mt-2 has-background-success-light">
                                        <label class="checkbox columns column" >
                                            <input type="checkbox" class="column is-2" checked={item.done} onChange={() => { handleChange(item.id) }} />
                                            <p class="column is-10">{item.name}</p>
                                        </label>
                                    </div>);

    return (
        <>
            <div class="columns is-centered mt-6" >
                <div class="column is-three-fifths">
                    <h3>Tehtud pahandused</h3>
                    {doneItems}
                </div>
            </div>
        </>
    );
    
}

export default DoneItems;