import { state } from '../index';
import Recipe from '../models/Recipe';
import * as recipeView from '../views/recipeView';
import { elements, clearLoader } from '../views/base';

export const controlRecipe = async (id) => {
  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.favorites.isFavorite(id));
    } catch (err) {
      console.log(err);
      alert('Error processing recipe!');
    }
  }
};

// Close Recipe Modal
elements.recipe.addEventListener('click', (e) => {
  if (e.target.matches('.recipe-close, .recipe-close *')) {
    document.querySelector('.recipe-details').remove();
    document.body.style.overflow = 'auto';
  }
});
