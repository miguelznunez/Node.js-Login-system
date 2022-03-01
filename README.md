A complete login system with node.js and MySQL

=========================================================================

Create a .env file and initialize the environment variables below with your own credentials. I initialized them to some default values.

NODE_ENV=DEVELOPMENT

DB_LIMIT=10
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mysupersecretpassword
DB_NAME=login

JWT_SECRET=mysupersecretpassword
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES=90

=========================================================================
MySQL database schema:

CREATE TABLE `login`.`users` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(100),
  `last_name` VARCHAR(100),
  `email` VARCHAR(100),
  `password` BINARY(60),
  `token` BINARY(60),
  `token_expires` BINARY(13),
  `account_creation` DATE,
  `active` TINYINT DEFAULT FALSE, 
  `is_admin` TINYINT DEFAULT FALSE,

  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
