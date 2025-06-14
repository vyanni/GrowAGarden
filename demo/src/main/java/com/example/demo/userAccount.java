package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personstats")
public class UserAccount{

    @Id
    private String idusername;
    private String password;
    private boolean gender;
    private double height;
    private double weight;
    private double caloriegoal;

    public UserAccount(){}

    public void setcaloriegoal(double newCaloriegoal){
        caloriegoal = newCaloriegoal;
    }

    public void setWeight(double newWeight){
        weight = newWeight;
    }

    public void setheight(double newHeight){
        height = newHeight;
    }

    public void setgender(boolean newGender){
        gender = newGender;
    }

    public void setuserName(String newUsername){
        idusername = newUsername;
    }

    public void setpassWord(String newPassword){
        password = newPassword;
    }

    public String getuserName(){
        return idusername;
    }

    public String getpassWord(){
        return password;
    }

    public boolean getgender(){
        return gender;
    }

    public double getHeight(){
        return height;
    }

    public double getWeight(){
        return weight;
    }

    public double getCaloriegoal(){
        return caloriegoal;
    }
}