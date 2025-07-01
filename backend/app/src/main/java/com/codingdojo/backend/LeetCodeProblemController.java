package com.codingdojo.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

@RestController
public class LeetCodeProblemController {
    @GetMapping("/problems")
    public List<Map<String, Object>> getProblems() {
        return List.of(
            Map.of("id", 1, "name", "Two Sum"),
            Map.of("id", 2, "name", "Add Two Numbers"),
            Map.of("id", 3, "name", "Longest Substring Without Repeating Characters"),
            Map.of("id", 4, "name", "Median of Two Sorted Arrays"),
            Map.of("id", 5, "name", "Longest Palindromic Substring")
            // Add more problems as needed
        );
    }
} 