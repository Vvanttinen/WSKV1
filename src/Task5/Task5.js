function main() {
  const input = Number(prompt('Type a positive integer'));

  if (input < 0) {
    alert('Please type a positive integer');
    return;
  }

  let sum = 0;
  for (let i = 1; i <= input; i++) {
    sum += i;
  }

  document.getElementById('sum').innerHTML += sum;
}

main();
