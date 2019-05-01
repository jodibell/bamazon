DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (50) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    primary key (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ipad", "electronics", 100, 4),
("legos", "toys", 15, 20),
("Princess Bride", "movies", 10, 30),
("Javascript For Dummies", "books", 400, 8),
("kuerig coffee pods", "coffee", 3, 12),
("yellow polkadot bikini", "clothes", 25, 2);
