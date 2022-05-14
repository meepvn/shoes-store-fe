//icon
function handle() {
  const listElement = document.getElementsByClassName("menu__taplet--mobile");
  if (listElement.length) {
    const firstElement = listElement[0];
    firstElement.classList.toggle("show");
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
const arr = [
  {
    MaSP: 1,

    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: 180000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 2,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: 230000,
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 3,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: 235000,

    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 4,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 5,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Xanh lam",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 6,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Xám",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 7,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày da Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 8,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 9,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 10,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Jordan Nam",
    color: "Xám",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 11,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Jordan Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 12,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Jordan Nam",
    color: "Xanh lam",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 13,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Jordan Nam",
    color: "Hồng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 14,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao adidas Nam",
    color: "Xanh lam",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 15,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao adidas Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 16,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao adidas Nam",
    color: "Đen",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 17,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao adidas Nam",
    color: "Hồng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 18,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nike Nam",
    color: "Hồng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 19,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nike Nam",
    color: "Đen",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 20,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nike Nam",
    color: "Xanh lam",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 21,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nike Nam",
    color: "Xám",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 22,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 23,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Xanh lam",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 24,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 25,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Xám",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 26,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Xanh lá",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 27,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Hồng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 28,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Xám",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 29,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày quần vợt Nam",
    color: "Đỏ",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 30,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Nâu",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 31,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Xanh đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 32,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày bata Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 33,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày bata Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "200.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Đen",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày thể thao Nam",
    color: "Trắng",
    DonGia: "235.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
  {
    MaSP: 1,
    ImageName: "./../images/mwc.jpg",
    TenSP: "Giày mọi Nam",
    color: "Trắng",
    DonGia: "232.000 vnđ",
    SoLuong: "10",
    Loai: "Giay the thao",
    HangSX: "Sneaker",
  },
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
    item.innerHTML = `
            <div class="item-img show-detail">
                <img src="${pageItem.ImageName}" alt="">
            </div>
            <div class="item-content">
            <span class="item-name show-detail"><a href="">${pageItem.TenSP}</a></span>
                <span class="color"> - ${pageItem.color}</span>
                <p class="item-price">${pageItem.DonGia}</p>
            </div>
        `;
    list.appendChild(item);
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
console.log(listBtn);
for (let index = 0; index < listBtn.length; index++) {
  const btnItem = listBtn[index];
  console.log(btnItem);
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
              <div class="item-img show-detail">
                  <img src="${record.ImageName}" alt="">
              </div>
              <div class="item-content">
                  <span  class="item-name show-detail"><a href="">${record.TenSP}</a></span>
                  <span class="color"> - ${record.color}</span>
                  <p class="item-price">${record.DonGia}</p>
              </div>
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
    return element.name
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
    return element.name
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
    this.classList.toggle("active");
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
function handleToggleModal() {
  const listModalElement = document.querySelector(".modal-click");
  const clickDetail = document.querySelectorAll(".show-detail");
  clickDetail.forEach((item) => {
    item.onclick = () => {
      console.log(item);
      listModalElement.classList.toggle("show-modal");
    };
  });
  // if(listModalElement.length)
  // {
  //     const modalElement= listModalElement[0]
  //     modalElement.classList.toggle("show-modal");
  // }
}
handleToggleModal();
// so luong sp
const decrease = document.querySelector(".decrease");
console.log(decrease);
const increase = document.querySelector(".increase");
const countNumber = document.querySelector(".count-number");

decrease.onclick = () => {
  console.log(decrease);
  if (countNumber.value <= 1) {
    decrease.style.background = "#eee";
    return;
  }
  countNumber.value--;
};

increase.onclick = () => {
  countNumber.value++;
  decrease.style.background = "#999";
};
//
// function cong(){
//   var tt = document.getElementById("textbox").value ;
//   document.getElementById("textbox").value = parseInt(tt) + 1;
// }
// function tru(){
//   var tt1 = document.getElementById("textbox").value ;
//   if (textbox.value <= 1) {
//     return;
//   }
//   document.getElementById("textbox").value = parseInt(tt1) - 1;
// }
//
const currentNumber = 1;
function handleCount(element) {
  if (element === "tru") {
    currentNumber--;
  } else if (element === "cong") {
    currentNumber++;
  }
}

//
const hideBtn = document.querySelector("#hide"); //icon
const hehehe = document.querySelector(".modal-click");
hideBtn.addEventListener("click", () => {
  hehehe.classList.toggle("show-modal");
});

//showModal
function handleShowdetail(){
  const imgModal=document.querySelector(".img-modal")
  const title=document.querySelector(".title-modal")
  const priceModal=document.querySelector(".price-modal")
  const clickProduct = document.querySelectorAll(".showDetail")
    clickProduct.forEach((item)=>{
      item.onclick=()=>{
        const result = document.querySelector(".modal-detail.hidden")
        result.classList.remove("hidden")
    const imgName=item.getAttribute("src")
    const name = item.parentElement.querySelector(".name").innerText
    const price = item.parentElement.querySelector(".price").innerText
    imgModal.setAttribute("src",imgName)
    title.innerText=name;
    priceModal.innerText=price;
    }
  })
}
handleShowdetail()