const queryString = window.location.search;
console.log(queryString);
const searchValue = queryString.slice(queryString.indexOf('=')+1).replaceAll('%20',' ');

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
let products = [];
 const getData = async () => {
  const res = await fetch('http://localhost:3100/api/product');
  const result = await res.json();
  products = [...result];
}

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
async function init(){
        await getData();
        const filteredProducts = products.filter(product=>{
                return product.TenSP.toLowerCase().includes(searchValue); 
        });
        if(filteredProducts.length===0){
                console.log('K co');
        }
        else{
                const filteredProductsWithColor = createArr(filteredProducts);
                const listProduct = document.querySelector('#list');
                renderProduct(filteredProductsWithColor,listProduct);
        }
}
init();