
let infoContainers = document.querySelectorAll("#info .info-container");
let preBtn = document.querySelectorAll("#info .pre-btn");
let nxtBtn = document.querySelectorAll("#info .nxt-btn");

infoContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})