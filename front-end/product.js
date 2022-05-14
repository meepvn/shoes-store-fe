const productAPI = "http://localhost:3100/api/product"
// get dữ liệu bằng API
// Thêm sản phẩm
const TenSP = document.querySelector('input[name="TenSP"]');
const Loai = document.querySelector('input[name="Loai"]');
const HangSX = document.querySelector('input[name="HangSX"]');
const DonGia = document.querySelector('input[name="DonGia"]');
const SoLuong = document.querySelector('input[name="SoLuong"]');
const IMG=document.querySelector("#img-link");
let listProduct=[]
async function start(){
    await getData();
    renderData(listProduct);
    handleAdd();
}
start();
async function getData(){
    const response = await fetch(productAPI);
    const data = await response.json();
    listProduct = [...data];
//  fetch(productAPI)
// .then(res=>{
//     return res.json(); 
// })
// .then(product=>{
//     listproduct=[...product];
//     renderData(listproduct)
// })
}
function renderData(arr){
 const result=document.querySelector("#tbl")
    const html =arr.map(record => {
        return`
        <tr class="product-${record.MaSP} ">
            <td>${record.MaSP}</td>
            <td class="img-product">${record.TenSP}
                <div class="wrapp-img">
                    <img  src="http://localhost:3100/images/${record.ImageName}"/>
                </div>
            </td>
            <td>${record.Loai}</td>
            <td>${record.HangSX}</td>
            <td>${record.DonGia}</td>
            <td>${record.SoLuong}</td>
            <td><button class="btn update" product-id= "${record.MaSP}" onClick="showModalUpdate(this)">Sửa</button></td>
            <td><button class="btn" onClick="handleClickDelete(${record.MaSP})">Xóa</button></td>
        </tr>`
    })     
    result.innerHTML += html.join('');
}




async function add(data){
    var Option = {
        method: 'POST',
        body: data,
        // headers: {'Content-Type': 'application/json'}
    }
    const response = await fetch(productAPI,Option)
    const record = await response.json();
    console.log('record',record);
    addDOM(record);

}
function addDOM(record){
    console.log(record.insertedData)
    const node = document.createElement("tr")
    const html =
    `<tr class="product-${record.insertedData.MaSP}">
    <td>${record.insertedData.MaSP}</td>
    <td class="img-product">${record.insertedData.TenSP}
    <div class="wrapp-img">
        <img src="http://localhost:3100/images/${record.insertedData.ImageName}"/>
    </div>
    </td>
    <td>${record.insertedData.Loai}</td>
    <td>${record.insertedData.HangSX}</td>
    <td>${record.insertedData.DonGia}</td>
    <td>${record.insertedData.SoLuong}</td>
    <td><button class="btn update" product-id="${record.insertedData.MaSP}" onClick="showModalUpdate(this)">Sửa</button></td>
    <td><button class="btn" onClick="handleClickDelete(${record.insertedData.MaSP})">Xóa</button></td>
</tr>`

    node.innerHTML +=html;
    console.log(node);
    const result = document.querySelector('#tbl')
    if(result){
        result.appendChild(node)
    }
    }

function handleAdd(){
    const result= document.querySelector("#btn-add")
    result.onclick = function(){
        const myForm = new FormData();
        myForm.append("TenSP" , TenSP.value);
        myForm.append("Loai" , Loai.value);
        myForm.append("HangSX" , HangSX.value);
        myForm.append("DonGia" , DonGia.value);
        myForm.append("SoLuong" , SoLuong.value);
        myForm.append("productImage" , IMG.files[0]);
        myForm.forEach(item=>console.log(item));
        add(myForm)
        resetForm();
         autoHidden();
    }
    
}


// reset form
function resetForm(){
    TenSP.value="";
    Loai.value="";
    HangSX.value="";
    DonGia.value="";
    SoLuong.value="";
    IMG.files[0]="";
}

// Sửa thông tin khách hàng

function handleUpdate(id) {
    const btnUpdate=document.querySelector("#btn-update");
    btnUpdate.onclick= async function(){
        const TenSP = document.querySelector('input[name="TenSPUpdate"]');
        const Loai = document.querySelector('input[name="LoaiUpdate"]');
        const HangSX = document.querySelector('input[name="HangSXUpdate"]');
        const DonGia = document.querySelector('input[name="DonGiaUpdate"]');
        const SoLuong = document.querySelector('input[name="SoLuongUpdate"]');
        const Img = document.querySelector("#img-linkUpdate");
        const myForm = new FormData();
        myForm.append("TenSP" , TenSP.value);
        myForm.append("Loai" , Loai.value);
        myForm.append("HangSX" , HangSX.value);
        myForm.append("DonGia" , DonGia.value);
        myForm.append("SoLuong" , SoLuong.value);
        myForm.append("productImage" , Img.files[0]);
        const options={
            method:"PUT",
            body:myForm,   
        }
        const res = await fetch(`http://localhost:3100/api/product/${id}`,options);
        const response = await res.json();
        const newFileName = response.filename; 
        listProduct=listProduct.map((item)=>{
            if(item.MaSP==id){
                item.TenSP=TenSP.value;
                item.Loai =Loai.value;
                item.HangSX=HangSX.value;
                item.DonGia=DonGia.value;
                item.SoLuong=SoLuong.value;
                item.ImageName=newFileName;
                console.log(item);
            }
            return item

        })
        const html=document.querySelector("#tbl");
        html.innerHTML="";
        renderData(listProduct)
        // console.log(newListproduct);
        autoHidden()
        
    
    // fetch( `http://localhost:3100/api/product/${id}`,Option
    // )
    // .then(res=>{
    //     return res.json();
    // })

    }
}

//Xóa Thông tin khách hàng
async function handleClickDelete(id){
    var Option={
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
          }
    }
    console.log(id);
    const response=await fetch(`http://localhost:3100/api/product/${id}`,Option)
    const result =await response.json();
    const item = document.querySelector(`.product-${id}`)
    if(item){
       item.remove();
    }

}
// function handleClickDelete(id){
    
//     fetch( `http://localhost:3100/api/product/${id}`,
//     {
//         method:"DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//           }
//     })
//     .then(res=>{
//         return res.json();
//     })
//     .then(()=>{
//         const result = document.querySelector(`.product-${id}`)
//         console.log(result)
//         if(result){
//            result.remove();
//         }
//     })

// }
//Tìm kiếm khách hàng

// function handleSearchproduct(){
    // const input = document.querySelector('#search')
    
        
    const input = document.querySelector('#search')
// console.log(input);
input.addEventListener('input',function(event){
     console.log(listProduct);
        const find=listProduct.filter(Element=>{
            return Element.TenSP.toLowerCase().includes(event.target.value.toLowerCase())
    });
    const html=document.querySelector("#tbl")
    html.innerHTML=""
    renderData(find)
})
    
// }
// handleSearchproduct()

// show or hidden modal
function autoHidden(){
    const result= document.querySelector(".modal.show")
    
    result.classList.remove("show");
    result.classList.add("hidden")
}
function handleHiddenModal(){
    const result= document.querySelector(".modal.show")
    const btn= document.querySelectorAll(".close")
    btn.forEach((item)=>{
        item.onclick = function(){
                result.classList.remove("show");
                result.classList.add("hidden")
                
        }
    })
}

function handleShowModalAdd(){
    const result= document.querySelector(".modal-add.hidden")
    const btn= document.querySelector(".btn__add")
    btn.onclick=function(){
        result.classList.remove("hidden");
        result.classList.add("show")

    }
}
function showModalUpdate(){
    
    const update=document.querySelectorAll(".update")
    const result= document.querySelector(".modal-update.hidden")
    update.forEach(item=>{
        item.onclick=function(){
            result.classList.remove("hidden")
            result.classList.add("show")
            const productId=item.getAttribute('product-id')
            console.log(productId);
            // đổ dữ liệu lên form
            const findProduct=listProduct.find(item=>{
                if(item.MaSP==productId)
                return true
                return false
            })
            // console.log(findProduct.TenSP);
            const TenSP = document.querySelector('input[name="TenSPUpdate"]');
            const Loai = document.querySelector('input[name="LoaiUpdate"]');
            const HangSX = document.querySelector('input[name="HangSXUpdate"]');
            const DonGia = document.querySelector('input[name="DonGiaUpdate"]');
            const SoLuong = document.querySelector('input[name="SoLuongUpdate"]');
           TenSP.value=findProduct.TenSP;
            Loai.value=findProduct.Loai ;
             HangSX.value=findProduct.HangSX;
            DonGia.value=findProduct.DonGia;
            SoLuong.value=findProduct.SoLuong;
            // console.log(name.value);
            console.log(TenSP.value);
            //  console.log(findProduct);
           handleUpdate(productId)
        }
        
    })
}

    // const add__product = document.querySelector(".add__product")
    // add__product.addEventListener("click",function(){
    //         handleShowModalAdd()
    // })
