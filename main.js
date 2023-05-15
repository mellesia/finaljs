
let title = document.getElementById("title");
let cost = document.querySelectorAll("#cost input");
let count = document.getElementById("count");
let department = document.getElementById("department");
let btnCreat = document.getElementById("btnCreat");
let tableBody = document.getElementById("tableBody");

let allData = [];
if (localStorage.product != null) {
    allData = JSON.parse(localStorage.product);
} else {
    allData = [];
}



//=========get Total Function 
let getTotal = () => {
    let price = cost[0].value,
        tax = cost[1].value,
        tCost = cost[2].value,
        discount = cost[3].value,
        total = cost[4].value;
    let getTotalValue = (+price + +tax + +tCost) - discount

    cost[4].value = Math.ceil(getTotalValue);

}

for (let i = 0; i < cost.length; i++) {
    cost[i].addEventListener('keyup', getTotal)
}


//Create new object
createObject = () => {
    let newData = {
        title: title.value,
        price: cost[0].value,
        tax: cost[1].value,
        Tcost: cost[2].value,
        discount: cost[3].value,
        total: cost[4].value,

        department: department.value
    }

    allData.push(newData);
    localStorage.setItem("product", JSON.stringify(allData));
    console.log(allData);
    showData();

}

console.log(allData);
let showData = () => {
    let table = '';
    for (let i = 0; i < allData.length; i++) {
        table +=
            `
    <tr>
            <td>${i}</td>
            <td>${allData[i].title}</td>
            <td>${allData[i].price}</td>
            <td>${allData[i].tax}</td>
            <td>${allData[i].Tcost}</td>
            <td>${allData[i].discount}</td>
            <td>${allData[i].total}</td>
            <td>${allData[i].department}</td>
            
    </tr>
         `

    }
    tableBody.innerHTML = table;
}
showData();

btnCreate.addEventListener("click", createObject);


