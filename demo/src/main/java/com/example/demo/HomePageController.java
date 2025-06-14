package com.example.demo;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class HomePageController {

    @Autowired
    private HomePageRepo homepageRepository;

    @Autowired
    private CalorieTable caloriepageRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /*@GetMapping("/caloricCompliance")
    public List<String> getCalories() {
        String sql = "SELECT idusername FROM personstats";
        return jdbcTemplate.query(
            sql,
            (rs, rowNum) -> rs.getString("idusername")
        );
    }*/

    @PostMapping("/accountregister")
    public UserAccount createUser(@RequestBody UserAccount newUser) {
        //return homepageRepository.save(newUser);
        UserAccount dummyUser = new UserAccount();
        return dummyUser;
    }

    /*@PostMapping("/loggingCalories")
    public double logCalories(@PathVariable double dailyCalories) {
        CalorieTable newDay = new CalorieTable();
        return caloriepageRepository.save(newDay);
    }*/
    

    @GetMapping("/logins")
    public ResponseEntity<Boolean> loginCheck(@RequestBody LoginRequest newLogin) {
        Optional<UserAccount> potentialUser = homepageRepository.findById(newLogin.getUsername());

        if (potentialUser.isPresent()) {
            UserAccount passwordCheck = potentialUser.get();
            if(passwordCheck.getpassWord().equals(newLogin.getPassword())){
                return ResponseEntity.ok(true);
            }else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
            }
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }

    @GetMapping("/getCaloricgoal")
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
