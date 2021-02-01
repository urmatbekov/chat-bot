const users = [
    {username:"asan",age:17},
    {username:"hasan",age:18},
    {username:"lasan",age:19},
    {username:"tasan",age:17},
    {username:"dasan",age:18},
]

const users2 = [
    {username:"lasan",age:19},
    {username:"tasan",age:17},
    {username:"dasan",age:18},
]



// const indexTasan = users.findIndex(
//     (item) => item.username === "tasan"
// )

// console.log(indexTasan)

// const tasan = users.find((item)=>item.username === "tasan")

// console.log(tasan)


const old17 = users.filter((item)=>item.age >= 17)
console.log(old17);

