//globals

var listFragment = document.createDocumentFragment(),
    outputFragment = document.createDocumentFragment(),
    catList = document.getElementById("cat-list");


var octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        catView.init();
        catListView.init();

    },

    getCats: function() {
        return model.cats;
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    incrementCounter: function() {
        model.currentCat.clicks++;
        catView.render();
    }

};

var catListView = {
    init: function() {
        this.render();
    },
    render: function() {
        var cats = octopus.getCats();

        for (var i = 0; i < cats.length; i++) {

            var catListItem = document.createElement("li"),
                catNameSpan = document.createElement("span");

            catNameSpan.innerText = cats[i].name;

            catListItem.appendChild(catNameSpan);

            catListItem.addEventListener("click", this.addClickEvent(cats[i]));

            listFragment.appendChild(catListItem);

        }

        catList.appendChild(listFragment);
    },

    addClickEvent: function(cat) {
        return function() {
            octopus.setCurrentCat(cat);
            catView.render();
        };
    }
};



var catView = {
    init: function() {
        this.displayArea = document.getElementById("display-area");
        this.catNameSpan = document.getElementById("cat-name");
        this.catImage = document.getElementById("cat-img");
        this.counterSpan = document.getElementById("counter");

        this.catImage.addEventListener('click', function(e) {
            octopus.incrementCounter();
        });

        this.render();
    },
    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.counterSpan.innerText = currentCat.clicks;
        this.catNameSpan.innerText = currentCat.name;
        this.catImage.src = currentCat.src;

    }
};




octopus.init();