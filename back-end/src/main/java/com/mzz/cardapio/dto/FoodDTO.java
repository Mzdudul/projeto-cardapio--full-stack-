package com.mzz.cardapio.dto;

import com.mzz.cardapio.model.Food;

public record FoodDTO(Long id, String title, String img, Double price) {
    public FoodDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImg(), food.getPrice());
    }
}
