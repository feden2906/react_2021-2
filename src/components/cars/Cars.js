import {useEffect, useState} from "react";

import {deleteCarAPI, getCarsAPI} from "../../services/car.api.service";
import Car from "../car/Car";

export default function Cars({setInputCarData}) {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCarsAPI().then(value => setCars(value))
    }, []);

    let deleteCar = (car) => {
        deleteCarAPI(car).then(value => console.log(value));
        console.log('deleted..');

        let filterCarsArray = cars.filter(value => (value.id !== car.id));
        setCars(filterCarsArray);
    };

    return(
        <div>
            {
                cars.map(value => <Car
                    key={value.id}
                    value={value}
                    deleteCar={deleteCar}
                    editCar={setInputCarData}/>)
            }
        </div>
    );
}