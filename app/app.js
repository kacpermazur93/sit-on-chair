document.addEventListener("DOMContentLoaded", function (e) {


    //Show/hide picture discription

    var infoPics = document.querySelectorAll("#info > .pic");

    for (var i = 0; i < infoPics.length; i++) {

        infoPics[i].addEventListener("mouseover", function (event) {
            event.target.children[0].style.display = "none";
        });

        infoPics[i].addEventListener("mouseout", function (event) {
            event.target.children[0].style.display = "block";
        });
    }


    //Slider
    function prevImg() {
        listElements[imgIndex].classList.remove("visible");
        imgIndex--;
        if (imgIndex < 0) imgIndex = listElements.length-1;
        listElements[imgIndex].classList.add("visible")
    }


    function nextImg() {
        listElements[imgIndex].classList.remove("visible");
        imgIndex++;
        if (imgIndex > listElements.length-1) imgIndex = 0;
        listElements[imgIndex].classList.add("visible")
    }



    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", prevImg);
    nextBtn.addEventListener("click", nextImg);


    var imgIndex = 0;
    var listElements = document.querySelectorAll("#slider li");

    listElements[imgIndex].classList.add("visible");

    var sliderInterval = setInterval(nextImg, 3000);

});