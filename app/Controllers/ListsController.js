import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"






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
    
}