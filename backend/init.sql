CREATE TABLE test_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO test_users (name, email) VALUES 
('Ivan Ivanov', 'ivan@example.com'),
('Maria Ivanova', 'maria@example.com');