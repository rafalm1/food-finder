import { state } from '../index';
import Favorite from '../models/Favorite';
import * as favoriteView from '../views/favoriteView';
import { elements } from '../views/base';
import { hideMenu } from '../listeners/eventListeners';
import { controlRecipe } from './recipeController';

const controlFavorite = () => {
  if (!state.favorites) state.favorites = new Favorite();
  const currentID = state.recipe.id;

  // User has NOT yet add recipe to favorite list
  if (!state.favorites.isFavorite(currentID)) {
    // Add favorite to the state
    const newFavorite = state.favorites.addFavorite(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    // Toggle the favorite button
    favoriteView.toggleFavoriteBtn(true);

    // Add favorite to the UI list
    favoriteView.renderFavorite(newFavorite);

    // User has added recipe to favorite list
  } else {
    // Remove favorite to the state
    state.favorites.deleteFavorite(currentID);

    // Toggle the favorite button
    favoriteView.toggleFavoriteBtn(false);

    // Remove favorite to the UI list
    favoriteView.deleteFavorite(currentID);
  }
};

elements.favoriteLink.addEventListener('click', () => {
  elements.favorite.classList.add('active');
  document.body.style.overflow = 'hidden'; //???
});

elements.favoriteList.addEventListener('click', (e) => {
  const itemID = e.target.closest('.favorite-list-link').dataset.id;

  if (e.target.matches('.recipe-favorite-delete, .recipe-favorite-delete *')) {
    // Remove like to the state
    state.favorites.deleteFavorite(itemID);
    // Remove like to the UI list
    favoriteView.deleteFavorite(itemID);
  } else if (e.target.matches('.favorite-name')) {
    hideMenu();
    controlRecipe(itemID);
  }
});

// Handling recipe buttons clicks
elements.recipe.addEventListener('click', (e) => {
  if (e.target.matches('.recipe-favorite, .recipe-favorite *')) {
    // Like controller
    controlFavorite();
  }
});

// Restore favorite recipes on page load
window.addEventListener('load', () => {
  state.favorites = new Favorite();
  // Restore likes
  state.favorites.readStorage();
  // Render the existing likes
  state.favorites.favorites.forEach((favorite) =>
    favoriteView.renderFavorite(favorite)
  );
});
