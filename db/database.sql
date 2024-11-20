CREATE DATABASE IF NOT EXISTS metricsdb;

USE metricsdb;

CREATE TABLE IF NOT EXISTS sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  product VARCHAR(255) NOT ,NULL,
  amount INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
);

DESCRIBE sales;

INSERT INTO sales VALUES 
(1, 'John Doe', 'Product A', 100, '2023-08-01 10:00:00'),
(2, 'Jane Smith', 'Product B', 50, '2023-08-02 14:30:00'),
(3, 'Bob Johnson', 'Product C', 75, '2023-08-03 09:15:00'),
(4, 'Alice Brown', 'Product D', 200, '2023-08-04 16:45:00'),
(5, 'Charlie Davis', 'Product E', 150, '2023-08-05 12:20:00');