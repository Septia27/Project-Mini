CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    status INT NOT NULL DEFAULT 0
);
