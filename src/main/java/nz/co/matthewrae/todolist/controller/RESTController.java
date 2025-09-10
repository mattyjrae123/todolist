package nz.co.matthewrae.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;

import nz.co.matthewrae.todolist.domain.Todo;
import nz.co.matthewrae.todolist.domain.TodoList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
public class RESTController {
  JdbcTemplate jdbcTemplate;
  
  public RESTController(@Autowired JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @GetMapping("/lists")
  public List<TodoList> getAllLists() {
    List<TodoList> todoLists = jdbcTemplate.query("SELECT * FROM todo_list ORDER BY position",
      (rs, rowNum) -> new TodoList(rs.getInt("id"), rs.getInt("position"), rs.getString("title"), rs.getInt("account_id")));

    return todoLists;
  }

  @GetMapping("/lists/{id}")
  public List<Todo> getTodosByListId(@PathVariable int id) {
    List<Todo> todos = jdbcTemplate.query("SELECT * FROM todo WHERE todo_list_id=? ORDER BY position",
      (rs, rowNum) -> new Todo(rs.getInt("id"), rs.getInt("position"), rs.getString("content"), rs.getBoolean("complete"), rs.getInt("todo_list_id")), id);
  
    return todos;
  }

  @DeleteMapping("/lists/todo")
  public ResponseEntity<Void> deleteTodos(@RequestParam List<Integer> ids) {
    jdbcTemplate.update("DELETE FROM todo WHERE id IN (:ids)", ids);
    return ResponseEntity.noContent().build();
  }
  
  
  
}
