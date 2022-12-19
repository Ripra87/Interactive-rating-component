var voteNumber = document.querySelectorAll(".numbers"); /*POSITION*/

var maxVote = voteNumber.length; /*TOTAL STARS (5)*/

localStorage.setItem("totalVote", maxVote); /*STORAGE THE STAR'S TOTAL NUMBER*/

for (i=0; i<maxVote; i++){              
voteNumber[i].addEventListener("click", function pressedButton(event) {
    var button = this.textContent;
    localStorage.setItem("selectedVote", button);   //STORAGE SELECTED VOTES
}
)
}


