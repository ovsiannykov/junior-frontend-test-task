let catalog = [
  {
    name: "ITALIAN",
    sum: 327,
    img: "url(../img/italian.png)",
  },
  {
    name: "INDIAN",
    sum: 856,
    img: "url(../img/indian.png)",
  },
  {
    name: "FRENCH",
    sum: 27,
    img: "url(../img/french.png)",
  },
  {
    name: "STEAKHOUSE",
    sum: 174,
    img: "url(../img/steakhouse.png)",
  },
  {
    name: "SEAFOOD",
    sum: 131,
    img: "url(../img/seafood.png)",
  },
  {
    name: "SUSHI",
    sum: 237,
    img: "url(../img/sushi.png)",
  },
  {
    name: "MEXICAN",
    sum: 529,
    img: "url(../img/mexican.png)",
  },
  {
    name: "CHINESE",
    sum: 145,
    img: "url(../img/chinese.png)",
  },
  {
    name: "PIZZA",
    sum: 327,
    img: "url(../img/pizza.png)",
  },
  {
    name: "AMERICAN",
    sum: 1437,
    img: "url(../img/american.png)",
  },
];

const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");

function sortPlus() {
  const container = document.getElementById("recept-container");
  container.innerHTML = "";
  catalog.sort(function (a, b) {
    return a.sum - b.sum;
  });

  for (let i = 0; i <= catalog.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "recept-block");
    div.style.backgroundImage = catalog[i].img;

    let name = document.createElement("div");
    name.setAttribute("class", "recept-name");
    name.innerHTML = catalog[i].name;

    let sum = document.createElement("div");
    sum.setAttribute("class", "resept-sum");
    sum.innerHTML = catalog[i].sum + " Recipes";

    div.appendChild(sum);
    div.appendChild(name);
    container.appendChild(div);
  }
}

function sortMinus() {
  const container = document.getElementById("recept-container");
  container.innerHTML = "";
  catalog.sort(function (a, b) {
    return b.sum - a.sum;
  });

  for (let i = 0; i <= catalog.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "recept-block");
    div.style.backgroundImage = catalog[i].img;

    let name = document.createElement("div");
    name.setAttribute("class", "recept-name");
    name.innerHTML = catalog[i].name;

    let sum = document.createElement("div");
    sum.setAttribute("class", "resept-sum");
    sum.innerHTML = catalog[i].sum + " Recipes";

    div.appendChild(sum);
    div.appendChild(name);
    container.appendChild(div);
  }
}

btnPlus.addEventListener("click", function (e) {
  e.preventDefault();
  sortPlus();
});

btnMinus.addEventListener("click", function (e) {
  e.preventDefault();
  sortMinus();
});

function standrtSort() {
  const container = document.getElementById("recept-container");

  for (let i = 0; i <= catalog.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "recept-block");
    div.style.backgroundImage = catalog[i].img;

    let name = document.createElement("div");
    name.setAttribute("class", "recept-name");
    name.innerHTML = catalog[i].name;

    let sum = document.createElement("div");
    sum.setAttribute("class", "resept-sum");
    sum.innerHTML = catalog[i].sum + " Recipes";

    div.appendChild(sum);
    div.appendChild(name);
    container.appendChild(div);
  }
}
