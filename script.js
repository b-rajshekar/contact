// Getting input element
let filterInput = document.getElementById("filterInput");

// Adding event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
    // Get value fo input
    let filterValue = document.getElementById("filterInput").value.toUpperCase();

    // Getting names ul
    let ul = document.getElementById("names");
    // Getting Li's from ul
    let li = ul.querySelectorAll("li.collection-item");

    // Looping through collection-item Li's
    for(let i = 0; i< li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        // If matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}