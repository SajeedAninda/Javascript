// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myFavMovie = {
  title: 'Puff the Magic Dragon',
  duration: 30,
  stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
  console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
  var starsString = 'Stars: ';
  for (var i = 0; i < movie.stars.length; i++) {
      starsString += movie.stars[i];
      if (i != movie.stars.length -1) {
          starsString += ', ';
      }
  }
  console.log(starsString);
}
function printMovie(movie) {
  console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
  console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);