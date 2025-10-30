package com.mzz.cardapio.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mzz.cardapio.dto.FoodDTO;
import com.mzz.cardapio.model.Food;
import com.mzz.cardapio.repository.FoodRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/foods")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<FoodDTO>> listFoods() {
        List<FoodDTO> foods = foodRepository.findAll()
                .stream()
                .map(food -> new FoodDTO(
                        food.getId(),
                        food.getTitle(),
                        food.getImg(),
                        food.getPrice()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(foods);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping()
    public ResponseEntity<?> createFood(@RequestBody Food food) {
        Food savedFood = foodRepository.save(food);
        return ResponseEntity.status(201).body(savedFood);

    }


}