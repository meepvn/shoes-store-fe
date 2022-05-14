const customerAPI = "http://localhost:3100/api/customer"
// get dữ liệu bằng API

let listCustomer=[]
function getData(){
 fetch(customerAPI)
.then(res=>{
    return res.json(); 
})
.then(customer=>{
    listCustomer=[...customer];
    renderData(listCustomer)
})
}
function renderData(arr){
 const result=document.querySelector("#tbl")
    const html =arr.map(record => {
        return`
        <tr class="customer-${record.MaKH}">
            <td>${record.MaKH}</td>
            <td>${record.TenKH}</td>
            <td>${record.SDT}</td>
            <td>${record.DiaChi}</td>
            <td>${record.Email}</td>
            <td><button class="btn update" customer-id= "${record.MaKH}" onClick="showModalUpdate(this)">Sửa</button></td>
            <td><button class="btn delete" onclick="handleClickDele(${record.MaKH})">Xóa</button></td>
        </tr>`
    })     
    result.innerHTML += html.join('');
}
getData();

// Thêm khách hàng
const name = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');
const address = document.querySelector('input[name="address"]');
const email = document.querySelector('input[name="email"]');
console.log(name,phone,address);
function add(data){
    var Option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    fetch("http://localhost:3100/api/customer",Option)
    .then(res=>{
        return res.json(); 
    })
    .then(function(record){
        console.log(record.insertedData)
        var node = document.createElement("tr")
        const html =
        `<tr class="customer-${record.insertedData.id}">
        <td>${record.insertedData.id}</td>
        <td>${record.insertedData.TenKH}</td>
        <td>${record.insertedData.SDT}</td>
        <td>${record.insertedData.DiaChi}</td>
        <td>${record.insertedData.Email}</td>
        <td><button class="btn update" customer-id="${record.insertedData.id}" onClick="showModalUpdate(this)">Sửa</button></td>
        <td><button class="btn delete" onclick="handleClickDele(${record.insertedData.id})">Xóa</button></td>
    </tr>`
    
        node.innerHTML +=html;
        console.log(node);
        const result = document.querySelector('#tbl')
        if(result){
            result.appendChild(node)
        }
        })
    
}




// reset form
function resetForm(){
    name.value="";
    phone.value="";
    address.value="";
    email.value=""
}
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
// Sửa thông tin khách hàng

function handleUpdate(id) { 
    const name = document.querySelector('input[name="nameUpdate"]');
    const phone = document.querySelector('input[name="phoneUpdate"]');
    const address = document.querySelector('input[name="addressUpdate"]');
    const email = document.querySelector('input[name="emailUpdate"]');
    //  console.log("ạdaklfja",id);
    const btnUpdate=document.querySelector("#btn-update")
    btnUpdate.onclick=function(){
        listCustomer=listCustomer.map((item)=>{
            if(item.MaKH==id){
                item.TenKH=name.value;
                item.SDT=phone.value;
                item.DiaChi=address.value;
                item.Email=email.value;
            }
            return item
        })

        const data={
            name:name.value,
            phone:phone.value,
            address:address.value,
            email:email.value
        }
        const html=document.querySelector("#tbl");
        html.innerHTML="";
        renderData(listCustomer)
        // console.log(newListCustomer);
        autoHidden()
        const Option={
            method:"PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
              }
        
    }
    
    fetch( `http://localhost:3100/api/customer/${id}/edit`,Option
    )
    .then(res=>{
        return res.json();
    })
    .then((result)=>{
        console.log(result);
    })

    }
}

//Xóa Thông tin khách hàng
function handleClickDele(id){ 
    fetch( `http://localhost:3100/api/customer/${id}`,
    {
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then(res=>{
        return res.json();
    })
    .then(()=>{
        const result = document.querySelector(`.customer-${id}`)
        console.log(result)
        if(result){
           result.remove();
        }
    })

}
//Tìm kiếm khách hàng

// function handleSearchCustomer(){
    // const input = document.querySelector('#search')
    
        
    const input = document.querySelector('#search')
input.addEventListener('input',function(event){
     console.log(listCustomer);
        const find = listCustomer.filter(Element=>{
            console.log(Element.TenKH);
            return Element.TenKH.toLowerCase().includes(stringToSlug(event.target.value.toLowerCase()))
    });
    const html=document.querySelector("#tbl")
    html.innerHTML+=""
    renderData(find)
})
    
// }
// handleSearchCustomer()

// show or hidden modal
function autoHidden(){
    const result= document.querySelector(".modal.show")
    result.classList.remove("show");
    result.classList.add("hidden")
}
function handleHiddenModal(){
    const btn= document.querySelectorAll(".close")
    btn.forEach((item)=>{
        item.onclick = function(){
                autoHidden();
        }
    })
}
const btn= document.querySelector(".btn__add")
    console.log(btn);
function handleShowModalAdd(){
    const result= document.querySelector(".modal-add.hidden")
    const btn= document.querySelector(".btn__add")
    console.log(btn);
    btn.onclick=function(){
        result.classList.remove("hidden");
        result.classList.add("show")

    }
}
function showModalUpdate(event){
    const update=document.querySelectorAll(".update")
    const result= document.querySelector(".modal-update.hidden")
    update.forEach(item=>{
        item.onclick=function(){
            result.classList.remove("hidden")
            result.classList.add("show")
            const customerId=item.getAttribute('customer-id')
            // console.log(customerId);
            // đổ dữ liệu lên form
            const findCustomer=listCustomer.find(item=>{
                if(item.MaKH==customerId)
                return true
                return false
            })
            const name = document.querySelector('input[name="nameUpdate"]');
            const phone = document.querySelector('input[name="phoneUpdate"]');
            const address = document.querySelector('input[name="addressUpdate"]');
            const email = document.querySelector('input[name="emailUpdate"]');
            
            // console.log(findCustomer.TenKH);
            
            name.value=findCustomer.TenKH;
            phone.value=findCustomer.SDT;
            address.value=findCustomer.DiaChi;
            email.value=findCustomer.Email;
            // console.log(name.value);
            //  console.log(findCustomer);
           handleUpdate(customerId)
        }
        
    })
}

    

    // const delete__customer= document.querySelector(".delete");
    // console.log(delete__customer);
    // delete__customer.addEventListener("click",function(e){
    //     const customerId=document.getAttribute('customer-id');
    //     confirm('Bạn có chắc chắn xóa ? ');
    //     if(confirm) handleClickDele(customerId)  
    // })
    // validate form thêm khách hàng
    
    function showError(input,messege)
    {
        let parent = input.parentElement;
        let small=parent.querySelector('small')
        parent.classList.add("error")
        small.innerText=messege
    }
    function showSuccsess(input)
    {
        let parent = input.parentElement;
        let small=parent.querySelector('small')
        parent.classList.remove("error")
        small.innerText=""
    }
    // showSuccsess(name)
    // showError(name,"Không để trống thông tin")
    function checkEmtyValue(listInput)
    {  let isEmtyValue = false;
        listInput.forEach(input=>{
            input.value=input.value.trim();
            if(input.value=="")
            {
                isEmtyValue=true
                showError(input,"Vui lòng không được để trống thông tin")
            }
            else
            {showSuccsess(input)};
        })
        return isEmtyValue;
    }
    function checkEmail(input){
        let validateEmail=false;
        var regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        input.value = input.value.trim();
        if(!regexEmail.test(input.value)){
            validateEmail =true;
            showError(input,"name@gmail.com mời nhập theo mẫu ")    
        }
        else(
            showSuccsess(input)
        )
        return validateEmail
    }
    const result= document.querySelector("#btn-add")
    result.onclick =  function(e){
        // e.peventDefault()
        
        const checkAll= checkEmtyValue([name,phone,address,email])
        const checkIsEmTyEmail = checkEmail(email)
        if( checkAll || checkIsEmTyEmail){
            console.log(checkAll,checkIsEmTyEmail);
            return;

        }
        else{
            var data={
                TenKH:name.value,
                SDT:phone.value,
                DiaChi:address.value,
                Email:email.value
            }
            console.log(data)
            add(data)
            resetForm();
            autoHidden();
        }
        
    }
    const add__customer = document.querySelector(".btn__add")
    add__customer.addEventListener("click",()=>{
        
        handleShowModalAdd()
    })
    
    