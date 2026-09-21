
function upDate(element) {

    console.log("Mouse over image");

    console.log("Alt:", element.alt);
    console.log("Source:", element.src);

    // Change the text
    document.getElementById("image").innerHTML = element.alt;

    // Change the background image
    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";
}


function unDo() {

    console.log("Mouse left image");

    // Restore original background
    document.getElementById("image").style.backgroundImage = "url('')";

    // Restore original text
    document.getElementById("image").innerHTML =
        `<div class="preview-content">
            <span class="preview-icon">✦</span>
            <span>Hover over an image below</span>
            <small>to display it here</small>
        </div>`;
}
