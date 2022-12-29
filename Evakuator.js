// let arrowLeft = document.querySelector('.arrow_left');
// let arrowRight = document.querySelector('.arrow_right');
// let imgAll = document.querySelectorAll('.slider img');

// let offset = 0;

// function sd() {
//     imgAll.forEach(function (item) {
//         offset = offset + (item.offsetWidth + 10) / imgAll.length;
//     });
// }

// arrowLeft.addEventListener('click', function () {
//     sd();
//     imgAll.forEach(function (item) {
//         item.style.left = (parseInt(item.style.left || getComputedStyle(item)['left'], 10) + item.offsetWidth + 10) + 'px';
//     });
// })

// arrowRight.addEventListener('click', function () {
//     sd();
//     imgAll.forEach(function (item) {
//         item.style.left = (parseInt(item.style.left || getComputedStyle(item)['left'], 10) - item.offsetWidth - 10) + 'px';
//     });
// })