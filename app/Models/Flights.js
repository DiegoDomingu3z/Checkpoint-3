import { generateId } from "../Utils/generateId.js"




export class Flight{
    constructor(flightData){
        this.id = flightData.id || generateId()
        this.flight = flightData.flight
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
          <div class="row list-space"></div>
          <form class="" action="" onsubmit="">
          <div class="row p-2 border-top border-dark border-2">
              <div class="col-2"> <select name="type" id="type">
                <option value="">Flight</option>
                <option value="">Car</option>
                <option value="">Hotel</option>
              </select></div>
              <div class="col-2"><input type="text"></div>
              <div class="col-2"><input type="text"></div>
              <div class="col-2"><input type="text"></div>
              <div class="col-2"><input type="date"></div>
              <div class="col-2"><input type="number"></div>
            </form>
            <div class="col-12 text-end"><button class="btn btn-success">Add</button></div>
            <div class="col-4">
              <div>Notes</div>
              <textarea name="" id="" cols="40" rows="2"></textarea>
            </div>
            <div class="col-12 d-flex justify-content-between"><span><button class="btn btn-danger">Delete</button></span><span>Total</span></div>
          </div>
        </div>
      </div>
        
        
        `
    }
}