package com.akramn.recipeapp.controller;

import com.akramn.recipeapp.service.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<String> getRecipesByIngredients(@RequestParam String ingredients) {
        return ResponseEntity.ok(recipeService.getRecipesByIngredients(ingredients));
    }

    @GetMapping("/{id}/information")
    public ResponseEntity<String> getRecipeById(
            @PathVariable int id) {
        return ResponseEntity.ok(recipeService.getRecipeById(id));
    }
}
