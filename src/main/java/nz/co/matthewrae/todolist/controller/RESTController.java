package nz.co.matthewrae.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.Map;


@RestController
public class RESTController {
  JdbcTemplate jdbcTemplate;
  
  public RESTController(@Autowired JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @GetMapping("/lists")
  public String getAllLists() {
    List<Map<String, Object>> results = jdbcTemplate.queryForList("SELECT * FROM todo_list");
    System.out.println(results);
    return new String();
  }
  
}
