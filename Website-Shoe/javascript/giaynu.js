function createArr(arr){
    const newArr = arr.map(item => {
      const result = item.TenSP.split(" ");
      const color= result.pop();
      const TenSP = [...result].join(" ");
      return {
        ...item,
        color,
        TenSP
      }
    })
    return newArr
  }

let products = [];
const getData=async ()=>{
    const res = await fetch('http://localhost:3100/api/product');
    const result = await res.json();
    products = [...result];
}

const init = async () => {
    await getData();
    products= products.filter(product=>product.Loai === 'Giày cao gót');
    console.log(products);
    products = createArr(products);
    display(products, listElement, rows, pages);
    pagi();
}
init();

function pagi() {
    const forwardBtn = document.createElement("button");
    const toLastPageBtn = document.createElement("button");
    const toFirstPageBtn = document.createElement("button");
    const backwardBtn = document.createElement("button");
    toFirstPageBtn.classList.add("toFirstPageBtn");
    toFirstPageBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
    paginationElement.appendChild(toFirstPageBtn);
    backwardBtn.classList.add("backward");
    backwardBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
    paginationElement.appendChild(backwardBtn);
    
    const totalPages = Math.ceil(products.length / rows);
    for (let index = 0; index < totalPages; index++) {
    const pageBtn = document.createElement("button");
    const btnItem = index + 1;
    pageBtn.classList.add("btn-pagination");
    pageBtn.innerText = btnItem;
    pageBtn.setAttribute("id-btn",btnItem);
    paginationElement.appendChild(pageBtn);
    const listBtn = document.querySelectorAll(".btn-pagination");
    for (let index = 0; index < listBtn.length; index++) {
        const btnItem = listBtn[index];
        btnItem.addEventListener("click", function () {
        let index1 = parseInt(btnItem.innerText);
        pages = index1;
        display(products, listElement, rows, pages);
  });
    }
    forwardBtn.classList.add("forward");
    forwardBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    paginationElement.appendChild(forwardBtn);
    toLastPageBtn.classList.add("toLastPageBtn");
    toLastPageBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
    paginationElement.appendChild(toLastPageBtn);
toFirstPageBtn.addEventListener("click", function () {
  pages = 1;
  display(products, listElement, rows, pages);
});
//
backwardBtn.addEventListener("click", function () {
  if (pages === 1) {
    return;
  }
  pages--;
  display(products, listElement, rows, pages);
});
//
forwardBtn.addEventListener("click", function () {
  if (pages === totalPages) {
    return;
  }
  pages++;
  display(products, listElement, rows, pages);
});
//
toLastPageBtn.addEventListener("click", function () {
  pages = totalPages;
  display(products, listElement, rows, pages);
});
}
// const forwardBtn = document.createElement("button");
// const toLastPageBtn = document.createElement("button");

// forwardBtn.classList.add('btn-pagination');

// forwardBtn.classList.add("forward");
// forwardBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
// paginationElement.appendChild(forwardBtn);
// toLastPageBtn.classList.add("toLastPageBtn");
// toLastPageBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
// paginationElement.appendChild(toLastPageBtn);

}
let pages = 1;
const rows = 8;
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
            <img class=" img-product" src="http://localhost:3100/images/${pageItem.ImageName}" alt="">
            </div>
            <span class="name show-modal">${pageItem.TenSP}</span>
            <span class="color"> - ${pageItem.color}</span>
            <p class="price">${pageItem.DonGia}</p>
   
        `;
        
    list.appendChild(item);
    const parent = document.querySelector(".item");
    parent.setAttribute("id-product",`${pageItem.MaSP}`)
        
  }
};


//display(products, listElement, rows, pages);
// const toFirstPageBtn = document.createElement("button");
// const backwardBtn = document.createElement("button");
// toFirstPageBtn.classList.add("toFirstPageBtn");
// toFirstPageBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
// paginationElement.appendChild(toFirstPageBtn);
// backwardBtn.classList.add("backward");
// backwardBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
// paginationElement.appendChild(backwardBtn);
// const totalPages = Math.ceil(products.length / rows);
// for (let index = 0; index < totalPages; index++) {
//   const pageBtn = document.createElement("button");
//   const btnItem = index + 1;
//   pageBtn.classList.add("btn-pagination");
//   pageBtn.innerText = btnItem;
//   pageBtn.setAttribute("id-btn",btnItem);
//   paginationElement.appendChild(pageBtn);
// }
// const forwardBtn = document.createElement("button");
// const toLastPageBtn = document.createElement("button");

// // forwardBtn.classList.add('btn-pagination');

// forwardBtn.classList.add("forward");
// forwardBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
// paginationElement.appendChild(forwardBtn);
// toLastPageBtn.classList.add("toLastPageBtn");
// toLastPageBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
// paginationElement.appendChild(toLastPageBtn);

// const listBtn = document.querySelectorAll(".btn-pagination");
// // console.log(listBtn);
// for (let index = 0; index < listBtn.length; index++) {
//   const btnItem = listBtn[index];
//   // console.log(btnItem);
//   btnItem.addEventListener("click", function () {
//     let index1 = parseInt(btnItem.innerText);
//     pages = index1;
//     display(products, listElement, rows, pages);
//   });
// }
// toFirstPageBtn.addEventListener("click", function () {
//   pages = 1;
//   display(products, listElement, rows, pages);
// });
// //
// backwardBtn.addEventListener("click", function () {
//   if (pages === 1) {
//     return;
//   }
//   pages--;
//   display(products, listElement, rows, pages);
// });
// //
// forwardBtn.addEventListener("click", function () {
//   if (pages === totalPages) {
//     return;
//   }
//   pages++;
//   display(products, listElement, rows, pages);
// });
// //
// toLastPageBtn.addEventListener("click", function () {
//   pages = totalPages;
//   display(products, listElement, rows, pages);
// });
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
