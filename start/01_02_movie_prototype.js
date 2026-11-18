// Write your code here
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title
    this.director = director
    this.genre = genre
    this.releaseYear = releaseYear
    this.rating = rating
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const spiderman = new Movie("Spiderman", "Sam Ciccio", "Action", 2002, 87);
const battimani = new Movie("Battimani", "Sam Ciccio", "Action", 2005, 90);

console.log(spiderman);
console.log(spiderman.getOverview());
console.log(battimani);
console.log(battimani.getOverview());