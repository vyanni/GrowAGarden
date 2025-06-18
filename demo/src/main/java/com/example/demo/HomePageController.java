package com.example.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;
import java.time.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class HomePageController {

    @Autowired
    private HomePageRepo homepageRepository;

    @Autowired
    private CalorieRepo caloriepageRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public List<String> getCalories() {
        String sql = "SELECT idusername FROM personstats";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("idusername")
        );
    }

    @PostMapping("/api/register")
    public ResponseEntity<String> register(@RequestBody UserAccount user) {
        if (UserAccount.existsById(user.getIdusername())) 
        {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already taken");
        }
        userAccountRepo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Registered successfully");
    }

    @PostMapping("/loggingCalories")
    public double logCalories(@RequestBody LogCalories newLog) {
        CalorieTable newDay = new CalorieTable();
        newDay.setCalorieCount(newLog.getCalories());
        newDay.setidUserName(newLog.getIdusername());
        Instant instant = Instant.now();
        newDay.setdayCount(instant.getEpochSecond());

        return caloriepageRepository.save(newDay).getCalorieCount();
    }
    
    @PostMapping("/logins")
    public ResponseEntity<?> loginCheck(@RequestBody LoginRequest newLogin) {
        Optional<UserAccount> potentialUser = homepageRepository.findById(newLogin.getUsername());

        if (potentialUser.isPresent()) {
            UserAccount user = potentialUser.get();
            if (user.getpassWord().equals(newLogin.getPassword())) 
            {
                // Create a DTO with only the safe user info you want to return
                LoginResponse response = new LoginResponse
                (
                    user.getgender(),
                    user.getWeight(),
                    user.getHeight(),
                    user.getCaloriegoal()
                );
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/getCaloricgoal/{loginUsername}")
    public double getCaloricgoal(@PathVariable String loginUsername)
    {
        UserAccount loggedUser = homepageRepository.findById(loginUsername).get();
        return loggedUser.getCaloriegoal();
    }
    
    @GetMapping("/getDayNum")
    public double getDayNum (@PathVariable double Day)
    {
        double dummy = 1;
        return dummy;
    }
}
