create table orders(order_id int, product_id int, quantity int, order_date date)
	 drop table orders
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (1, 101, 2, '2024-08-08');
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (2, 102, 2, '2023-09-08');
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (3, 141, 2, '2023-08-08');
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (4, 161, 2, '2024-10-08');
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (5, 601, 2, '2024-11-08');
INSERT INTO orders (order_id, product_id, quantity, order_date)
VALUES (6, 701, 2, '2024-07-08');

 select * from orders




CREATE OR REPLACE FUNCTION orderInDateRange(start_date DATE, end_date DATE)
RETURNS TABLE(order_id INT, product_id INT, quantity INT, order_date DATE) AS $$
BEGIN
    RETURN QUERY
    SELECT o.order_id, o.product_id, o.quantity, o.order_date
    FROM orders o
    WHERE o.order_date BETWEEN start_date AND end_date;
END;
$$ LANGUAGE plpgsql;


select * from orderInDateRange('2024-01-01', '2024-12-25');




