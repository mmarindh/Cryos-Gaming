CREATE TABLE IF NOT EXISTS `rols` (
   `id` INT AUTO_INCREMENT,
   `label` VARCHAR(100) NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
   `id` INT AUTO_INCREMENT,
   `firts_name` VARCHAR(100) NOT NULL,
   `last_name` VARCHAR(100) NOT NULL,
   `username` VARCHAR(100) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `avatar` VARCHAR(100) NOT NULL DEFAULT 'default.png',
   `biography` VARCHAR(100),
   `rol_id` INT NOT NULL DEFAULT '1',
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`),
   UNIQUE KEY unique_email (email),
   UNIQUE KEY unique_avatar (avatar)
);

CREATE TABLE IF NOT EXISTS `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `price` INT NOT NULL,
   `description` INT NOT NULL,
   `image` VARCHAR(100) NOT NULL DEFAULT 'default.png',
   `stock` INT NOT NULL,
   `brand_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `images` (
   `id` INT AUTO_INCREMENT,
   `filename` VARCHAR(100) NOT NULL,
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

CREATE TABLE IF NOT EXISTS `processorBrands` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `attributes` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `description` VARCHAR(100) NOT NULL,
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

CREATE TABLE IF NOT EXISTS `tokens` (
   `id` INT AUTO_INCREMENT,
   `token` VARCHAR(100) NOT NULL,
   `user_id` INT NOT NULL,
   `updatedAt` TIMESTAMP,
   `createdAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `states` (
   `id` INT AUTO_INCREMENT,
   `state` VARCHAR(100) NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `carts` (
   `id` INT AUTO_INCREMENT,
   `total` INT NOT NULL,
   `user_id` INT NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `orders` (
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
   `method` VARCHAR(100) NOT NULL,
   `createdAt` TIMESTAMP,
   `updatedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `shipments` (
   `id` INT AUTO_INCREMENT,
   `address_id` VARCHAR(100) NOT NULL,
   `createdAt` TIMESTAMP,
   `updaedAt` TIMESTAMP,
   `deletedAt` TIMESTAMP,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `addresses` (
   `id` INT AUTO_INCREMENT,
   `street` VARCHAR(100) NOT NULL,
   `number` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `addressUser` (
   `id` INT AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `address_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk_0_rol_id` FOREIGN KEY (rol_id) REFERENCES `rols`(`id`) ;
ALTER TABLE `products` ADD CONSTRAINT `products_fk_0_brand_id` FOREIGN KEY (brand_id) REFERENCES `processorBrands`(`id`) ;
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `products`(`id`) ;
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_fk_0_image_id` FOREIGN KEY (image_id) REFERENCES `images`(`id`) ;
ALTER TABLE `attributeProduct` ADD CONSTRAINT `attributeProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `products`(`id`) ;
ALTER TABLE `attributeProduct` ADD CONSTRAINT `attributeProduct_fk_0_attribute_id` FOREIGN KEY (attribute_id) REFERENCES `attributes`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_product_id` FOREIGN KEY (product_id) REFERENCES `products`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_state_id` FOREIGN KEY (state_id) REFERENCES `states`(`id`) ;
ALTER TABLE `cartProduct` ADD CONSTRAINT `cartProduct_fk_0_cart_id` FOREIGN KEY (cart_id) REFERENCES `carts`(`id`) ;
ALTER TABLE `tokens` ADD CONSTRAINT `tokens_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `users`(`id`) ;
ALTER TABLE `carts` ADD CONSTRAINT `carts_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `users`(`id`) ;
ALTER TABLE `orders` ADD CONSTRAINT `orders_fk_0_cart_id` FOREIGN KEY (cart_id) REFERENCES `carts`(`id`) ;
ALTER TABLE `orders` ADD CONSTRAINT `orders_fk_0_payment_id` FOREIGN KEY (payment_id) REFERENCES `paymenMethods`(`id`) ;
ALTER TABLE `orders` ADD CONSTRAINT `orders_fk_0_shipment_id` FOREIGN KEY (shipment_id) REFERENCES `shipments`(`id`) ;
ALTER TABLE `shipments` ADD CONSTRAINT `shipments_fk_0_address_id` FOREIGN KEY (address_id) REFERENCES `addresses`(`id`) ;
ALTER TABLE `addressUser` ADD CONSTRAINT `addressUser_fk_0_user_id` FOREIGN KEY (user_id) REFERENCES `users`(`id`) ;
ALTER TABLE `addressUser` ADD CONSTRAINT `addressUser_fk_0_address_id` FOREIGN KEY (address_id) REFERENCES `addresses`(`id`) ;
