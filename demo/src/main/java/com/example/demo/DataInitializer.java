/*package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private HomePageRepo homepageRepository;

    @Override
    public void run(String... args) throws Exception {
        // Check if user already exists, so you don't create duplicates every run
       if (homepageRepository.findById("testuser").isEmpty()) 
       {
            UserAccount testUser = new UserAccount();
            testUser.setuserName("testuser"); // this is now the ID
            testUser.setpassWord("testpassword");
            testUser.setgender("Male");
            testUser.setWeight(70.0);
            testUser.setheight(175.0);
            testUser.setcaloriegoal(2500.0);
            testUser.setidStatsByDay(99); // optional extra field now
            homepageRepository.save(testUser);
            System.out.println("Test user created!");
        } 
        else 
        {
            System.out.println("Test user already exists.");
        }
    }
}
*/