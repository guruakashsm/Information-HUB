const product = [
    {
        id: 0,
        image: 'images/dsp.jpg',
        title: 'Digital Signal Processing -ECE',
        author: 'John G.Proakis and Dimitris G.Manolakis',
        year: 1996,
        genre: 'Electronics',
        link: 'https://books.google.co.in/books?id=xLaST05CKlkC&printsec=frontcover&source=gbs_book_similarbooks#v=onepage&q&f=false',
        
    },
    {
        id: 1,
        image: 'images/micro.jpg',
        title: 'Microelectronic Circuits',
        author: 'Adel S. Sedra and Kenneth C. Smith',
        year: 1998,
        genre: 'Electronics',
        link: 'https://en.wikipedia.org/wiki/Microelectronics',
    },
    {
        id: 2,
        image: 'images/electronics.jpg',
        title: 'Electronic Principles',
        author: 'John G.Proakis and Dimitris G.Manolakis',
        year: 1996,
        genre: 'Electronics',
        link: 'https://en.wikipedia.org/wiki/Principles_of_Electronics',
    },
    {
        id: 3,
        image: 'images/3.jpg',
        title: 'Effective Java',
        author: 'Joshua Bloch',
        year: 2001,
        genre: 'Maths & programming',
        link: 'https://wiki.c2.com/?EffectiveJava',
    },
    {
        id: 4,
        image: 'images/4.jpg',
        title: 'Structure and Interpretation of Computer Programs',
        author: 'Harold Abelson and Gerald Jay Sussman',
        year: 1985,
        genre: 'Maths & programming',
        link: 'https://en.wikipedia.org/wiki/Structure_and_Interpretation_of_Computer_Programs',
    },
    {
        id: 5,
        image: 'images/5.jpg',
        title: 'Analog and Digital Communication',
        author: 'Sanjay Sharma',
        year: 2009,
        genre: 'Electronics',
        link: 'https://en.wikipedia.org/wiki/Data_communication',
    },
    {
        id: 6,
        image: 'images/6.jpg',
        title: 'The Stranger',
        author: 'Albert Camus',
        year: 1942,
        genre: 'Novel',
        link: 'https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)',
    },
    {
        id: 7,
        image: 'images/7.jpg',
        title: 'Linear Algebra and Its Applications',
        author: 'Gilbert Strang',
        year: 2014,
        genre: 'Maths & programming',
        link: 'https://en.wikipedia.org/wiki/Linear_Algebra_and_Its_Applications',
    },
    {
        id: 8,
        image: 'images/8.jpg',
        title: 'Complex Analysis',
        author: 'Joseph Bak and Donald J. Newman',
        year: 2010,
        genre: 'Maths & programming',
        link: 'https://en.wikipedia.org/wiki/Complex_analysis',
    },
    {
        id: 9,
        image: 'images/9.jpg',
        title: 'The Martian',
        author: 'Andy Weir',
        year: 2011,
        genre: 'Space',
        link: 'https://en.wikipedia.org/wiki/The_Martian_(Weir_novel)',
    },
    {
        id: 10,
        image: 'images/10.jpg',
        title: 'The High Frontier: Human Colonies in Space',
        author: 'Gerard K. O Neill',
        year: 1976,
        genre: 'Space',
        link: 'https://en.wikipedia.org/wiki/The_High_Frontier:_Human_Colonies_in_Space',
    },
    {
        id: 11,
        image: 'images/11.jpg',
        title: 'Probability and Random Processes',
        author: 'Geoffrey Grimmett and David Stirzaker',
        year: 2001,
        genre: 'Maths & programming',
        link: 'https://en.wikipedia.org/wiki/Stochastic_process',
    },
    {
        id: 12,
        image: 'images/12.jpg',
        title: 'The Search for Life on Mars',
        author: 'Malcolm Walter',
        year: 2002,
        genre: 'Space',
        link: 'https://en.wikipedia.org/wiki/Life_on_Mars',
    },
    {
        id: 13,
        image: 'images/13.jpg',
        title: 'Field and Wave Electromagnetics',
        author: 'David K. Cheng',
        year: 1989,
        genre: 'Electronics',
        link: 'https://en.wikipedia.org/wiki/Electromagnetic_field',
    },
    {
        id: 14,
        image: 'images/14.jpg',
        title: 'The Overview Effect: Space Exploration and Human Evolution',
        author: 'Frank White ',
        year: 2014,
        genre: 'Space',
        link: 'https://en.wikipedia.org/wiki/Overview_effect',
    },
    {
      id: 15,
      image: 'images/15.jpg',
      title: 'Harry Potter and the Sorcerer Stone',
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Harry Potter',
      link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Philosopher%27s_Stone',
  },
  {
    id: 16,
    image: 'images/16.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 1998,
    genre: 'Harry Potter',
    link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Chamber_of_Secrets',
},
{
  id: 17,
  image: 'images/17.jpg',
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'J.K. Rowling',
  year: 1999,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Prisoner_of_Azkaban',
},
{
  id: 18,
  image: 'images/18.jpg',
  title: 'Harry Potter and the Goblet of Fire',
  author: 'J.K. Rowling',
  year: 2000,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Goblet_of_Fire',
},
{
  id: 19,
  image: 'images/19.jpg',
  title: 'Harry Potter and the Order of the Phoenix',
  author: 'J.K. Rowling',
  year: 2003,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Order_of_the_Phoenix',
},
{
  id: 20,
  image: 'images/20.jpg',
  title: 'Harry Potter and the Half-Blood Prince',
  author: 'J.K. Rowling',
  year: 2005,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Half-Blood_Prince',
},
{
  id: 21,
  image: 'images/21.jpg',
  title: 'Harry Potter and the Deathly Hallows',
  author: 'J.K. Rowling',
  year: 2007,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Deathly_Hallows',
},
{
  id: 22,
  image: 'images/22.jpg',
  title: 'Harry Potter and the Cursed Child',
  author: 'J.K. Rowling',
  year: 2016,
  genre: 'Harry Potter',
  link:'https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Deathly_Hallows',
},
{
  id: 23,
  image: 'images/23.jpg',
  title: 'The Pragmatic Programmer: From Journeyman to Master',
  author: 'Andrew Hunt',
  year: 1999,
  genre: 'Novel',
  link:'https://en.wikipedia.org/wiki/The_Pragmatic_Programmer',
},
{
  id: 24,
  image: 'images/24.jpg',
  title: 'The Heart Invisible Furies',
  author: 'John Boyn7',
  year: 2016,
  genre: 'Novel',
  link: 'https://en.wikipedia.org/wiki/The_Heart%27s_Invisible_Furies',
},
{
  id: 25,
  image: 'images/25.jpg',
  title: 'The Midnight Library',
  author: 'Matt Haig',
  year: 2020,
  genre: 'Novel',
  link: 'https://en.wikipedia.org/wiki/The_Midnight_Library',
},
{
  id: 26,
  image: 'images/26.jpg',
  title: 'The Water Dancer',
  author: 'Ta-Nehisi Coates',
  year: 2019,
  genre: 'Novel',
  link:'https://en.wikipedia.org/wiki/The_Water_Dancer',
},
{
  id: 27,
  image: 'images/27.jpg',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  year: 2018,
  genre: 'Novel',
  link: 'https://en.wikipedia.org/wiki/Where_the_Crawdads_Sing',
},
{
  id: 28,
  image: 'images/28.jpg',
  title: 'A Little Life',
  author: 'Hanya Yanagihara',
  year: 2015,
  link: 'https://en.wikipedia.org/wiki/A_Little_Life',
},
{
  id: 29,
  image: 'images/29.jpg',
  title: 'The Testaments',
  author: 'Margaret Atwood',
  year: 2019,
  link: 'https://en.wikipedia.org/wiki/The_Testaments',
},
{
  id: 30,
  image: 'images/30.jpg',
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  year: 2019,
  link: 'https://en.wikipedia.org/wiki/The_Silent_Patient',
},
{
  id: 31,
  image: 'images/31.jpg',
  title: 'An American Marriage',
  author: 'Tayari Jones',
  year: 2018,
  link: 'https://en.wikipedia.org/wiki/An_American_Marriage',
},
{
  id: 32,
  image: 'images/32.jpg',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
  year: 2010,
  link: 'https://en.wikipedia.org/wiki/The_Hunger_Games',
},
{
  id: 33,
  image: 'images/33.jpg',
  title: 'The Nightingale',
  author: 'Kristin Hannah',
  year: 2015,
  link: 'https://en.wikipedia.org/wiki/The_Nightingale_(2018_film)',
},
{
  id: 34,
  image: 'images/34.jpg',
  title: 'The Vanishing Half',
  author: 'Brit Bennett',
  year: 2020,
  link:'https://en.wikipedia.org/wiki/The_Vanishing_Half',
},
{
  id: 35,
  image: 'images/35.jpg',
  title: 'Crime and Punishment',
  author: 'Fyodor Dostoevsky',
  year: 1866,
  link: 'https://en.wikipedia.org/wiki/Crime_and_Punishment',
},
{
  id: 36,
  image: 'images/36.jpg',
  title: 'The Color Purple',
  author: 'Alice Walker',
  year: 1982,
  link: 'https://en.wikipedia.org/wiki/The_Color_Purple',
},
{
  id: 37,
  image: 'images/37.jpg',
  title: 'The Picture of Dorian Gray',
  author: 'Oscar Wilde',
  year: 2016,
  link: 'https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray',
},
{
  id: 38,
  image: 'images/38.jpg',
  title: 'Jane Eyre',
  author: 'Charlotte Bronte',
  year: 1847,
  link: 'https://en.wikipedia.org/wiki/Jane_Eyre',
},
{
  id: 39,
  image: 'images/39.jpg',
  title: 'Animal Farm',
  author: 'George Orwell',
  year: 1945,
  link: 'https://en.wikipedia.org/wiki/Animal_Farm',
},
{
  id: 40,
  image: 'images/40.jpg',
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  link: 'https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird',
},
{
  id: 41,
  image: 'images/41.jpg',
  title: 'Code Complete: A Practical Handbook of Software Construction',
  author: 'Steve McConnell',
  year: 1993,
  link: 'https://en.wikipedia.org/wiki/Code_Complete',
},
];

const PAGE_SIZE = 10;
let currentPage = 1;
let filteredData = [];

const categories = [...new Set(product.map((item) => { return item }))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  filteredData = product.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

document.getElementById('filterYear').addEventListener('change', (e) => {
  const year = parseInt(e.target.value);
  const author = document.getElementById('filterAuthor').value;
  const genre = document.getElementById('filterGenre').value;

  filteredData = product.filter((item) => {
    return (
      (year ? item.year === year : true) &&
      (author ? item.author.toLowerCase().includes(author.toLowerCase()) : true) &&
      (genre ? item.genre === genre : true)
    );
  });

  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

document.getElementById('filterAuthor').addEventListener('change', (e) => {
  const author = e.target.value;
  const year = parseInt(document.getElementById('filterYear').value);
  const genre = document.getElementById('filterGenre').value;

  filteredData = product.filter((item) => {
    return (
      (year ? item.year === year : true) &&
      (author ? item.author.toLowerCase().includes(author.toLowerCase()) : true) &&
      (genre ? item.genre === genre : true)
    );
  });

  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});

document.getElementById('filterGenre').addEventListener('change', (e) => {
  const genre = e.target.value;
  const year = parseInt(document.getElementById('filterYear').value);
  const author = document.getElementById('filterAuthor').value;

  filteredData = product.filter((item) => {
    return (
      (year ? item.year === year : true) &&
      (author ? item.author.toLowerCase().includes(author.toLowerCase()) : true) &&
      (genre ? item.genre === genre : true)
    );
  });

  currentPage = 1;
  displayItem(getItemsForPage(currentPage));
});


const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    var { image, title, author, year, link } = item;
    return (
      `<div class='ResultBox'>
        <div class='box'>
          <div class='img-box'>
            <img class='images' src=${image}></img>
           
          
            <div class='bottom'>
            <h2>${title}</h2>
            <a target="_blank" href='${link}'><img class='book-icon' src='images/view.png' alt='Open Book'></a>
            <p>${author} - ${year}</p>
        </div>
        
        </div>
       
      </div>
      </div>`
    )
  }).join('');

  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  if (totalPages > 1) {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.addEventListener('click', () => {
        currentPage = i;
        displayItem(getItemsForPage(currentPage));
      });
      pagination.appendChild(button);
    }
    document.getElementById('root').appendChild(pagination);
  }
};

const getItemsForPage = (page) => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  return filteredData.slice(startIndex, endIndex);
};

filteredData = product;
displayItem(getItemsForPage(currentPage));
