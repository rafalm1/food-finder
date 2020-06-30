import { elements } from './base';
import { limitRecipeTitle } from './searchView';

export const toggleFavoriteBtn = (isFavorite) => {
  const favoriteType = isFavorite ? '#ff5e6c' : '#fff';

  document.querySelector('.fa-heart').style.color = favoriteType;
};

export const renderFavorite = (favorite) => {
  const markup = `
        <li class="favorite-list-link" data-id="${favorite.id}">

                <div class="recipe-img-box">
                  <img class="favorite-link" src="${favorite.img}" alt="${
    favorite.title
  }" class="recipe-img" />
                  <div class="recipe-favorite-delete">
                      <i class="fas fa-times"></i>
                  </div>
                </div>
        
                <div class="favorite-data">
                    <h4 class="favorite-name">${limitRecipeTitle(
                      favorite.title
                    )}</h4>
                    <p class="favorite-author">${favorite.author}</p>
                </div>
        </li>
    `;

  elements.favoriteList.insertAdjacentHTML('beforeend', markup);
};

export const deleteFavorite = (id) => {
  const el = document.querySelector(`.favorite-list-link[data-id="${id}"]`);

  if (el) el.parentElement.removeChild(el);
};
