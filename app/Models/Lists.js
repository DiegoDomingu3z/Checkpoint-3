import { generateId } from "../Utils/generateId.js"







export class Lists{
    constructor(listData){
        this.id = listData.id || generateId()
        this.flightId = listData.flightId
        this.type = listData.type
        this.name = listData.name
        this.confirmation = listData.confirmation
        this.address = listData.address
        this.date = new Date(listData.date)
        this.cost = listData.cost
    }


    get Template(){

        return `
        <div class="col-12">
        <div class="row p-2 bg-secondary rounded reservations">
          <div class="col-2">${this.type}</div>
          <div class="col-2">${this.name}</div>
          <div class="col-2">${this.confirmation}</div>
          <div class="col-2">${this.address}</div>
          <div class="col-2">${this.date.toDateString()}</div>
          <div class="col-2">$${this.cost}  <i class="mdi mdi-trash-can-outline selectable px-3" onclick="app.listsController.deleteList('${this.id}')"></i> </div>
        </div>
      </div>
      
        
        `
    }
}