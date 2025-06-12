package com.example.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
public class HomePageRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/caloricCompliance")
    public List<String> getCaloricComplianceValues() {
        String sql = "SELECT caloricComplience FROM homepage";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("caloricComplience")
        );
    }

    @PostMapping("/Username")
    public void createUsername() {
        String sql = "SELECT Username FROM homepage";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("Username")
        );
    }
}