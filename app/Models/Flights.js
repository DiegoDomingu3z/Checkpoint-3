import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class Flight{
    constructor(flightData){
        this.id = flightData.id || generateId()
        this.flight = flightData.flight
        this.note = flightData.note
    }


    


    get Template(){

        return `
        <div class="row p-4" id="flights">
        <div class="col-12 card bg-white shadow">
          <div class="row p-2 ">
            <div class="col-12 text-center p-2"><h3>${this.flight}</h3></div>
            <div class="col-2">Type</div>
            <div class="col-2">Name</div>
            <div class="col-2">Confirmation Number</div>
            <div class="col-2">Address</div>
            <div class="col-2">Date</div>
            <div class="col-2">Cost</div>
          </div>
          <div class="row list-space">
          
          ${this.Lists}

          </div>
          <form class="" action="" onsubmit="app.listsController.addList('${this.id}')">
          <div class="row p-2 border-top border-dark border-2">
              <div class="col-2"> <select name="type" id="type">
                <option value="Flight">Flight</option>
                <option value="Car">Car</option>
                <option value="Hotel">Hotel</option>
              </select></div>
              <div class="col-2"><input name="name" id="name" "type="text"></div>
              <div class="col-2"><input name="confirmation" id="confirmation" type="text"></div>
              <div class="col-2"><input name="address" id="address" type="text"></div>
              <div class="col-2"><input name="date" id="date" type="date"></div>
              <div class="col-2"><input name="cost" id="cost" type="number"></div>
           
            <div class="col-12 text-end"><button class="btn btn-success">Add</button></div>
            </form>
            <div class="col-4">
              <div>Notes</div>
              <textarea onblur="app.flightsController.updateFlight('${this.id}')" name="note" id="note" cols="40" rows="2">${this.note}</textarea>
            </div>
            <div class="col-12 d-flex justify-content-between"><span><button class="btn btn-danger">Delete</button></span><span>$${this.Total}</span></div>
          </div>
        </div>
      </div>
        
        
        `
    }

    get Lists(){
      let lists = ProxyState.lists.filter(li => li.flightId == this.id)
      let template = ''
      lists.forEach( li => template += li.Template)
      return template
    }

    get Total(){
      let lists = ProxyState.lists.filter( li => li.flightId == this.id)
      let subTotal = 0
      lists.forEach(li => subTotal += parseInt(li.cost))
      return subTotal
    }
}