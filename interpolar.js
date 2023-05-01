
const app = document.getElementById("app");
const games = [
    {
        name: "Super Mario Bross",
        year: 1995,
        genre: "Platform",
        stock : 0,
    },
    {
        name: "The legend of Zelda",
        year: 1996,
        genre: "Adventure",
        stock: 5,
    },
    {
        name:"Tetris",
        year: 1994,
        genre:"Puzzle",
        stock: 15,
    },
]

const [gameOne, gameTwo, gameThree] = games;

const btnClass = (st) => (st > 0 ? "btn-primary" : "btn-danger disabled");


function Card ({name, year, genre, stock=0}) {
    return  `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()}</h5>
      <p class="card-text">${year} - ${genre}</p>
      <a href="#" class="btn ${btnClass (stock)}">Go somewhere</a>
    </div>
  </div>`;

}

app.innerHTML = Card (gameOne);
app.innerHTML += Card (gameTwo);
app.innerHTML += Card (gameThree);




