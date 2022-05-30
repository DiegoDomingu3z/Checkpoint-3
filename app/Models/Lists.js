import { generateId } from "../Utils/generateId.js"







export class Lists{
    constructor(listData){
        this.id = listData.id || generateId()
        this.flightId = listData.flightId
        this.type = listData.type
        this.name = listData.name
        this.confirmation = listData.confirmation
        this.address = listData.address
        this.date = listData.date
        this.cost = listData.cost
    }


    get Template(){

        return `
        <div class="col-12">
        <div class="row p-2 bg-secondary">
          <div class="col-2">${this.type}</div>
          <div class="col-2">${this.name}</div>
          <div class="col-2">${this.confirmation}</div>
          <div class="col-2">${this.address}</div>
          <div class="col-2">${this.date}</div>
          <div class="col-2">${this.cost}</div>
        </div>
      </div>
      
        
        `
    }
}