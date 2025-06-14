package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personstats")
public class CalorieTable{

    @Id
    private double idstatsbyday;
    private String idusername;
    private double daynum;
    private double caloriecount;

    public CalorieTable(){}

    //sets the data to something 
    public void setidUserName(String UserName)
    {
        idusername = UserName;
    }
    public void dayCount(double Day)
    {
        daynum = Day;
    }
    public void setCalorieCount(double calories)
    {
        caloriecount = calories;
    }
    
    //returns the requested data
    public String getidUserName()
    {
        return idusername;
    }
    public double getdayCount()
    {
        return daynum;
    }
    public double getCalorieCount()
    {
        return caloriecount;
    }
}