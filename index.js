let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

homeScoreEl.textContent = 0
guestScoreEl.textContent = 0

let currentHome = 0
let currentGuest = 0

function setShadow(){
    if(currentHome > currentGuest){
        document.getElementById("home").style.boxShadow = "0px 0px 5px 5px greenyellow"
        document.getElementById("guest").style.boxShadow = "0px 0px 5px 5px red"                
    }else if (currentHome == currentGuest) {
        document.getElementById("home").style.boxShadow = "none"  
        document.getElementById("guest").style.boxShadow = "none"                      
    }else {
        document.getElementById("guest").style.boxShadow = "0px 0px 5px 5px greenyellow"        
        document.getElementById("home").style.boxShadow = "0px 0px 5px 5px red"        
    }
}

function addScore(team , add) {
    if (team == 0){
        currentHome += add
        homeScoreEl.textContent = currentHome
    } else if (team == 1) {
        currentGuest += add
        guestScoreEl.textContent = currentGuest
    } 
    setShadow()  
}

function resetScore() {
    currentHome = 0
    currentGuest = 0
    homeScoreEl.textContent = currentHome
    guestScoreEl.textContent = currentGuest 
    setShadow()
}

