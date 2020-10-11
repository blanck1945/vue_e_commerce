import { db } from "../main.js"


/*const fetchData = () => {
    let arr = []
    console.log("using this route")
    const res = db.collection('products').get()
        .then(res => res.docs.forEach(el => el.data()))
    console.log(arr)
    console.log(res)
    return arr
}*/
console.log(db.collection("products"))

export const data = db.collection('products').get()
    .then(res => res.docs.forEach(el => el.data()))