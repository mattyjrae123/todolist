package nz.co.matthewrae.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class RESTController {
  JdbcTemplate jdbcTemplate;
  
  public RESTController(@Autowired JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @GetMapping("/lists")
  public String getAllLists() {
    
    return new String();
  }
  
}
