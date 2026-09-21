function upDate(element) {
    console.log("Mouse over image");
    console.log("Alt:", element.alt);
    console.log("Source:", element.src);

    document.getElementById("image").innerHTML = element.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";
}

function unDo() {
    console.log("Mouse leave image");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
