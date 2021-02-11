// New and approved Hello World 
function main() {
    // this goes in the console tab in the browser
    console.log("main was called");

    let fullName = document.getElementById("full-name").value;

    let headingDisplay = document.getElementById("output");
    headingDisplay.innerText = "Welcome " + fullName;

    callJsFunction();
    removeElements();
}
    
function removeElements() {
    let label = document.getElementById("label-name");
    label.remove();

    let name = document. getElementById("full-name");
    name.remove();

    let button = document.getElementById("submit");
    button.remove();
}

function callJsFunction() {
        AOS.init();
}