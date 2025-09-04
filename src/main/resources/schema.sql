CREATE TABLE account (
  id int AUTO_INCREMENT,
  account_name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE todo_list (
  id int AUTO_INCREMENT,
  position int NOT NULL,
  title varchar(255) NOT NULL,
  account_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES account(id)
);

CREATE TABLE todo (
  id int,
  position int NOT NULL,
  content varchar(255) NOT NULL,
  complete boolean NOT NULL,
  todo_list_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (todo_list_id) REFERENCES todo_list(id)
);
