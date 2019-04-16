function findLetters(){
  let string = document.getElementById('p1').innerText;
//charAt réfère à l'ordre dans lequel les lettres sont écrites (0 pour la première, 1 pour la deuxième...)
  let result = string.charAt(4);
  let result2 = string.charAt(9)
  let result3 = string.charAt(34)
  let result4 = string.charAt(58)
  alert(`Les quatre lettres mystères sont : ${result}, ${result2}, ${result3}, ${result4}`);
}
