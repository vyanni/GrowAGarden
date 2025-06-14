package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner{

	@Autowired
    //private HomePageRepo homepageRepository;
	private HomePageController homePageController;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) {
        System.out.println("---- idUsername column values ----");
        //++++homePageController.getCalories().forEach(System.out::println);
    }

}