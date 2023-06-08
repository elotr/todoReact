import React, { useCallback } from 'react';

const AddNew = ({ modalActive, setModalActive, onClickModalHandler, setNewItem, add, newItem }) => {

    //let [modalActive, setModalActive] = useState(true);

    return (
        <>
            <div className={!modalActive ? "modal" : "modal is-active"}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Lisa uus pahandus</p>
                        <button class="delete" aria-label="close" onClick={onClickModalHandler}></button>
                    </header>
                    <section class="modal-card-body">
                        {/* <!-- Content ... --> */}
                        <textarea class="textarea is-primary" type="text" value={newItem} onChange={event => { setNewItem(event.target.value) }} ></textarea>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success" onClick={() => { add(); onClickModalHandler() }}>Lisa</button>
                        <button class="button is-danger is-light" onClick={() => {onClickModalHandler(); setNewItem("") }}>Tühista</button>
                    </footer>
                </div>
            </div>
        </>
    )

}

export default AddNew;