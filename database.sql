CREATE TABLE espacios (
  id_espacio INT AUTO_INCREMENT PRIMARY KEY,
  estado ENUM('vacío', 'ocupado') NOT NULL DEFAULT 'vacío'
);

