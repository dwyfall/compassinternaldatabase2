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

let showFiles = false;
let closedTopLeftSidebar = false;
let closedBottomLeftSidebar = false;
let LeftSidebarDisplay = false;
let closedCmd = false;

function seeFiles(){
    if(closedTopLeftSidebar && closedBottomLeftSidebar){
        leftSidebar.style.display = "none";
        appFile.style.display = "flex";
    } else{
        leftSidebar.style.display = "flex";
        appFile.style.display = "none";
    }
}

function seeFilesAfterClosingCmd(){
    if(closedCmd){
        appFile.style.display = "flex";
    } else{
        appFile.style.display = "none";
    }
}

function updateLeftSidebarBorder(){
    if(closedTopLeftSidebar && closedBottomLeftSidebar){
        leftSidebar.style.border = "none";
    } else{
        leftSidebar.style.border = "";
    }
    seeFiles();
    showFiles = true;
}

const sidebarFile = document.getElementById("sidebarFile");
const appFile = document.querySelector(".appFile");
const leftSidebar = document.querySelector(".leftSidebar");
const bottomLeftTitlebar = document.querySelector(".bottomLeftTitlebar");
const topLeftSidebar = document.querySelector(".topLeftSidebar");
const topLeftTitlebar = document.querySelector(".topLeftTitlebar");
const bottomLeftSidebar = document.querySelector(".bottomLeftSidebar");
const cmdFile = document.getElementById("cmdFile");
const cmd = document.querySelector(".cmd");
sidebarFile.onclick = function openSidebar(){
    appFile.style.display = "none";
    leftSidebar.style.border = "";
    bottomLeftTitlebar.style.display = "flex";
    topLeftSidebar.style.display = "flex";
    topLeftTitlebar.style.display = "flex";
    bottomLeftSidebar.style.display = "flex";
    leftSidebar.style.display = "flex";
closedTopLeftSidebar = false;
closedBottomLeftSidebar = false;
}

//OPEN COMMAND WINDOW
cmdFile.onclick = function openCmd(){
    cmd.style.display = "flex";
    appFile.style.display = "none";
}

//CLOSES THE COMMAND WINDOW
const closeCmdBtn = document.getElementById("closeCmdBtn");
closeCmdBtn.onclick = function closeCmd(){
    cmd.style.display = "none";
    closedCmd = true;
    seeFilesAfterClosingCmd();
}
// CLOSES THE TOP LEFT SIDEBAR
const closeTopLeftSidebarBtn = document.getElementById("closeTopLeftSidebarBtn");
closeTopLeftSidebarBtn.onclick = function closeTopLeftSidebarBtn(){
    const topLeftSidebar = document.querySelector(".topLeftSidebar");
    const topLeftTitlebar = document.querySelector(".topLeftTitlebar");
    topLeftSidebar.style.display = "none";
    topLeftTitlebar.style.display = "none";
    leftSidebar.style.display = "flex";
    closedTopLeftSidebar = true;
    updateLeftSidebarBorder();
}

// CLOSES THE BOTTOM LEFT SIDEBAR
const closeBottomLeftSidebarBtn = document.getElementById("closeBottomLeftSidebarBtn");
closeBottomLeftSidebarBtn.onclick = function closeTopLeftSidebarBtn(){
    const bottomLeftSidebar = document.querySelector(".bottomLeftSidebar");
    const bottomLeftTitlebar = document.querySelector(".bottomLeftTitlebar");
    bottomLeftSidebar.style.display = "none";
    bottomLeftTitlebar.style.display = "none";
    topLeftSidebar.style.border = "none";
    closedBottomLeftSidebar = true;
    updateLeftSidebarBorder();
}

