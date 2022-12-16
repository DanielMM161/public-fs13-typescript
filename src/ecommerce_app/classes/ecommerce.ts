import { json } from "react-router"
import { Entity } from "../interfaces/common"
import { ApiResponse } from "../types/ApiResponse"


export class List<T extends Entity> extends Array<T> {
    
    constructor() {
        super()
        Object.setPrototypeOf(this, List.prototype)
    }
    

    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url: string): Promise<T> {
        const jsondata = await fetch(url)   
        const data = await jsondata.json()       
        return data
    }
    
    /* complete the function sortList() with a parameter "order", which can be 
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    // sortList(order) { }

    /* complete method push(), which overrides original "push" method. New item can be added to the array if 
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    push(...items: T[]): number {
        items.map((item) => {
            if (this.find(original => original.id === item.id)) {
                throw Error("")
            }
        })
        this.push(...items)
        return 1
    }

}

