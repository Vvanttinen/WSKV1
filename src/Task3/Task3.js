function main() {
  const side1 = parseFloat(prompt('Type the first side of the triangle: '));
  const side2 = parseFloat(prompt('Type the second side of the triangle: '));
  const side3 = parseFloat(prompt('Type the third side of the triangle: '));

  if (side1 === side2 && side2 === side3) {
    document.getElementById('type').innerHTML += 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    document.getElementById('type').innerHTML += 'isosceles';
  } else {
    document.getElementById('type').innerHTML += 'scalene';
  }
}

main();
