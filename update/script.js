function checkVersion() {
    const version = checkRadio("version");
    // var 
    if (version=="online") {
        document.getElementById("online-update").style.display = "block";
        document.getElementById("offline-gui-update").style.display = "none";
        document.getElementById("offline-cmd-update").style.display = "none";
    } else if (version=="offline-gui"){
        document.getElementById("online-update").style.display = "none";
        document.getElementById("offline-gui-update").style.display = "block";
        document.getElementById("offline-cmd-update").style.display = "none";
    } else {
        document.getElementById("online-update").style.display = "none";
        document.getElementById("offline-gui-update").style.display = "none";
        document.getElementById("offline-cmd-update").style.display = "block";
    }
}

document.getElementById("offline-gui-update").style.display = "none";
document.getElementById("offline-cmd-update").style.display = "none";