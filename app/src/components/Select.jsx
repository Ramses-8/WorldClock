import React, { useEffect, useState } from "react";
import "./Select.css";
import * as service from "../services/cities-service"

function Select({ onChange }) {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        async function populate() {
            const _cities = await service.getCities();
            setCities(_cities);
        }
        populate();
    }, [])

    const handleChange = (event) => {
        const id = event.target.value;
        const city = {
            continent: cities[id - 1].continent,
            name: cities[id - 1].city_name            
        }
        onChange(city);
    }

    return (
        <div className="select">
            <select id="timeZoneID" defaultValue="1" className="select__options" onChange={handleChange}>
                <option value="0" disabled>Select a city for clock</option>
                {
                    cities.map((city, index) => (<option key={index} value={city.city_id}>{city.city_name}</option>))
                }
            </select>
        </div>
    )
    
}

export default Select;