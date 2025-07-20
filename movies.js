// Define the Movie class
class Movie {
  // title, cast, description, rating
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const movieInfoDiv = document.getElementById("movie-info");
    movieInfoDiv.innerHTML +=
      "<h3>Title: " + this.#title + "</h3>" +
      "<p><strong>Cast:</strong> " + this.#cast.join(", ") + "</p>" +
      "<p><strong>Description:</strong> " + this.#description + "</p>" +
      "<p><strong>Rating:</strong> " + this.#rating + "</p>" +
      "<hr>";
  }

  getTitle() {
    return this.#title;
  }
}

// Test your implementation
const movie1 = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
  9.3
);

const movies = [];
movies.push(movie1);

// Display the initial information of the movie
movie1.displayInfo();

// Update the rating of the movie
function updateMovieRating(title, newRating) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].getTitle() === title) {
      movies[i].updateRating(newRating);

      // Display the updated information of the movie
      movies[i].displayInfo();
      break;
    }
  }
}

// Call the function to update rating
updateMovieRating("The Shawshank Redemption", 9.5);
