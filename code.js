let images = [
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/8_EGO-GRIN_new.jpg',
    title:'EGO-GRIN, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/006_EGO-SCAR.jpg',
    title: 'EGO-SCAR, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/007_EGO-BEAT.jpg',
    title: 'EGO-BIT, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/003_EGO-DNA.jpg',
    title: 'EGO-DNA, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/004_EGO-MELT.jpg',
    title:'EGO-MELT, YONEYAMA MAI'}, 
]


function initSlider() {
    if (!images || !images.length) return;

    let imagesContainer = document.querySelector(".images_container");
    let button = document.querySelectorAll(".button");

    initImages();
    initButtons();

    function initImages() {
        images.forEach((image, index) => {
            let divImage = `<div class="image n${index} ${index === 0 ? 'active' : ''}" style="background-image:url(${images[index].url})" data-index="${index}"></div>`
            imagesContainer.innerHTML += divImage;
        });
    }

    function initButtons() {
        button.forEach(elem => {
            elem.addEventListener("click", function() {
                let curNumber = +imagesContainer.querySelector(".active").dataset.index;
                let nextNumber;
                if (elem.classList.contains("right")) {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                } else {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                }
                moveSlider(nextNumber);
            }
            )
        })
    }

    function moveSlider(num) {
        imagesContainer.querySelector(".active").classList.remove("active");
        imagesContainer.querySelector(".n" + num).classList.add("active");
    }

}

document.addEventListener("DOMContentLoaded", initSlider())
