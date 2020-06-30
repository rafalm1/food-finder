export default class Favorite {
  constructor() {
    this.favorites = [];
  }

  addFavorite(id, title, author, img) {
    const favorite = { id, title, author, img };
    this.favorites.push(favorite);

    // Persist data in local storage
    this.persistData();

    return favorite;
  }

  deleteFavorite(id) {
    const index = this.favorites.findIndex((el) => el.id === id);
    this.favorites.splice(index, 1);

    // Persist data in local storage
    this.persistData();
  }

  isFavorite(id) {
    return this.favorites.findIndex((el) => el.id === id) !== -1;
  }

  getNumFavorites() {
    return this.favorites.length;
  }

  persistData() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('favorites'));

    // Restoring favorites from the localStorage
    if (storage) this.favorites = storage;
  }
}
