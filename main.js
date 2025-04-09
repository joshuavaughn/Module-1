let menuItems;

const getAllMenu = async () => {
    try {
        const response = await fetch ('https://docs.google.com/spreadsheets/d/1odDonTuVSRRJ6MMxLp2Qm8eVHcf1v2qzem30Rz1u7Do/gviz/tq?sheet=Menu&range=A:G');
        const data = await response.text();
        menuItems = JSON.parse(data.substr(47).slice(0, -2));;
        // console.log(menuItems);
        
        // let food1 = menuItems.table.rows[0].c[1]

        // return menuItems
        // console.log(food1)
        module.exports = menuItems

    } catch (error) {
        console.log (error);
    }
}

getAllMenu();

// function nameReturn () {
//     let name = "vaughn"
//     module.exports = name;
// }

// nameReturn();

