var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table"); //not sure if this will work

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "trtp639F",
    database: "bamazon"
});

//Initializes connection
connection.connect(function (err) {
    if (err) throw err;
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.log(result);
        connection.end;
    })
};

function getUserToPickItem (items) {
    inquirer.prompt([
        {
            type: "input",
            name: "choice",
            message: "What item do you want (ID please)?"
        }
    ]).then(function(id) {
        var product = checkInventory(id.choice, inventory);
        if (product) {
            askUserHowMany(product);
        }
        else {
            console.log("Sorry, no more left");
            displayItems();
        }
    });
}

function askUserHowMany(product) {
    inquirer.prompt([
        {
            type: "input",
            name: "quantity",
            message: "How many?"
        }
    ]).then (function(qty) {
        if (qty > product.stock_quantity) {
            console.log("Sorry, we're out!");
            displayItems();
        }
        else {
            sellItem(product, qty);
        }
    });
}

function sellItem (product, qty) {
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_ID = ?",
    [qty, product.item_id],
    function(res) {
        console.log("Items purchased.");
        displayItems();
    }
    );
}



