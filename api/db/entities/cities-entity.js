const Entity = require("../context/entity");


class CitiesEntity extends Entity{
    constructor(){
        super("cities","city_id");
    }
}

module.exports = CitiesEntity;