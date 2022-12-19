var position = document.querySelector(".vote p"); /*TEXT APPEARANCE POSITION*/

var totalVote = localStorage.getItem("totalVote"); /*GETTING VALUE OF TOTAL STARS FROM HTML1*/

var vote = localStorage.getItem("selectedVote"); //GETTING SELECTED VALUE FROM HTML1

position.innerHTML="You selected " + vote + " out of " + totalVote; /*OUTPUT*/