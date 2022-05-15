//data
const arrNam = [
    {
        id: 1,
        image: './../images/mwc.jpg',
        name: 'Giày thể thao Nam',
        color:'đen',
        price: 10000
    },
    {
        id: 2,
        image: './../images/mwc.jpg',
        name: 'Hiệp Bịp',
        price: 30000
    },
    {
        id: 3,
        image: './../images/mwc.jpg',
        name: 'iphone2',
        price: 40000
    },
    {
        id: 4,
        image: './../images/mwc.jpg',
        name: 'iphone3',
        price: 50000
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone4',
        price: 60000
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone5',
        price: 70000
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone8',
        price: 80000
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone9',
        price: 90000
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone10',
        price: 100000
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 13,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 14,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 15,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 16,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 17,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 18,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 19,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 20,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 21,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 22,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 23,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 24,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 25,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 26,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 27,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 28,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 20,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 30,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 31,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 32,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 33,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 34,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 35,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 36,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 37,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 38,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 39,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 40,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 41,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 42,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 43,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 44,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 45,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 46,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },{
        id: 47,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 48,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 49,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 50,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 51,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 52,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 53,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 54,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 55,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 56,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 57,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 58,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 59,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    },
    {
        id: 60,
        image: 'https://images.unsplash.com/photo-1649859397268-251f729c4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB...70&q=80',
        name: 'iphone11',
        price: 110000
    }
];

let pages = 1 ;
const rows = 20;
const listElement = document.querySelector("#list");
const paginationElement = document.querySelector(".pagination");
console.log(paginationElement);

const display = (items, list , rows , pages) => {
    list.innerHTML = "";
    pages--;

    const start = rows*pages;
    const end = start + rows;

    const paginationItem = items.slice(start, end);

    for (let index = 0; index < paginationItem.length; index++) {
const pageItem = paginationItem[index];
        console.log(pageItem);
        const item = document.createElement("div");
        item.classList.add('item')
        item.innerHTML = `
            <div class="item-img">
                <img src="${pageItem.image}" alt="">
            </div>
            <div class="item-content">
                <h3 class="item-name">${pageItem.name}</h3>
                <p class="item-price">${pageItem.price}</p>
            </div>
        `
        list.appendChild(item);
    }
}

display(arrNam , listElement , rows , pages);

const totalPages = Math.ceil(arrNam.length / rows);
for (let index = 0; index < totalPages; index++) {
    const pageBtn = document.createElement("button");
    const btnItem = index + 1;
    pageBtn.classList.add("btn-pagination")
    pageBtn.innerText = btnItem;

    paginationElement.appendChild(pageBtn);
}

const listBtn = document.querySelectorAll(".btn-pagination");
console.log(listBtn);
for (let index = 0; index < listBtn.length; index++) {
    const btnItem = listBtn[index];
    console.log(btnItem);
    btnItem.addEventListener("click", function(){
        let index1 = btnItem.innerText;
        pages = index1;
        display(arrNam , listElement , rows , pages);
    })
}
//tìm kiếm
function renderData(arrNam){
    const result = document.querySelector("#list");
    const html = arrNam.map(record => {
      return `
              <div class="item">
                <div class="item-img">
                    <img src="${record.image}" alt="">
                </div>
                <div class="item-content">
                    <h3 class="item-name">${record.name}</h3>
                    <p class="item-price">${record.price}</p>
                </div>
              </div>
      `
    })
    result.innerHTML = html.join('');
  }
  
  const input = document.querySelector("#search");
  console.log(input)
  input.addEventListener('input',function(event) {
    console.log(arrNam);
    const find = arrNam.filter(element => {
      return element.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    const html = document.querySelector("#list")
    html.innerHTML = "";
    renderData(find);
  })
  const input1 = document.querySelector("#searchResponsive");
  console.log(input1)
  input1.addEventListener('input',function(event) {
    console.log(arrNam);
    const find = arrNam.filter(element => {
      return element.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    const html = document.querySelector("#list")
    html.innerHTML = "";
    renderData(find);
  })