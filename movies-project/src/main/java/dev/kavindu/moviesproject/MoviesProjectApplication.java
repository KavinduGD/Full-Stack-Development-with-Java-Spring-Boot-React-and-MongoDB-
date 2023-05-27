package dev.kavindu.moviesproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesProjectApplication.class, args);
	}


	@GetMapping("/")
	public String apiRoot(){
		return "kavindu";
	}
}
