var header = document.getElementById("list-active");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
//
// var btns = document.querySelectorAll(".btn");
// var result = document.querySelector(".btn.active");
// btns.forEach(element => {
//     element.onclick = () => {
//         element.classList.toggle("active");
//     }
// });


var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: false,
  wrapAround: true,
  groupCells: 1,
  autoPlay: 2500
});
// function handleToggleMenu() {
//   const listMenuElement = document.getElementsByClassName("menu__taplet--mobile");
//   if (listMenuElement.length) {
//     const firstElement = listMenuElement[0];
//     firstElement.classList.toggle("show");
//   }
// }
function handle(){
  const listElement = document.getElementsByClassName("menu__taplet--mobile");
  if(listElement.length)
  {
      const firstElement= listElement[0]
      firstElement.classList.toggle("show")
  }
}
function handleClickSearch(){
  const listSearchElement = document.getElementsByClassName("search-toggle");
  if(listSearchElement.length)
  {
      const secondElement= listSearchElement[0]
      secondElement.classList.toggle("icon-search-product")
  }
}
const hideBtn = document.querySelector('#hide')
const hehehe = document.querySelector('.hehe')
hideBtn.addEventListener('click', () => {
hehehe.style.display = 'none'
})
//
const put = document.querySelector("#search");
console.log(put)
 put.addEventListener('input', (e) => {
   console.log(arr.filter(element => element.TenKH.toLowerCase().includes(e.target.value.toLowerCase())))
 })
// 