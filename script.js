function runOnEnter(event) {
    var input = document.getElementById("input_search").value;

    if(input === "login") {
        if (event.key === "Enter") {
            runAction();
        }
    }
}

function runAction() {
    document.getElementById("login_box").style.display="flex";
}