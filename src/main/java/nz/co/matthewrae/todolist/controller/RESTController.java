package nz.co.matthewrae.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;

import nz.co.matthewrae.todolist.domain.TodoList;

import org.springframework.web.bind.annotation.GetMapping;


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

    todoLists.forEach(list -> System.out.println(list));
    return todoLists;
  }
  
}
