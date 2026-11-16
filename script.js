const cmdEnterBtn = document.getElementById("cmdEnterBtn");
const cmdInput = document.querySelector(".cmdInput");
const cmdContent = document.querySelector(".cmdContent");

cmdEnterBtn.onclick = function(){
    const cmd = cmdInput.value.trim().toLowerCase();
    switch(true){
        case cmd == "info":
            cmdContent.textContent = "This is Compass Internal Database.";
            break;
        case cmd == "help":
            cmdContent.innerHTML = "Enter the website below for help and lists of commands.";
            break;
        case cmd == "score info":
            cmdContent.innerHTML = "Below are the rankings for total score:<br><br>S = 568-578pts<br>A = 547-567pts<br>B = 526-546pts<br>C = 300-525pts<br>D = 290-299pts<br>F = 0-289pts"
            break;
        case cmd == "clear":
            cmdContent.innerHTML = "";
        case cmd.length > 40:
            cmdContent.innerHTML = "You cannot enter more than 40 characters.";
        case cmd === "":
            cmdContent.innerHTML = "You need to enter a command."
        default:
            cmdContent.innerHTML = `"${cmdInput.value}" is not a recognized command.`
    } 
}
// Enter key to enter user input
cmdInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        cmdEnterBtn.click();
    }
});

// Closes command window
const closeCmdBtn = document.getElementById("closeCmdBtn")
closeCmdBtn.onclick = function(){
    const cmd = document.querySelector(".cmd");
    cmd.style.display = "none";
}

// Makes sure both side bars are closed before leftSidebar border = "none";
let closedTopSidebar = false;
let closedBottomSidebar = false;

function updateLeftSidebarBorder(){
    const leftSidebar = document.querySelector(".leftSidebar")
    if (closedTopSidebar && closedBottomSidebar){
        leftSidebar.style.border = "none";
    } else{
        leftSidebar.style.border = "";   
    }
}

// Closes top left side bar window
const closeTopLeftSidebarBtn = document.getElementById("closeTopLeftSidebarBtn");
closeTopLeftSidebarBtn.onclick = function(){
    const topLeftSidebar = document.querySelector(".topLeftSidebar")
    const topLeftTitlebar = document.querySelector(".topLeftTitlebar")
    topLeftTitlebar.style.display = "none";
    topLeftSidebar.style.display = "none";
    closedTopSidebar = true;
    updateLeftSidebarBorder();
}

// Closes bottom left side bar window
const closeBottomLeftSidebarBtn = document.getElementById("closeBottomLeftSidebarBtn");
closeBottomLeftSidebarBtn.onclick = function(){
    const bottomLeftSidebar = document.querySelector(".bottomLeftSidebar")
    const bottomLeftTitlebar = document.querySelector(".bottomLeftTitlebar")
    bottomLeftTitlebar.style.display = "none";
    bottomLeftSidebar.style.display = "none";
    closedBottomSidebar = true;
    updateLeftSidebarBorder();
}


