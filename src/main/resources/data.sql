INSERT INTO account (account_name) VALUES (
  'Matthew'
);

INSERT INTO account (account_name) VALUES (
  'Chloe'
);

INSERT INTO account (account_name) VALUES (
  'Peanut Man'
);

INSERT INTO todo_list (position, title, account_id) VALUES (
  0, 'First list', 1
);

INSERT INTO todo_list (position, title, account_id) VALUES (
  1, 'Second list', 1
);

INSERT INTO todo_list (position, title, account_id) VALUES (
  2, 'Hello mate', 2
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  0, 'First list first todo', false, 1
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  1, 'First list second todo', true, 1
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  0, 'Second list first todo', true, 2
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  1,'Second list, second todo', false, 2
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  0, 'Third list first todo', true, 3
);

INSERT INTO todo (position, content, complete, todo_list_id) VALUES (
  1,'Third list, second todo', false, 3
);
