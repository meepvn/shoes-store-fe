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


//
const findProduct = () => {
  const searchInput = document.querySelector("#search");
  searchInput.onkeypress = (eventKeyCode) =>{
    if(eventKeyCode.keyCode === 13){
      const inputValue = removeAccents(searchInput.value);
      console.log(inputValue);
      window.open(`timkiem.html?search=${inputValue}`,'_self');

    }
  }
}
findProduct();
// 
let products = [];
 const getData = async () => {
  const res = await fetch('http://localhost:3100/api/product');
  const result = await res.json();
  products = [...result];
}
const init = async () => {
  await getData();

  const giayTheThao = products.filter(product => product.Loai === 'Giày thể thao').slice(0,4);
  const giayTheThaoWithColor= createArr(giayTheThao);
  const parentGiayTheThao = document.querySelector(".giaythethao");
  renderProduct(giayTheThaoWithColor,parentGiayTheThao);

  const giayCaoGot = products.filter(product=>product.Loai ==='Giày cao gót').slice(0,4);
  const giayCaoGotWithColor = createArr(giayCaoGot);
  const parentGiayCaoGot = document.querySelector(".giaycaogot");
  renderProduct(giayCaoGotWithColor,parentGiayCaoGot);




  handleDetail(products);
}
init();
function renderProduct(listProduct,node){
  const html = listProduct.map((item) => {
    return `
    <div class="item" id-product="${item.MaSP}">
    <div class="images show-modal">
        <img src="http://localhost:3100/images/${item.ImageName}" alt="">
        <div class="add-product">
            <span class="icon-cart"><i class="fa-solid fa-cart-plus"></i></span>
        </div>
    </div>
    <span class="title show-modal">${item.TenSP}</span>
    <span class="color">${item.color}</span>
    <span class="cost">${item.DonGia}</span>
</div>
    `;
  });
  node.innerHTML = html.join(" ");
}

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
function handleDetail(arr){
    const imgModal=document.querySelector(".img-modal")
    const title=document.querySelector(".title-modal")
    const priceModal=document.querySelector(".price-modal")
    const clickProduct = document.querySelectorAll(".show-modal")
    // console.log(clickProduct);
      clickProduct.forEach((item)=>{
        item.onclick = function(){
            modal.classList.remove("hidden");
            modal.classList.add("show");
            const productId = item.parentElement.getAttribute('id-product');
            console.log(productId);
            const pickedProduct = arr.find(item=>item.MaSP==productId);
            imgModal.setAttribute('src',`http://localhost:3100/images/${pickedProduct.ImageName}`);
            title.innerText = pickedProduct.TenSP;
            priceModal.innerText = pickedProduct.DonGia;
            
        }
    })
  }
  //handleDetail();
  // const btnClose = document.querySelector(".close-banner")  
  // const modal = document.querySelector(".modal-banner")
  // btnClose.onclick = () =>{
  //     modal.classList.add("hidden");
  // }

 
 const decrease = document.querySelector(".decrease");
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

 function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}