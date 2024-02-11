const button = document.querySelector("button");
const div = document.querySelector(".content");

button.addEventListener("click", function () {

    html2canvas(div).then((canvas) => {
        const imageDataURL = canvas.toDataURL("image/png");

        // Create a download link for the image
        const a = document.createElement("a");
        a.href = imageDataURL;
        a.preview = "image.png";
        a.click();

    });

});
