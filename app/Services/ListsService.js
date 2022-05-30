import { ProxyState } from "../AppState.js"
import { Lists } from "../Models/Lists.js"





 class ListsService{
     addList(listData){
         console.log('adding lists', listData);
        ProxyState.lists = [...ProxyState.lists, new Lists(listData)]
     }

}



export const listsService = new ListsService()
