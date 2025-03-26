function main() {
  const input = prompt('Type coordinates x and y in the format "x;y"');
  const input2 = prompt('Type coordinates x and y in the format "x;y"');
  const [x, y] = input.split(';').map(parseFloat);
  const [x2, y2] = input2.split(';').map(parseFloat);

  const distance = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2);

  document.getElementById('distance').innerHTML +=
    'point 1: ' + x + ';' + y + ' ' +
    'point 2: ' + x2 + ';' + y2 + ' ' + distance;
}

main();
