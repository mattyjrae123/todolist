package nz.co.matthewrae.todolist.domain;

public record Todo(int id, int position, String content, boolean complete, int todo_list_id) {}
