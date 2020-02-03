const mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

let pathOut = '';

function breakout(str) {
  console.log(str);
}

function WayOut(mazeToEscape) {
  this.maze = mazeToEscape;
}

WayOut.prototype.traverseMaze = function (row, col) {
  if (this.maze[row][col] === 'e') {
    breakout(pathOut);
    pathOut = '';
    return;
  }
  if (this.maze[row][col] === ' ') {
    this.maze[row][col] = 2;
    if (row < this.maze.length - 1) {
      pathOut = pathOut.concat('R');
      this.traverseMaze(row + 1, col);
    }
    if (col < this.maze[row].length - 1) {
      pathOut = pathOut.concat('D');
      this.traverseMaze(row, col + 1);
    }
    if (row > 0) {
      pathOut = pathOut.concat('L');
      this.traverseMaze(row - 1, col);
    }
    if (col > 0) {
      pathOut = pathOut.concat('U');
      this.traverseMaze(row, col - 1);
    }
  }
  if (this.maze[row][col] === '*') return false;
};

const solution = new WayOut(maze);
solution.traverseMaze(0, 0);
