
function handle() {
  const listElement = document.getElementsByClassName("menu__taplet--mobile");
  if (listElement.length) {
    const firstElement = listElement[0];
    firstElement.classList.toggle("show-menu");
  }
}
function handleClickSearch() {
  const listSearchElement = document.getElementsByClassName("search-toggle");
  if (listSearchElement.length) {
    const secondElement = listSearchElement[0];
    secondElement.classList.toggle("icon-search-product");
  }
}
//data
const arr= [
  {
  MaSP: 1,
  ImageName: "./../images/mwc.jpg",
  TenSP: "Giày thể thao Nam Trắng",
  DonGia: 180000,
  SoLuong: "10",
  Loai: "Giay the thao",
  HangSX: "Sneaker",
},
{
  MaSP: 2,
  ImageName: "./../images/mwc.jpg",
  TenSP: "Giày thể thao Nam Đen",
  DonGia: 230000,
  SoLuong: "10",
  Loai: "Giay the thao",
  HangSX: "Sneaker",
},
{
  MaSP: 3,
  ImageName: "./../images/mwc.jpg",
  TenSP: "Giày thể thao Nam Trắng",
  DonGia: 235000,

  SoLuong: "10",
  Loai: "Giay the thao",
  HangSX: "Sneaker",
},
{
  MaSP: 4,
  ImageName: "./../images/mwc.jpg",
  TenSP: "Giày mọi Nam Vàng",
  DonGia: "232.000 vnđ",
  SoLuong: "10",
  Loai: "Giay the thao",
  HangSX: "Sneaker",
}
];

let pages = 1;
const rows = 20;
const listElement = document.querySelector("#list");
const paginationElement = document.querySelector(".pagination");
console.log(paginationElement);

const display = (items, list, rows, pages) => {
  list.innerHTML = "";
  pages--;

  const start = rows * pages;
  const end = start + rows;

  const paginationItem = items.slice(start, end);

  for (let index = 0; index < paginationItem.length; index++) {
    const pageItem = paginationItem[index];
    // console.log(pageItem);
    const item = document.createElement("div");
    item.classList.add("item");
    // 
    item.innerHTML = `
   
            <div class="image show-modal">
            <img class=" img-product" src="${pageItem.ImageName}" alt="">
            </div>
            <span class="name show-modal">${pageItem.TenSP}</span>
            <span class="color"> - ${pageItem.color}</span>
            <p class="price">${pageItem.DonGia}</p>
   
        `;
        
    list.appendChild(item);
    console.log(list);
    const parent = document.querySelector(".item");
    console.log(parent);
        parent.setAttribute("id-product",`${pageItem.MaSP}`)
        
  }
};

display(arr, listElement, rows, pages);
const toFirstPageBtn = document.createElement("button");
const backwardBtn = document.createElement("button");
toFirstPageBtn.classList.add("toFirstPageBtn");
toFirstPageBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
paginationElement.appendChild(toFirstPageBtn);
backwardBtn.classList.add("backward");
backwardBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
paginationElement.appendChild(backwardBtn);
const totalPages = Math.ceil(arr.length / rows);
for (let index = 0; index < totalPages; index++) {
  const pageBtn = document.createElement("button");
  const btnItem = index + 1;
  pageBtn.classList.add("btn-pagination");
  pageBtn.innerText = btnItem;
  pageBtn.setAttribute("id-btn",btnItem);
  paginationElement.appendChild(pageBtn);
}
const forwardBtn = document.createElement("button");
const toLastPageBtn = document.createElement("button");

// forwardBtn.classList.add('btn-pagination');

forwardBtn.classList.add("forward");
forwardBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
paginationElement.appendChild(forwardBtn);
toLastPageBtn.classList.add("toLastPageBtn");
toLastPageBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
paginationElement.appendChild(toLastPageBtn);

const listBtn = document.querySelectorAll(".btn-pagination");
// console.log(listBtn);
for (let index = 0; index < listBtn.length; index++) {
  const btnItem = listBtn[index];
  // console.log(btnItem);
  btnItem.addEventListener("click", function () {
    let index1 = parseInt(btnItem.innerText);
    pages = index1;
    display(arr, listElement, rows, pages);
  });
}
toFirstPageBtn.addEventListener("click", function () {
  pages = 1;
  display(arr, listElement, rows, pages);
});
//
backwardBtn.addEventListener("click", function () {
  if (pages === 1) {
    return;
  }
  pages--;
  display(arr, listElement, rows, pages);
});
//
forwardBtn.addEventListener("click", function () {
  if (pages === totalPages) {
    return;
  }
  pages++;
  display(arr, listElement, rows, pages);
});
//
toLastPageBtn.addEventListener("click", function () {
  pages = totalPages;
  display(arr, listElement, rows, pages);
});
//active-paginaton
const pagActive = document.querySelectorAll(".btn-pagination");
pagActive[0].classList.add("active-pagination")
pagActive.forEach(item => {

  item.onclick = () => {
    const result = document.querySelector(".btn-pagination.active-pagination");
    result.classList.remove("active-pagination");

    item.classList.add("active-pagination");
  }
})
//function
const formatMonay = (n, currency) => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    }) + currency
  );
};
//tìm kiếm
function renderData(arr) {
  const result = document.querySelector("#list");
  const html = arr.map((record) => {
    return `
            <div class="item">
            <div class="image">
            <img class="show-modal img-product" src="${record.ImageName}" alt="">
            </div>
            <span class="name show-modal">${record.TenSP}</span>
            <span class="color"> - ${record.color}</span>
            <p class="price">${record.DonGia}</p>
            </div>
    `;
  });
  result.innerHTML = html.join("");
}

const input = document.querySelector("#search");
console.log(input);
input.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.TenSP
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
  });
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
const input1 = document.querySelector("#searchResponsive");
console.log(input1);
input1.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.TenSP
      .toLowerCase()
      .includes(event.target.value.toLowerCase());
  });
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//filter color

const inputColorBlack = document.querySelector("#colorBlack");
inputColorBlack.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//white
const inputColorWhite = document.querySelector("#colorWhite");
inputColorWhite.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//Gray
const inputColorGray = document.querySelector("#colorGray");
inputColorGray.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//blue
const inputColorBlue = document.querySelector("#colorBlue");
inputColorBlue.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//pink
const inputColorPink = document.querySelector("#colorPink");
inputColorPink.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//brown
const inputColorBrown = document.querySelector("#colorBrown");
inputColorBrown.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.color.includes(event.target.value);
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//cost
const inputPrice = document.querySelector("#priceCost");
inputPrice.addEventListener("input", function (event) {
  console.log(arr);
  const find = arr.filter((element) => {
    return element.price >= 100000 && element.price <= 200000;
  });
  console.log("find======", find);
  const html = document.querySelector("#list");
  html.innerHTML = "";
  renderData(find);
});
//rightproduct
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}
//
var accDown = document.getElementsByClassName("accordion-product");
var i;

for (i = 0; i < accDown.length; i++) {
  accDown[i].addEventListener("click", function () {
    this.classList.toggle("active-pro");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}
//modal

  // if(listModalElement.length)
  // {
  //     const modalElement= listModalElement[0]
  //     modalElement.classList.toggle("show-modal");
  // }

// handleToggleModal();
// so luong sp
const decrease = document.querySelector(".decrease");
console.log(decrease);
const increase = document.querySelector(".increase");
const countNumber = document.querySelector(".count-number");

decrease.onclick = () => {
  console.log(decrease);
  if (countNumber.value <= 1) {
    decrease.style.background = "#fff";
    return;
  }
  countNumber.value--;
};

increase.onclick = () => {
  countNumber.value++;
  decrease.style.background = "#fff";
};


//showModal
// function handleShowdetail(){
//   const imgModal=document.querySelector(".img-modal")
//   const title=document.querySelector(".title-modal")
//   const priceModal=document.querySelector(".price-modal")
//   const clickProduct = document.querySelectorAll(".showDetail")
//     clickProduct.forEach((item)=>{
//       item.onclick=()=>{
//         console.log(item);
//         const result = document.querySelector(".modal-detail.hidden")
//         console.log(result);
//         result.classList.remove("hidden")
//         const parent = item.parentElement
//     const imgName=parent.querySelector(".img-product").getAttribute("src")
//     const name = item.parentElement.querySelector(".name").innerText
//     const price = item.parentElement.querySelector(".price").innerText
//     imgModal.setAttribute("src",imgName)
//     title.innerText=name;
//     priceModal.innerText=price;
//     }
//   })
// }
// handleShowdetail()
const modal = document.querySelector(".modal-detail");
//btn-close
function handleHidden (){
    const btnClose = document.querySelector(".btn-close");
    console.log(btnClose);
    btnClose.onclick = () =>{
        modal.classList.remove("show")
        modal.classList.add("hidden");
    }
}
handleHidden()


//detail
function handleDetail(){
    const imgModal=document.querySelector(".img-modal")
    const title=document.querySelector(".title-modal")
    const priceModal=document.querySelector(".price-modal")
    const clickProduct = document.querySelectorAll(".show-modal")
    // const 
    // console.log(clickProduct);
    console.log(modal);
      clickProduct.forEach((item)=>{
        item.onclick = function(){
            modal.classList.remove("hidden");
            modal.classList.add("show");
            console.log(modal);
            const productId = item.parentElement.getAttribute('id-product');
            console.log(productId);
            const pickedProduct = arr.find(item=>item.MaSP==productId);

            console.log(pickedProduct);
            imgModal.setAttribute('src',pickedProduct.ImageName);
            title.innerText = pickedProduct.TenSP;
            priceModal.innerText = pickedProduct.DonGia;
        }
    })
  }
  handleDetail();