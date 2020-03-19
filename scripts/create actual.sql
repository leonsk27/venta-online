-- MySQL Script generated by MySQL Workbench
-- Tue Mar 17 19:35:14 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`rol` ;

CREATE TABLE IF NOT EXISTS `mydb`.`rol` (
  `idrol` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrol`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC),
  UNIQUE INDEX `idrol_UNIQUE` (`idrol` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`departamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`departamento` ;

CREATE TABLE IF NOT EXISTS `mydb`.`departamento` (
  `iddepartamento` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `departamento` VARCHAR(45) NOT NULL,
  `transporte` FLOAT NOT NULL,
  PRIMARY KEY (`iddepartamento`),
  UNIQUE INDEX `iddepartamento_UNIQUE` (`iddepartamento` ASC),
  UNIQUE INDEX `departamento_UNIQUE` (`departamento` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cliente` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cliente` (
  `idcliente` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `primerNombre` VARCHAR(45) NOT NULL,
  `segundoNombre` VARCHAR(45) NULL,
  `apellidoPaterno` VARCHAR(45) NOT NULL,
  `ci` VARCHAR(12) NOT NULL,
  `genero` ENUM('m', 'f') NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  `activo` ENUM('s', 'n') NOT NULL,
  `usuario` VARCHAR(15) NOT NULL,
  `contrasenia` VARCHAR(15) NOT NULL,
  `iddepartamento` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcliente`),
  UNIQUE INDEX `idcliente_UNIQUE` (`idcliente` ASC),
  UNIQUE INDEX `ci_UNIQUE` (`ci` ASC),
  INDEX `iddepartamento_idx` (`iddepartamento` ASC),
  CONSTRAINT `iddepartamento`
    FOREIGN KEY (`iddepartamento`)
    REFERENCES `mydb`.`departamento` (`iddepartamento`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`usuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `idusuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `primerNombre` VARCHAR(45) NOT NULL,
  `segundoNombre` VARCHAR(45) NULL,
  `apellidoPaterno` VARCHAR(45) NOT NULL,
  `ci` VARCHAR(12) NOT NULL,
  `genero` ENUM('m', 'f') NOT NULL,
  `usuario` VARCHAR(12) NOT NULL,
  `contrasenha` BLOB(15) NOT NULL,
  `idrol` INT UNSIGNED NOT NULL,
  `activo` ENUM('s', 'n') NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `idcliente_UNIQUE` (`idusuario` ASC),
  UNIQUE INDEX `ci_UNIQUE` (`ci` ASC),
  INDEX `idrol_u_idx` (`idrol` ASC),
  CONSTRAINT `idrol_u`
    FOREIGN KEY (`idrol`)
    REFERENCES `mydb`.`rol` (`idrol`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`compra` ;

CREATE TABLE IF NOT EXISTS `mydb`.`compra` (
  `idcompra` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado` ENUM('en proceso', 'despachaado', 'entregado') NOT NULL,
  `direccion` VARCHAR(60) NOT NULL,
  `transporte` FLOAT NOT NULL,
  `idcliente` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcompra`),
  INDEX `idcliente_c_idx` (`idcliente` ASC),
  CONSTRAINT `idcliente_c`
    FOREIGN KEY (`idcliente`)
    REFERENCES `mydb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`categoria` ;

CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `idcategoria` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`),
  UNIQUE INDEX `idproducto_UNIQUE` (`idcategoria` ASC),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`subcategoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`subcategoria` ;

CREATE TABLE IF NOT EXISTS `mydb`.`subcategoria` (
  `idsubcategoria` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idcategoria` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idsubcategoria`),
  UNIQUE INDEX `idsubcategoria_UNIQUE` (`idsubcategoria` ASC),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC),
  INDEX `idcategoria_sc_idx` (`idcategoria` ASC),
  CONSTRAINT `idcategoria_sc`
    FOREIGN KEY (`idcategoria`)
    REFERENCES `mydb`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`producto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `idproducto` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(60) NOT NULL,
  `cantidad` INT NOT NULL,
  `precio` FLOAT UNSIGNED NOT NULL,
  `fabricante` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(50) NULL,
  `idsubcategoria` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idproducto`),
  INDEX `idsubcategoria_p_idx` (`idsubcategoria` ASC),
  UNIQUE INDEX `idproducto_UNIQUE` (`idproducto` ASC),
  CONSTRAINT `idsubcategoria_p`
    FOREIGN KEY (`idsubcategoria`)
    REFERENCES `mydb`.`subcategoria` (`idsubcategoria`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`color`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`color` ;

CREATE TABLE IF NOT EXISTS `mydb`.`color` (
  `idcolor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idcolor`),
  UNIQUE INDEX `idcolor_UNIQUE` (`idcolor` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productoColor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`productoColor` ;

CREATE TABLE IF NOT EXISTS `mydb`.`productoColor` (
  `idproductoColor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(50) NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  `idcolor` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idproductoColor`),
  UNIQUE INDEX `idproductoColor_UNIQUE` (`idproductoColor` ASC),
  INDEX `idproducto_pc_idx` (`idproducto` ASC),
  INDEX `idcolor_pc_idx` (`idcolor` ASC),
  CONSTRAINT `idproducto_pc`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mydb`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idcolor_pc`
    FOREIGN KEY (`idcolor`)
    REFERENCES `mydb`.`color` (`idcolor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`detalleCompra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`detalleCompra` ;

CREATE TABLE IF NOT EXISTS `mydb`.`detalleCompra` (
  `iddetalle` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cantidad` INT UNSIGNED NOT NULL,
  `precio` FLOAT UNSIGNED NOT NULL,
  `idcompra` INT UNSIGNED NOT NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  `idcolorProducto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`iddetalle`),
  UNIQUE INDEX `iddetalle_UNIQUE` (`iddetalle` ASC),
  INDEX `idcompra_d_idx` (`idcompra` ASC),
  INDEX `idproducto_d_idx` (`idproducto` ASC),
  INDEX `colorProducto_dv_idx` (`idcolorProducto` ASC),
  CONSTRAINT `idcompra_dc`
    FOREIGN KEY (`idcompra`)
    REFERENCES `mydb`.`compra` (`idcompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idproducto_dc`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mydb`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idcolorProducto_dc`
    FOREIGN KEY (`idcolorProducto`)
    REFERENCES `mydb`.`productoColor` (`idproductoColor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cambioEstado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cambioEstado` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cambioEstado` (
  `idcambioEstado` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `idusuario` INT UNSIGNED NOT NULL,
  `idcompra` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcambioEstado`),
  UNIQUE INDEX `idcambioEstado_UNIQUE` (`idcambioEstado` ASC),
  INDEX `idusuario_idx` (`idusuario` ASC),
  INDEX `idcompra_ce_idx` (`idcompra` ASC),
  CONSTRAINT `idusuario_ce`
    FOREIGN KEY (`idusuario`)
    REFERENCES `mydb`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idcompra_ce`
    FOREIGN KEY (`idcompra`)
    REFERENCES `mydb`.`compra` (`idcompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`valoracion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`valoracion` ;

CREATE TABLE IF NOT EXISTS `mydb`.`valoracion` (
  `idvaloracion` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `estrellas` TINYINT NOT NULL,
  `comentario` VARCHAR(100) NULL,
  `fecha` DATE NOT NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  `idcliente` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idvaloracion`),
  INDEX `idproducto_v_idx` (`idproducto` ASC),
  INDEX `idcliente_v_idx` (`idcliente` ASC),
  CONSTRAINT `idproducto_v`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mydb`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idcliente_v`
    FOREIGN KEY (`idcliente`)
    REFERENCES `mydb`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`detalleProducto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`detalleProducto` ;

CREATE TABLE IF NOT EXISTS `mydb`.`detalleProducto` (
  `iddetalleProducto` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `elemento` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(50) NOT NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`iddetalleProducto`),
  UNIQUE INDEX `iddetalleProducto_UNIQUE` (`iddetalleProducto` ASC),
  INDEX `idproducto_dp_idx` (`idproducto` ASC),
  CONSTRAINT `idproducto_dp`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mydb`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cuenta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`cuenta` ;

CREATE TABLE IF NOT EXISTS `mydb`.`cuenta` (
  `idcuenta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `numeroCuenta` VARCHAR(10) NOT NULL,
  `activo` ENUM('s', 'n') NOT NULL,
  `saldo` FLOAT NULL,
  `idcliente` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcuenta`),
  UNIQUE INDEX `idcuenta_UNIQUE` (`idcuenta` ASC),
  UNIQUE INDEX `numeroCuenta_UNIQUE` (`numeroCuenta` ASC),
  INDEX `idcliente_c_idx` (`idcliente` ASC),
  CONSTRAINT `idcliente_compra`
    FOREIGN KEY (`idcliente`)
    REFERENCES `mydb`.`cliente` (`idcliente`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
