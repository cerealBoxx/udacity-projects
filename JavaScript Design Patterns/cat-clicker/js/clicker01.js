//globals

var listFragment = document.createDocumentFragment(),
    outputFragment = document.createDocumentFragment(),
    catList = document.getElementById("cat-list"),
    displayArea = document.getElementById("display-area");


var clicker = function() {

    function addClickEvent(cat, outputListItem) {

        return function() {

            if (displayArea.children.length > 0) {

                while (displayArea.firstChild) {
                    displayArea.removeChild(displayArea.firstChild);

                }

                displayArea.appendChild(outputListItem);
            } else {
                displayArea.appendChild(outputListItem);

            }

        }


    };

    for (var i = 0; i < cats.length; i++) {

        var catListItem = document.createElement("li"),
            outputListItem = document.createElement("li");

        var catImg = document.createElement("img");
        catImg.addClass = "cat-img";

        var catNameSpan = document.createElement("span");


        var outputSpan = document.createElement("span");


        catImg.src = cats[i].src;
        catNameSpan.innerHTML = cats[i].name;
        outputSpan.innerHTML = cats[i].clicks;

        catListItem.appendChild(catNameSpan);
        outputListItem.appendChild(catImg);
        outputListItem.appendChild(outputSpan);

        catListItem.addEventListener("click", addClickEvent(cats[i], outputListItem));

        catImg.addEventListener("click", (function(cat, output) {


            return function() {
                cat.clicks++;
                output.innerHTML = cat.clicks;
            }


        })(cats[i], outputSpan));

        listFragment.appendChild(catListItem);

    }

    catList.appendChild(listFragment);

};

clicker();