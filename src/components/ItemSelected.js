import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { IMaskInput } from "react-imask";


import "./ItemSelected.css"

const ItemSelected = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState("0");
    const [action, setAction] = useState('');

    console.log(quantity)



    const submitEvent = () => {
        const item = {
            name: name,
            quantity: parseInt(Number(quantity)),
        };
        // if (Number.isInteger(Number(quantity)) === true) {
        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }
        // }
        //     else {
        //     console.log("It isn't Integer")
        // }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Shirt" name="Shirt"> Shirt</option>
                        <option value="Dress" name="Dress">Dress</option>
                        <option value="Jeans" name="Jeans">Jeans</option>
                        <option value="Dinner set" name="Dinner set">Dinner set</option>
                        <option value="Bags" name="Bags">Bags</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add" id='add'>Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}></span>

                    <IMaskInput
                        required='required'
                        type='number'
                        id='cost'
                        mask={Number}
                        min={0}
                        max={100}
                        value={quantity}
                        style={{ size: 10 }}
                        // onChange={(event) => setQuantity(event.target.value)}
                        // onAccept={(value, mask) => console.log(value, mask)}
                        onAccept={(e) => {
                            if (parseInt(Number(e)) !== 0) {
                                setQuantity(e)
                            }
                            else {
                                setQuantity("0")
                                alert("You can to write only numbers")
                            }
                        }
                        }
                    >
                    </IMaskInput>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;