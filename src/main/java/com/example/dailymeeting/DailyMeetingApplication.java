
package com.example.dailymeeting;

import com.example.dailymeeting.model.AppUser;
import com.example.dailymeeting.service.StartMeeting;
import org.aspectj.weaver.ast.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@EnableSwagger2
@SpringBootApplication
public class DailyMeetingApplication {

    public static void main(String[] args) {
        SpringApplication.run(DailyMeetingApplication.class, args);
    }
}
