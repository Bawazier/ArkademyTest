CREATE DATABASE arkademy;

CREATE TABLE product(
    id_produk INT(11) PRIMARY KEY AUTO_INCREMENT,
    nama_produk VARCHAR(200),
    keterangan TEXT,
    harga INT(12),
    jumlah INT
)ENGINE=INNODB;