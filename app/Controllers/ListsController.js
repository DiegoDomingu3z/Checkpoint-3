import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { Pop } from "../Utils/Pop.js";





export class ListsController{
    constructor(){
        console.log('list controller is working,', ProxyState.lists);


    }



    addList(flightId){
        window.event.preventDefault()
        console.log('is lists loading', flightId);
        let form = window.event.target
        let listData = {
            flightId: flightId,
            type: form.type.value,
            name: form.name.value,
            confirmation: form.confirmation.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value
        }
        listsService.addList(listData)
    }

     async deleteList(id){
         if(await Pop.confirm('Are you sure you want to delete this Reservation')){

             listsService.deleteList(id)
            }
    }
    
}