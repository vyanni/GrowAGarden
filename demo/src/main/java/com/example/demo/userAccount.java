package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personstats")
public class UserAccount {

    @Id
    private String idusername; 

    private String password;
    private String gender;
    private double height;
    private double weight;
    private double caloriegoal;
    private double idstatsbyday; // moved to normal field

    public UserAccount() {}

    public void setidStatsByDay(double newidstatsbyday) {
        idstatsbyday = newidstatsbyday;
    }

    public void setcaloriegoal(double newCaloriegoal) {
        caloriegoal = newCaloriegoal;
    }

    public void setWeight(double newWeight) {
        weight = newWeight;
    }

    public void setheight(double newHeight) {
        height = newHeight;
    }

    public void setgender(String newGender) {
        gender = newGender;
    }

    public void setuserName(String newUsername) {
        idusername = newUsername;
    }

    public void setpassWord(String newPassword) {
        password = newPassword;
    }

    public double getidstatsbyday() {
        return idstatsbyday;
    }

    public String getuserName() {
        return idusername;
    }

    public String getpassWord() {
        return password;
    }

    public String getgender() {
        return gender;
    }

    public double getHeight() {
        return height;
    }

    public double getWeight() {
        return weight;
    }

    public double getCaloriegoal() {
        return caloriegoal;
    }
}