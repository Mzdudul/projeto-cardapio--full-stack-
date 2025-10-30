package com.mzz.cardapio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mzz.cardapio.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
    
}
