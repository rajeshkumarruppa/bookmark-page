// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

function addBookmark() {
    let siteName = siteNameInput.value; //accessing input name
    let siteURL = siteUrlInput.value; //accessing input url
    let listItem = document.createElement("li"); //crating li item dynamically
    bookmarksList.appendChild(listItem); //adding list item to the bookmarklist ul item
    let bookmarkName = document.createElement("p"); //creating paragraph Element
    let bookmarkUrl = document.createElement("a"); //creating anchor Element
    bookmarkName.textContent = siteName;
    bookmarkName.style.color = "#323f4b";
    bookmarkUrl.textContent = siteURL;
    bookmarkUrl.href = siteURL;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.add("boxContainer");
    bookmarksList.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);

}

siteUrlInput.addEventListener("change", function(event) { //change event will trigger after the changes 
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
});