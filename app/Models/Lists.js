import { generateId } from "../Utils/generateId.js"







export class Lists{
    constructor(listData){
        this.id = listData.id || generateId()
        this.type = listData.type
        this.name = listData.name
        this.confirmationNumber = listData.confirmationNumber
        this.address = listData.address
        this.date = listData.date
        this.cost = listData.cost
    }


    get Template(){

        return `
        
        
        `
    }
}