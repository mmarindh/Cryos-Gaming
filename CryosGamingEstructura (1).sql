CREATE TABLE IF NOT EXISTS `Rols` (
   `id` INT AUTO_INCREMENT,
   `label` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Users` (
   `id` INT AUTO_INCREMENT,
   `firts_name` VARCHAR NOT NULL,
   `last_name` VARCHAR NOT NULL,
   `username` VARCHAR NOT NULL,
   `email` VARCHAR NOT NULL,
   `password` VARCHAR NOT NULL,
   `avatar` VARCHAR NOT NULL DEFAULT 'default.png',
   `biography` VARCHAR,
   `rol_id` INT NOT NULL DEFAULT '1',
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`),
   UNIQUE KEY unique_email (email),
   UNIQUE KEY unique_avatar (avatar)
);

CREATE TABLE IF NOT EXISTS `Products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR NOT NULL,
   `price` INT NOT NULL,
   `description` INT NOT NULL,
   `image` VARCHAR NOT NULL DEFAULT 'default.png',
   `stock` INT NOT NULL,
   `brand_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Images` (
   `id` INT AUTO_INCREMENT,
   `filename` VARCHAR() NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `imageProduct` (
   `id` INT AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `image_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `ProcessorBrands` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Attributes` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR NOT NULL,
   `description` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `upadtedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `attributeProduct` (
   `id` INT AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `attribute_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAr` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `cartProduct` (
   `id` INT AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `product_sale` INT NOT NULL,
   `quantity` INT NOT NULL DEFAULT '1',
   `subtotal` INT NOT NULL,
   `state_id` INT NOT NULL,
   `cart_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Tokens` (
   `id` INT AUTO_INCREMENT,
   `token` VARCHAR NOT NULL,
   `user_id` INT NOT NULL,
   `updatedAt` TIMESTAMP,
   `createdAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `States` (
   `id` INT AUTO_INCREMENT,
   `state` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Carts` (
   `id` INT AUTO_INCREMENT,
   `total` INT NOT NULL,
   `user_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Orders` (
   `id` INT AUTO_INCREMENT,
   `cart_id` INT,
   `payment_id` INT,
   `shipment_id` INT,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `paymenMethods` (
   `id` INT AUTO_INCREMENT,
   `method` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Shipments` (
   `id` INT AUTO_INCREMENT,
   `address_id` VARCHAR NOT NULL,
   `createdAt` TIMESTAMP,
   `updaedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Addresses` (
   `id` INT AUTO_INCREMENT,
   `street` VARCHAR NOT NULL,
   `number` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `addressUser` (
   `id` INT AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `address_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE `Users` ADD CONSTRAINT `Users_fk_0_rol_id` FOREIGN KEY (rol_id) REFERENCES `Rols`(`id`) ;
ALTER TABLE `Products` ADD CONSTRAINT `Products_fk_0_brand_id` FOREIGN KEY (brand_id) REFERENCES `ProcessorBrands`(`id`) ;
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `Products`(`id`) ;
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_fk_0_image_id` FOREIGN KEY (image_id) REFERENCES `Images`(`id`) ;
ALTER TABLE `attributeProduct` ADD CONSTRAINT `attributeProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `Products`(`id`) ;
ALTER TABLE `attributeProduct` ADD CONSTRAINT `attributeProduct_fk_0_attribute_id` FOREIGN KEY (attribute_id) REFERENCES `Attributes`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `Products`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_state_id` FOREIGN KEY (state_id) REFERENCES `States`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_cart_id` FOREIGN KEY (cart_id) REFERENCES `Carts`(`id`) ;
ALTER TABLE `Tokens` ADD CONSTRAINT `Tokens_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `Users`(`id`) ;
ALTER TABLE `Carts` ADD CONSTRAINT `Carts_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `Users`(`id`) ;
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk_0_cart_id` FOREIGN KEY (cart_id) REFERENCES `Carts`(`id`) ;
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk_0_payment_id` FOREIGN KEY (payment_id) REFERENCES `paymenMethods`(`id`) ;
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk_0_shipment_id` FOREIGN KEY (shipment_id) REFERENCES `Shipments`(`id`) ;
ALTER TABLE `Shipments` ADD CONSTRAINT `Shipments_fk_0_address_id` FOREIGN KEY (address_id) REFERENCES `Addresses`(`id`) ;
ALTER TABLE `addressUser` ADD CONSTRAINT `addressUser_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `Users`(`id`) ;
ALTER TABLE `addressUser` ADD CONSTRAINT `addressUser_fk_0_address_id` FOREIGN KEY (address_id) REFERENCES `Addresses`(`id`) ;
