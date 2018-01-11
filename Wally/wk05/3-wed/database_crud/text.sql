-- INSERT INTO contacts (email) VALUES ('dt@ga.co');
-- INSERT INTO contacts (email) VALUES ('cake@pudding.com');
--
-- SELECT id, email FROM contacts;
-- SELECT * FROM contacts;
-- SELECT email FROM contacts;
-- SELECT * FROM contacts WHERE id = 2;
-- SELECT * FROM contacts WHERE email = dt@ga.co;
--
-- DELETE FROM contacts WHERE id =1;
--
-- UPDATE contacts SET email = 'pudding@cake.com' WHERE id = 2;

Performing CRUD actions with SQL

CRUD stands for the most basic interactions we want to have with any database: Create, Read, Update and Destroy.

The most common SQL commands correspond to these 4 actions...

INSERT -> Create a row
SELECT -> Read / get information for rows
UPDATE -> Update a row
DELETE -> Destroy a row
First, enter into the library DB...

$ psql
$ \c library
INSERT

INSERT adds a row to a table...

INSERT INTO authors(name, nationality, birth_year) VALUES ('Adam Bray', 'United States of America', 1985);
SELECT

SELECT returns rows from a table...

-- select all columns from all rows
SELECT * FROM authors;

-- select only some columns, from all rows
SELECT name, birth_year FROM authors;

-- select rows that meet certain criteria
SELECT * FROM authors WHERE name = 'James Baldwin';
UPDATE

UPDATE updates values for one or more rows...

UPDATE authors SET name = 'Adam B.', birth_year = 1986 WHERE name = 'Adam Bray';
DELETE

DELETE removes rows from a table...

DELETE FROM authors WHERE name = 'Adam B.';
End of You Do: Building Our Database
Exercises

(basic_queries.sql) - SELECT, INSERT, UPDATE, DELETE
