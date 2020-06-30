import { elements } from './base';
import fracty from 'fracty';
import { toggleFavoriteBtn } from './favoriteView';

export const clearRecipe = () => {
  elements.recipe.innerHTML = '';
};

const formatCount = (count) => {
  if (count) {
    return `${fracty(count)}`;
  }
  return '?';
};

const createIngredient = (ingredient) => `
    <li class="recipe-item">
        <i class="far fa-check-circle"></i>
        <div class="recipe-count">${formatCount(ingredient.count)}</div>
        <div class="igredient-unit">${ingredient.unit} ${ingredient.ingredient}
        </div>
    </li>
`;

export const renderRecipe = (recipe, isFavorite) => {
  const markup = `
    <div class="recipe-details">
          <div class="recipe-close">
            <i class="far fa-times-circle"></i>
          </div>
          <figure class="recipe-fig">

                <div class="recipe-img-box">
                    <img src="${recipe.img}" alt="${
    recipe.title
  }" class="recipe-img" />
                    <div class="recipe-favorite">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
           
            <h1 class="recipe-title">
              <span>${recipe.title}</span>
            </h1>
          </figure>

          <div class="recipe-info">
            <div class="recipe-time">
              <i class="fas fa-clock"></i>
              <span class="recipe-time-info">${recipe.time}</span>
              <span class="recipe-time-text">minutes</span>
            </div>
            <div class="recipe-servings">
              <i class="fas fa-male"></i>
              <span class="recipe-servings-info">${recipe.servings}</span>
              <span class="recipe-servings-text">servings</span>
            </div>
          </div>

          <div class="recipe-ingredients">
            <ul class="ingredient-list">
              ${recipe.ingredients.map((el) => createIngredient(el)).join('')}
            </ul>
          </div>
    </div>
  `;

  elements.recipe.insertAdjacentHTML('afterbegin', markup);
  toggleFavoriteBtn(isFavorite);
  document.body.style.overflow = 'hidden';
};
