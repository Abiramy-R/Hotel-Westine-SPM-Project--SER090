package com.Westine.HotelWestine.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Westine.HotelWestine.model.FoodItem;


public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

	@Query("Select p from FoodItem p where p.foodItemName like %?1%"
            + " or p.description like %?1%")
    public List<FoodItem> findAll(String searchKey);
}
