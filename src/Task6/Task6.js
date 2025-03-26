function main() {
  const input = Number(prompt('Enter a positive integer'));

  if (input < 0) {
    alert('Please enter a positive integer');
    return;
  }

  let htmlS = '<table>';
  for (let i = 1; i <= input; i++) {
    htmlS += '<tr>';
    for (let j = 1; j <= input; j++) {
      htmlS += '<td>' + (i * j) + '</td>';
    }
    htmlS += '</tr>';
  }
  htmlS += '</table>';

  document.getElementById('table').innerHTML += htmlS;
}

main();
