-- 1. Find a recipe by ID (e.g., ID 5)
SELECT * FROM recipes WHERE id = 5;

-- 2. Find recipes by exact title
SELECT * FROM recipes WHERE title = 'Pizza';

-- 3. Find recipes that contain a word in the title (e.g., "chicken")
-- % is a wildcard matching any characters before or after
SELECT * FROM recipes WHERE title LIKE '%chicken%';

-- 4. Find recipes by publisher
SELECT * FROM recipes WHERE publisher = 'All Recipes';

-- 5. Find recipes with cooking time less than 30 minutes
SELECT * FROM recipes WHERE cooking_time < 30;

-- 6. Find recipes with a specific number of servings (e.g., 4)
SELECT * FROM recipes WHERE servings = 4;

-- 7. Find the most recently added recipes (Top 10)
SELECT * FROM recipes ORDER BY id DESC LIMIT 10;

-- 8. Find recipes that have "chocolate" in the ingredients
-- Note: Since ingredients are stored as JSON string, we use LIKE
SELECT * FROM recipes WHERE ingredients LIKE '%chocolate%';

-- 9. Count how many recipes are in the database
SELECT COUNT(*) FROM recipes;

-- 10. Find recipes from a specific source URL
SELECT * FROM recipes WHERE source_url = 'http://example.com/recipe';
