export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search-field'),
  searchResList: document.querySelector('.results-list'),
  searchRes: document.querySelector('.results'),
  searchResPages: document.querySelector('.results-pages'),
  recipe: document.querySelector('.recipe'),
  recipeDetails: document.querySelector('.recipe-details'),
  favoriteLink: document.querySelector('.favorite-link'),
  favoriteList: document.querySelector('.favorite-list'),
  favorite: document.querySelector('.favorite'),
  favoriteDelete: document.querySelector('.recipe-favorite-delete'),
  heartIcon: document.querySelector('.fa-heart'),
};

export const elementsStrings = {
  loader: 'loader',
};

export const renderLoader = (parent) => {
  const loader = `
    <div class="${elementsStrings.loader}">
        <i class="fas fa-spinner"></i>
    </div>
    `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementsStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
