package com.akramn.recipeapp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RecipeService {

    @Value("${spoonacular.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String getRecipesByIngredients(String ingredients) {
        String url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
                + ingredients + "&number=20&apiKey=" + apiKey;
        return restTemplate.getForObject(url, String.class);
    }
    public String getRecipeById(int id) {
        String url = "https://api.spoonacular.com/recipes/"
                + id + "/information?includeNutrition=false&apiKey=" + apiKey;
        return restTemplate.getForObject(url, String.class);
    }
}
