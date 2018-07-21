var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");


// Create connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//connect to mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected");
    //run start function after making connection
    seeTable();
})

//display table
var seeTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            console.table(res);
            purchase()
        },
        //purchase()
    )};

    //prompt purchase function and inquiry
    function purchase() {
        inquirer.prompt([{
                name: 'ID',
                type: 'input',
                message: "What is the ID of the item you would like to purchase? [Quit with Q]"
            }, {
                name: 'Quantity',
                type: 'input',
                message: "How many would you like? [Quit with Q]"
            }])
            //product chosen
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < answer.length; i++) {
                    if (res[i].item_id === answer.choice) {
                        chosenItem = res[i];
                    }
                }

                //update product quantity
                if (chosenItem.stock_quantity < parseInt(answer.number)) {
                    connection.query("UPDATE products SET", [{
                                stock_quantity: number
                            },
                            {
                                item_id: chosenItem
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log("Purchased!");
                            display();
                        }
                    );
                } else {
                    console.log("Sorry, we do not have that. Please make another selection.");
                    display();
                }
            });
    }





// function afterConnection() {
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });