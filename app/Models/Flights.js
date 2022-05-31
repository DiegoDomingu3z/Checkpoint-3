import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class Flight{
    constructor(flightData){
        this.id = flightData.id || generateId()
        this.flight = flightData.flight
        this.note = flightData.note || ''
    }


    


    get Template(){

        return `
        <div class="row p-4" id="flights">
        <div class="col-12 card bg-white shadow">
          <div class="row p-2 border-bottom border-2 border-dark ">
            <div class="col-12 text-center p-2"><h3>${this.flight}</h3></div>
            <div class="col-2 info">Type</div>
            <div class="col-2 info">Name</div>
            <div class="col-2 info">Confirmation Number</div>
            <div class="col-2 info">Address</div>
            <div class="col-2 info">Date</div>
            <div class="col-2 info">Cost</div>
          </div>
          <div class="row list-space p-3">
          
          ${this.Lists}

          </div>

          <form class="" action="" onsubmit="app.listsController.addList('${this.id}')">
          <div class="row p-2 border-top border-dark border-2 ">
              <div class="col-2"> <select name="type" id="type">
                <option value="✈️">Flight</option>
                <option value="🚙">Car</option>
                <option value="🏨">Hotel</option>
              </select></div>
              <div class="col-2"><input required name="name" id="name" "type="text" placeholder="Name"></div>
              <div class="col-2"><input required name="confirmation" id="confirmation" type="text"  placeholder="Confirmation Number"></div>
              <div class="col-2"><input required name="address" id="address" type="text" placeholder="Address"></div>
              <div class="col-2"><input required name="date" id="date" type="date""></div>
              <div class="col-2"><input required min="10" name="cost" id="cost" type="number" placeholder="Cost"></div>
           
              </form>
              <div class="col-12 text-end p-4"><button class="btn btn-success"><i class="mdi mdi-plus-circle"></i></button></div>
            <div class="col-4">
              <div class="info">Notes</div>
              <textarea onblur="app.flightsController.updateFlight('${this.id}')" class=" fs-b" name="note" id="note" cols="40" rows="2">${this.note}</textarea>
            </div>
            </div>
            <div class="col-12 d-flex justify-content-between p-2"><span><button class="btn btn-danger" onclick="app.flightsController.deleteFlight('${this.id}')">Delete</button></span><span class="info fs-3">Total: $${this.Total}</span></div>
            </div>
      </div>
        
        
        `
    }

    get Lists(){
      let lists = ProxyState.lists.filter(li => li.flightId == this.id)
      lists.sort((a,b)=> a.date - b.date)
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