// $(document).ready(function () {

//     $('.grid').masonry({
//         // set itemSelector so .grid-sizer is not used in layout
//         itemSelector: '.grid-item',
//         // use element for option
//         columnWidth: '.grid-sizer',
//         percentPosition: true
//     })

//     // layout Masonry after each image loads
//     $grid.imagesLoaded().progress(function () {
//         $grid.masonry('layout');
//     });
// });


function resizeGridItem(item) {
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("grid-item");
    for (x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("grid-item");
for (x = 0; x < allItems.length; x++) {
    imagesLoaded(allItems[x], resizeInstance);
}

