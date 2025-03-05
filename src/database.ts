import mongoose from "mongoose";


class Database {
    constructor(){
        this.init();   
    }

    init() {
        mongoose.connect('mongodb://localhost/fintrack', {});
        console.log('DataBase connected');
      }
}

export default new Database();