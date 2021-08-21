import {useState} from "react";
import {postCarAPI, putCarAPI} from "../../services/car.api.service";
import Cars from "../cars/Cars";

export default function CarForm() {

    let [formState, setFormState] = useState({model: '', year: '', price: ''});

    let onFormInputChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    let save = (event) => {
        event.preventDefault();

        let update = formState.id;

        let verificationOfValidation =
            formState.model !== ''
            && formState.model.length <= 20
            && formState.year >= 1990
            && formState.year <= 2021
            && formState.price >= 0;

        if (verificationOfValidation) {
            if (update) {
                putCarAPI(formState).then(value => console.log(value));
                setFormState({model: '', year: '', price: ''});
            } else {
                postCarAPI(formState).then(value => console.log(value));
                setFormState({model: '', year: '', price: ''});
            }
        } else { console.log('ERROR: invalid validation') }
    };

    return(
        <div>
            <form onSubmit={save}>
                <input type={'text'}
                       name={'model'}
                       value={formState.model}
                       placeholder={'Write the model..'}
                       onChange={onFormInputChange}
                       // minLength={1} maxLength={20}
                />
                <input type={'text'}
                       name={'year'}
                       value={formState.year}
                       placeholder={'Write the year..'}
                       onChange={onFormInputChange}
                       // min={1990} max={2021}
                />
                <input type={'text'}
                       name={'price'}
                       value={formState.price}
                       placeholder={'Write the price..'}
                       onChange={onFormInputChange}
                       // min={0}
                />
                <input type={'submit'} name={'button'} value={'PostCar'}/>
            </form>

            <Cars setInputCarData={setFormState}/>
        </div>
    );
}