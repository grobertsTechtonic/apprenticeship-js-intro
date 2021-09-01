// 1.  We have a function that takes numbers as args, but we have an array of numbers.  We will need to use spread syntax to handle this.
const add = (x, y, z) => {
  return x + y + z;
}

const nums = [10, 15, 12];
add(...nums);

// 2. We need to add the nums array to a pre-existing array.
const starterNums = [2,3];
const solution = [...starterNums, ...nums];

// 3. Write a function that flattens the following arrays into a single array.  DO NOT USE ARRAY.FLAT!!
const arrays = [[3, 2, 1], 4, 5, [1, 2, 3]];

const flatten = arr => {
  const nums = [];
  arrays.forEach(ele => {
    if (Array.isArray(ele)) {
      nums.push(...ele);
    } else {
      nums.push(ele);
    }
  });

  return nums;
};

// 4. A queue of users is waiting in line for something.  We need to access the first and fourth in line using destructuring.  Use the `queue` array.
let queue = ['user2415', 'user9862', 'user3240', 'user9762'];
const [first,,, fourth] = queue; 

/*
  5. Imagine that we are receiving the above Goonies object as an api response but only need to access title, genre, and the director fields.

  We could access these like so:
  const title = theGoonies.title;
  const genre = theGoonies.genre;
  const director = theGoonies.director;

  but that would take quite a while, especially if we had to pull lots of values from this object.  Let's assign these variables using destructuring instead.
*/

const theGoonies = {
  Title: 'The Goonies',
  Year: '1985',
  Rated: 'PG',
  Released: '07 Jun 1985',
  Runtime: '114 min',
  Genre: 'Adventure, Comedy, Family',
  Director: 'Richard Donner',
  Writer: 'Chris Columbus (screenplay by), Steven Spielberg (story by)',
  Actors: 'Sean Astin, Josh Brolin, Jeff Cohen, Corey Feldman',
  Plot:
    "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
  Language: 'English, Spanish, Cantonese, Italian',
  Country: 'USA',
  Awards: '3 wins & 6 nominations.',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.8/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '76%',
    },
    {
      Source: 'Metacritic',
      Value: '62/100',
    },
  ],
  Metascore: '62',
  imdbRating: '7.8',
  imdbVotes: '238,510',
  imdbID: 'tt0089218',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'Warner Brothers, Amblin Entertainment',
  Website: 'N/A',
  Response: 'True',
};

const { Title, Director, Genre } = theGoonies;

// 6. We can drill down into the object as well.  Let's destructure the Ratings array.
const [ imdb ,rottenTomatoes, metaCritic ] = theGoonies.Ratings;


/*
  7.  We're not strictly limited to the key names that our api response returned.  We can rename them on the fly as we destructure them.

  Example:
    const { Plot: gooniesPlot } = theGoonies;

  Let's destructure the ratings array again, but assign ratings.value with a variable named after ratings.source .
*/

const [{ Value: imdbRating }, { Value: rottenTomatoesRating }, { Value: metacriticRating }] = theGoonies.Ratings;