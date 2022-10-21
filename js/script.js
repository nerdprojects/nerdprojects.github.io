document.querySelectorAll(".obfuscated").forEach(element => {
  element.innerHTML = atob(element.innerHTML).split("").reverse().join("");;
});

