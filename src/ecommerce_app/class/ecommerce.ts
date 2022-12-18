import { Entity } from "../interfaces/common"

export class List<T extends Entity> extends Array<T> {
    
    constructor() {
        super()
        Object.setPrototypeOf(this, List.prototype)
    }
    
    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url: string) {
        const jsondata = await fetch(url) 
        const data: T[] = await jsondata.json()        
        if ("message" in data) {
            throw Error("error fetching data from the server")        
        }
        this.push(...data)   
    }
    
    /* complete the function sortList() with a parameter "order", which can be 
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    sortList(order: string): this {
        if (order === "asc") {
            return this.sort((a, b) => a.id - b.id)
        } else {
            return this.sort((a, b) => b.id - a.id)
        }
    }

    /* complete method push(), which overrides original "push" method. New item can be added to the array if 
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    push(...items: T[]): number {
        const elements = items.filter((value) => {
            if (!this.some((element) => element.id === value.id)) {
                return value
            }
        })
        if (elements.length == items.length) {
            elements.forEach((value) => this[this.length] = value)
            return 1
        }
        return 0
    }
}

