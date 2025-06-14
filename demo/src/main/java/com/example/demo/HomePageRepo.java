package com.example.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface HomePageRepo extends JpaRepository<UserAccount, String>{
    /*
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<String> getCaloricComplianceValues() {
        String sql = "SELECT caloricComplience FROM caloriecounter";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("caloricComplience")
        );
    }

    public List<String> createUsername() {
        String sql = "SELECT Username FROM homepage";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("Username")
        );
    }

    public List<String> createPassword() {
        String sql = "SELECT Username FROM homepage";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("Password")
        );
    }
    
    @PostMapping("/weight")
    public List<String> createweight() {
        String sql = "SELECT Username FROM homepage";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("Username")
        );
    } */
}