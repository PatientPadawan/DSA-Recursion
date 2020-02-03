/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function isSafe(maze, x, y) {
  const n = maze.length;
  const m = maze[0].length;
  if (x >= 0 && y >= 0 && x < n && y < m && maze[x][y] !== '*') {
    return true; // {11}
  }
  return false;
}

function findPath(maze, x, y, solution) {
  const n = maze.length;
  const m = maze[0].length;

  if (x === n - 1 && y === m - 1) { // {4}
    solution[x][y] = 1;
    return true;
  }
  if (isSafe(maze, x, y) === true) { // {5}
    solution[x][y] = 1; // {6}
    if (findPath(maze, x + 1, y, solution)) { // {7}
      return true;
    }
    if (findPath(maze, x, y + 1, solution)) { // {8}
      return true;
    }
    solution[x][y] = 0; // {9}
    return false;
  }
  return false; // {10}
}

function ratInAMaze(maze) {
  const solution = [];
  for (let i = 0; i < maze.length; i++) { // {1}
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }
  if (findPath(maze, 0, 0, solution) === true) { // {2}
    debugger
    const alex = solution;
    return alex;
  }
  return 'NO PATH FOUND'; // {3}
}

const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

console.log(ratInAMaze(maze));
