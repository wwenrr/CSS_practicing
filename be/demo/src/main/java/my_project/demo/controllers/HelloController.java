package my_project.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {
    @RequestMapping("/")
    public String home() {
        return "hello";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }
}

