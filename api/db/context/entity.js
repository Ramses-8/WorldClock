const db = require ("./db");

class Entity {
    constructor(tableName,fieldIdName){
     this.tableName = tableName;
     this.fieldIdName = fieldIdName;
     
     this.all = async function() {
        var result = await db.any(`SELECT * FROM ${tableName};`);
        return result;
     }


     this.get = async function(id) {
         const result = await db.oneOrNone(`SELECT * FROM ${tableName} WHERE ${fieldIdName} = ${id};`);
         return result;
     }
    }
}

module.exports = Entity;