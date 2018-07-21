CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product VARCHAR (50) NOT NULL,
    department VARCHAR (50) NOT NULL,
    price DECIMAL (10,4) NOT NULL,
    stockQuantity INTEGER (10) NOT NULL,
    primary key (item_id)
);


INSERT INTO products (product, department, price, stockQuantity)
VALUES ("Paperclips", "Office Supplies", 9.97, 3579),
    ("Tape Measure", "Hardware", 11.17, 293),
    ("Black Tea", "Grocery", 3.21, 517),
    ("Book Ends", "Home Goods", 21.33, 901),
    ("Tank Top", "Clothing", 1.19, 2453),
    ("Cheese Grater", "Kitchen", 5.11, 1791),
    ("MacBook Pro", "Tech", 6471.19, 973),
    ("Necklace", "Jewelry", 573.17, 5689),
    ("Puppy", "Pet Supplies", 1213.51, 7773),
    ("Tesla", "Cars", 59.99, 1111);

SELECT * FROM bamazon.products;
