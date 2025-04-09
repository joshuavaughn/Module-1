const result = require ('./1-SampleModule')
const menu = require ('./main')

console.log (`start`)
console.log(result())
// menu()
// .then(data => {
//     console.log("Menu Items:", data.table.rows[1])
//   })
//   .catch(error => {
//     console.error("Error:", error)
//   })

async function showMenu () {
    try {
        console.log (`1`)
        const data = await menu()
        console.log("Menu Items:", data.table.rows[1])
        console.log (`3`)
    } catch (error) {
        console.log (`error:`, error)
    }
}

showMenu()

console.log (`end`)






























// const getAllMenu = require(`./main`)

// console.log (module);


// // const getMenu = async () => {
// //     try {
// //         const menu = require(`./main`)
// //         // const menu = await getAllMenu;
// //         console.log (`menu is fetched`);
// //         console.log (menu);
// //         console.log (module);
// //         console.log (`done fetching`);
        
// //     } catch (error) {
// //         console.log (error)
// //     }
// // }

// // getMenu();