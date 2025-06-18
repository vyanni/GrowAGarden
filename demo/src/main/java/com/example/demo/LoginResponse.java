package com.example.demo;

public class LoginResponse 
{
    private String gender;
    private double weight;
    private double height;
    private double calorieGoal;

    public LoginResponse(String gender, double weight, double height, double calorieGoal) 
    {
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.calorieGoal = calorieGoal;
    }
    // Getter and setter for gender
    public String getGender() 
    {
        return gender;
    }
    public void setGender(String gender) 
    {
        this.gender = gender;
    }

    // Getter and setter for weight
    public double getWeight() 
    {
        return weight;
    }
    public void setWeight(double weight) 
    {
        this.weight = weight;
    }

    // Getter and setter for height
    public double getHeight() 
    {
        return height;
    }
    public void setHeight(double height) 
    {
        this.height = height;
    }

    // Getter and setter for calorieGoal
    public double getCalorieGoal() 
    {
        return calorieGoal;
    }
    public void setCalorieGoal(double calorieGoal) 
    {
        this.calorieGoal = calorieGoal;
    }
}
