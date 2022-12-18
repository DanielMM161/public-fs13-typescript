import { List } from "./class/ecommerce";
import { Product } from "./interfaces/product";
import { User } from "./interfaces/user";

/* Fix all the possible bugs you might find in the codes below */

const users = new List<User>()
const products = new List<Product>()


async function run() {
    await users.fetchAll("https://api.escuelajs.co/api/v1/users?limit=4")
    await products.fetchAll("https://api.escuelajs.co/api/v1/products")
    
    console.log(users.sortList("desc")) //Expect to see users array in new order of id decreasing

    // /** find user by email.
    //  * Take a parameter of type string.
    //  * Return a found user or null*/
    const findUserByEmail = (email: string): User | undefined => {
        return users.find(user => user.email === email)
    }
    const foundUser = findUserByEmail("john@mail.com")
    console.log("Find user -> ",foundUser) //expect to see user with email "john@mail.com" in the console

    // /** Find all products with titles matched the search, case insentitive. 
    //  * Take a parameter of type string.
    //  * Return an array
    //  */
    const findProductsByText = (search: string): Product[] => {
        return products.filter(products => products.title === search)
    }
    const foundProducts = findProductsByText("Small Fresh Computer")
    console.log("Find Product",foundProducts) //expect to see an array of all found products

    const testPush1 = users.push(
        {
            id: 1,
            email: "william@gmail.com",
            password: "william",
            name: "William",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        },
        {
            id: 90,
            email: "henry@gmail.com",
            password: "henry",
            name: "Henry",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        }
    )

    const testPush2 = users.push(
        {
            id: 90,
            email: "william@gmail.com",
            password: "william",
            name: "William",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        },
        {
            id: 100,
            email: "henry@gmail.com",
            password: "henry",
            name: "Henry",
            role: "customer",
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
        }
    )

    console.log(testPush1) // expect to see 0
    console.log(testPush2) // expect to see 1
}

run()