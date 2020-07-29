-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS wizard_schools_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE wizard_schools_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE wizard_schools_db;

-- Created the table "schools"
CREATE TABLE schools (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  YEAR INT,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO schools (name, YEAR)
VALUES ("Hogwarts School of Witchcraft", 1122);

INSERT INTO schools (name, YEAR)
VALUES ("Castelobruxo", 2222);

INSERT INTO schools (name, YEAR)
VALUES ("Durmstrang Institute", 3333);

INSERT INTO schools (name, YEAR)
VALUES ("Beauxbatons Academy of Magic", 4444);

for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p>";
      html += "<p>Year: " " </p></li>";
    }