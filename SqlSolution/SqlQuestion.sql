create table orders(order_id int, product_id int, product_Name char(40) ,quantity int, order_date date)
	
INSERT INTO orders (order_id, product_id,product_Name, quantity, order_date)
VALUES (1, 101,'Redmi Note 11 pro',2, '2024-08-08');
INSERT INTO orders (order_id, product_id, product_Name, quantity, order_date)
VALUES (2, 102, 'Samsung Galaxy', 3,'2023-09-08');
INSERT INTO orders (order_id, product_id, product_Name,quantity, order_date)
VALUES (3, 141,'Poco 11', 4, '2023-08-08');
INSERT INTO orders (order_id, product_id, product_Name, quantity, order_date)
VALUES (4, 161, 'Lenovo', 2, '2024-10-08');
INSERT INTO orders (order_id, product_id, product_Name, quantity, order_date)
VALUES (5, 601,'Dell' ,  2, '2024-11-08');
INSERT INTO orders (order_id, product_id, product_Name, quantity, order_date)
VALUES (6, 701,'HP',  2, '2024-07-08');

 select * from orders

CREATE OR REPLACE FUNCTION OrderInDateRange(start_date DATE, end_date DATE)
RETURNS TABLE(order_id INT, product_id INT,product_Name char(40), quantity INT, order_date DATE) AS $$
BEGIN
    RETURN QUERY
    SELECT o.order_id, o.product_id,o.product_Name, o.quantity, o.order_date
    FROM orders o
    WHERE o.order_date BETWEEN start_date AND end_date;
END;
$$ LANGUAGE plpgsql;

select * from OrderInDateRange('2024-01-01', '2024-12-25');

drop function OrderIndateRange(date, date);
drop table orders 

