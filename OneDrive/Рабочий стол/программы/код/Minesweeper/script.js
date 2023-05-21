const container = document.createElement('grid-container');

const rows = 10;
const cols = 10;
let sq = rows * cols;
let isGenerate = true;
let arrMine = [];
let arrMines = [];
let dx = [-1, 0, 1, -1, 1, -1, 0, 1]
let dy = [-1, -1, -1, 0, 0, 1, 1, 1]
//создание поля
for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = i + "," + j;
    row.appendChild(cell);
  }
  container.appendChild(row);
}
document.body.appendChild(container);

function CroquetCoord(x, y) {
  return !(x < 0 || x > rows - 1 || y < 0 || y > cols - 1);

}

function OpenZero(numY, numX){
  for (let i = 0; i < dx.length; i++) {
    if (CroquetCoord(Number(numX) + dx[i], Number(numY) + dy[i])) {
      if(arrMines[Number(numY) + dy[i]][Number(numX) + dx[i]] != "*") {
        let s = String(Number(numY) + dy[i]) + "," + String(Number(numX) + dx[i]);
        if(document.getElementById(s).innerHTML == "") {
          document.getElementById(s).innerHTML = arrMines[Number(numY) + dy[i]][Number(numX) + dx[i]];
          if(arrMines[Number(numY) + dy[i]][Number(numX) + dx[i]] == "0"){
            OpenZero(Number(numY) + dy[i], Number(numX) + dx[i]);
          }
        }
      }
    }
  }
}

function FillField(numY, numX) {
  isGenerate = false;
  arrMine = [];
  for (let i = 0; i < sq; i++) {
    arrMine.push("0");
  }

  //заполнение мин
  for (let i = 0; i < sq / 10; i++) {
    let num = Math.floor(Math.random() * sq);
    if (arrMine[num] === "0" && num !== Number(numY) * cols + Number(numX)){
      arrMine[num] = "*";
    }else
      i--;
  }

  arrMines = [];
  for (let i = 0; i < cols; i++) {
    let arr = [];
    for (let j = 0; j < rows; j++)
      arr.push(arrMine[i * cols + j]);
    arrMines.push(arr);
  }

  for (let i = 0; i < arrMines.length; i++) {
    for (let j = 0; j < arrMines[i].length; j++) {
      let sum = 0;
      if (arrMines[i][j] !== "*") {
        for (let k = 0; k < dx.length; k++) {
          if (CroquetCoord(i + dx[k], j + dy[k]) && arrMines[i + dx[k]][j + dy[k]] === "*") {
            sum++;
          }
        }
        arrMines[i][j] = sum;
      }
    }
  }
}

let grid = document.querySelector("grid-container");
let gridElements = grid.querySelectorAll(".cell");

for (let i = 0; i < gridElements.length; i++) {
  gridElements[i].innerHTML = "";
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);

for (let i = 0; i < gridElements.length; i++) {
  gridElements[i].addEventListener("click", function (e) {
  let coordinates = e.target.id.split(',');
  if(isGenerate)
    FillField(coordinates[0], coordinates[1]);
  if(arrMines[coordinates[0]][coordinates[1]] == "*")
    alert("loss");
  if(arrMines[coordinates[0]][coordinates[1]] == "0")
    OpenZero(coordinates[0], coordinates[1]);
  gridElements[i].innerHTML = arrMines[coordinates[0]][coordinates[1]];
  });
}
for (let i = 0; i < gridElements.length; i++) {
  gridElements[i].addEventListener("contextmenu", function () {
    if(gridElements[i].innerHTML == "")
      gridElements[i].innerHTML = "!";
  });
}
