const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

let finalPosition = function (moves) {
  x = 0;
  y = 0;
  for (let move of moves) {
    switch (let) {
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'east':
        x++;
        break;
      case 'west':
        x--;
        break;
    }
  }
  return [x,y];
}