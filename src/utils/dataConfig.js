import product from "../assets/images/product.png";
import pic1 from "../assets/images/pic 1.jpg";
import pic2 from "../assets/images/pic 2.png";
import pic3 from "../assets/images/pic 3.png";
import pic4 from "../assets/images/pic 4.png";
import pic5 from "../assets/images/pic 5.png";
import pic6 from "../assets/images/pic 6.png";
import pic7 from "../assets/images/pic 7.png";
import pic8 from "../assets/images/pic 8.png";
import pic9 from "../assets/images/pic 9.png";
import pic10 from "../assets/images/pic 10.png";
import picrb from "../assets/images/pic rb.png";
import picrt from "../assets/images/pic rt.png";
import ggPlay from "../assets/images/googleplay.png";
import appStore from "../assets/images/appstore.png";
import qrCode from "../assets/images/QR-code.png";
import logoShopee from "../assets/images/shopee-logo.png";
import logoShopeePrimary from "../assets/images/shopee-orange.png";
import mainRegisterImage from "../assets/images/mainRegisterImg.png";
import col1 from "../assets/images/col1.png";
import col2 from "../assets/images/col2.png";
import col3 from "../assets/images/col3.png";
import col4 from "../assets/images/col4.png";
import col5 from "../assets/images/col5.png";
import OrderPostItem from "../assets/images/OrderPostItem.jpg";
import Dangky from "../assets/images/DkBCC.png";
import footerLast from "../assets/images/footer-last.png";
import fb from "../assets/images/facebook.png";
import insta from "../assets/images/instagram.png";
import linkin from "../assets/images/LinkedIn.png";
import be from "../assets/images/Be.png";
import cod from "../assets/images/COD.png";
import master from "../assets/images/mastercard.png";
import visa from "../assets/images/visa.png";
import vnpost from "../assets/images/vnpost.png";
import shexp from "../assets/images/shexp.png";
import grab from "../assets/images/GrabExpress.png";
import shpay from "../assets/images/shpay.png";
// import cmtimg1 from "../assets/images/cmtimg1.png";
// import cmtimg2 from "../assets/images/cmtimg2.png";
import shopeecheckout from "../assets/images/shopeecheckout.png";
import googleIcon from "../assets/images/GoogleLoginLogo.png";
import facebookIcon from "../assets/images/facebook-icon.png";
import backgroundLogin from "../assets/images/backgroundLogin.png";

// Top Product Images
import topProductsWidgets0 from "../assets/images/topProductsWidgets0.png";
import topProductsWidgets1 from "../assets/images/topProductsWidgets1.png";
import topProductsWidgets2 from "../assets/images/topProductsWidgets2.png";
import topProductsWidgets3 from "../assets/images/topProductsWidgets3.png";

import topProductsImages0 from "../assets/images/topProductsImages0.png";
import topProductsImages1 from "../assets/images/topProductsImages1.png";
import defaultAvatar from "../assets/images/avatar.png";

export const limitProductRecommend = 12;
export const limitProductCollection = 15;
export const paginateNumberOfPageShow = 5; //must odd

export const sidebarNavItems = [
  {
    display: "T???ng quan",
    icon: <i className="bx bx-home"></i>,
    to: "/admin",
    section: "",
  },
  {
    display: "Danh m???c",
    icon: <i className="bx bx-category"></i>,
    to: "categories",
    section: "categories",
  },
  {
    display: "S???n ph???m",
    icon: <i className="bx bx-package"></i>,
    to: "products",
    section: "products",
  },
  {
    display: "Kh??ch h??ng",
    icon: <i className="bx bx-group"></i>,
    to: "customers",
    section: "customers",
  },
  {
    display: "????n h??ng",
    icon: <i className="bx bx-cart-alt"></i>,
    to: "orders",
    section: "orders",
  },
  {
    display: "????ng xu???t",
    icon: <i className="bx bx-log-out"></i>,
    to: "/login",
    section: "login",
  },
];

export const productDetailData = {
  title: "??o thun ???? banh phong c??ch retro, tho??ng m??t",
  info: {
    type: [
      {
        label: "??en-S",
        price: 1500000,
        inventory: 20,
      },
      {
        label: "??en-M",
        price: 1550000,
        inventory: 15,
      },
      {
        label: "??en-L",
        price: 1700000,
        inventory: 5,
      },
      {
        label: "??en-XL",
        price: 1900000,
        inventory: 8,
      },
    ],
    images: [
      "https://cf.shopee.vn/file/fb23c7e55781945ed3f95630defa6a6f_tn",
      "https://cf.shopee.vn/file/daf3a84864bcf230ea814195a5c38b7d",
      "https://cf.shopee.vn/file/a9a229f6b08b451d3d92062f917673a1_tn",
      "https://cf.shopee.vn/file/832b5af714e2ef73a2576a50f5206888_tn",
      "https://cf.shopee.vn/file/6db7b8e19dfae95069fb24322ce03d5e",
    ],
    ratingNumber: 44,
    soldNumber: 35,
  },
};

export const collectionData = {
  filterData: {},
  title: "C??c m???t h??ng",
  totalPage: 10,
  listProducts: [
    {
      title:
        "??o c???c tay nam, ??o ph??ng nam tay ng???n c??? tr??n Unisex ch???t thun cotton 4 chi???u m???m m???i",
      img: product,
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "??o c???c tay nam, ??o ph??ng nam tay ng???n c??? tr??n Unisex ch???t thun cotton 4 chi???u m???m m???i",
      img: "https://cf.shopee.vn/file/fb23c7e55781945ed3f95630defa6a6f_tn",
      price: 128000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "V??ng tay th??ng minh Xiaomi Redmi Smart Band Pro BHR5501GL M2101B1 Qu???c T???",
      img: "https://cf.shopee.vn/file/ff56cbcdadca0cbc0fce69ec4c71dda4",
      price: 50000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Tr??? g??p 0%- Xe M??y Yamaha MT15 ch??nh h??ng b???o h??nh 3 n??m",
      img: "https://cf.shopee.vn/file/458be3e6bab5d6928a65230e25a3fee5",
      price: 65900000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "D???u G???i ?????u Clear Men Deep Cleanse Than Ho???t T??nh ????nh Bay G??u, Ng???a V?? Vi Khu???n D?????ng T??c Kh???i Kh??i B???i 900G",
      img: "https://cf.shopee.vn/file/37840e921ddfdf208813c8f0ab3f52fe",
      price: 54000,
      star: 4,
      sold: 1500,
    },
    {
      title: "V??y Tr??? Vai B??nh B??o , ?????m D??? Ti???c r???t Vai M??u Tr???ng",
      img: "https://cf.shopee.vn/file/a087dee5a5719b38912cf275df661e8b",
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "B??? ga gi?????ng cotton tici cao c???p nh???p kh???u m???u m???i, drap thun b???c n???m",
      img: "https://cf.shopee.vn/file/b0ad7b9865d0d257b6837fcc28cb806f",
      price: 150000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Tranh V???i Canvas Treo T?????ng Trang Tr?? H??nh C???u Th??? Ronaldo",
      img: "https://cf.shopee.vn/file/38078bb9656bab0ec25e15063d5037f0",
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "SET VEST H??N QU???C 3 M??N TAY NG???N, SET VEST M???C ??I CH??I, SET BLAZER NG???N TAY",
      img: "https://cf.shopee.vn/file/44bc897f0c961eb925cbf5b328731e35",
      price: 99000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Apple iPhone 11 64GB",
      img: "https://cf.shopee.vn/file/4a10e843c4fc5d42876d7822a0548cf1",
      price: 22000000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "Set B??? Qu???n ??o B??ng ???? MU Training M??u ????? M??a 2021/22 - V???i Th??i Chu???n ??o Thi ?????u - ??o B??ng ???? MU",
      img: "https://cf.shopee.vn/file/5a4760b7e18be81c8ffe751ebd301a36",
      price: 180000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Gi??y Nike Air Force 1 V???t N??u",
      img: "https://cf.shopee.vn/file/eaa75da9571f0edcea405736d32eff45",
      price: 2300000,
      star: 4,
      sold: 1500,
    },
    {
      title: "??o KHO??C Hoodie TR??N 4 M??u Nam N??? Ulzzang Unisex",
      img: "https://cf.shopee.vn/file/90a19ba9896778cc7828f133412f0c76",
      price: 189000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Combo 2 N?????c gi???t Attack Kh??? M??i Extra Sport T??? Tin t??i 1.2kg",
      img: "https://cf.shopee.vn/file/0eab81c631e41a2f66cd5be80154c8fe",
      price: 178000,
      star: 4,
      sold: 1500,
    },
    {
      title: "D??p San??al N??? Caro Quai D??n Hot",
      img: "https://cf.shopee.vn/file/90a3247e06a1ff1589bd0d40c44cf7d7",
      price: 129000,
      star: 4,
      sold: 1500,
    },
  ],
};

export const recommendTodayData = {
  title: "G???i ?? h??m nay",
  items: [
    {
      title: "D??p San??al N??? Caro Quai D??n Hot",
      img: "https://cf.shopee.vn/file/90a3247e06a1ff1589bd0d40c44cf7d7",
      price: 129000,
      star: 4.5,
      sold: 1500,
    },
    {
      title: "Combo 2 N?????c gi???t Attack Kh??? M??i Extra Sport T??? Tin t??i 1.2kg",
      img: "https://cf.shopee.vn/file/0eab81c631e41a2f66cd5be80154c8fe",
      price: 178000,
      star: 3.5,
      sold: 1500,
    },
    {
      title: "Gi??y Nike Air Force 1 V???t N??u",
      img: "https://cf.shopee.vn/file/eaa75da9571f0edcea405736d32eff45",
      price: 2300000,
      star: 3,
      sold: 3500,
    },
    {
      title:
        "Set B??? Qu???n ??o B??ng ???? MU Training M??u ????? M??a 2021/22 - V???i Th??i Chu???n ??o Thi ?????u - ??o B??ng ???? MU",
      img: "https://cf.shopee.vn/file/5a4760b7e18be81c8ffe751ebd301a36",
      price: 180000,
      star: 5,
      sold: 2500,
    },
    {
      title: "Tranh V???i Canvas Treo T?????ng Trang Tr?? H??nh C???u Th??? Ronaldo",
      img: "https://cf.shopee.vn/file/38078bb9656bab0ec25e15063d5037f0",
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "V??ng tay th??ng minh Xiaomi Redmi Smart Band Pro BHR5501GL M2101B1 Qu???c T???",
      img: "https://cf.shopee.vn/file/ff56cbcdadca0cbc0fce69ec4c71dda4",
      price: 50000,
      star: 3,
      sold: 1500,
    },
    {
      title:
        "[S06-2XL] ??o kho??c nam ??o kho??t nam kaki ch???ng n???ng r??? from r???ng tr??n c???c ch???t si??u ch???t",
      img: product,
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "B??? ga gi?????ng cotton tici cao c???p nh???p kh???u m???u m???i, drap thun b???c n???m",
      img: "https://cf.shopee.vn/file/b0ad7b9865d0d257b6837fcc28cb806f",
      price: 150000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Tranh V???i Canvas Treo T?????ng Trang Tr?? H??nh C???u Th??? Ronaldo",
      img: "https://cf.shopee.vn/file/38078bb9656bab0ec25e15063d5037f0",
      price: 69000,
      star: 4,
      sold: 1500,
    },
    {
      title: "Tr??? g??p 0%- Xe M??y Yamaha MT15 ch??nh h??ng b???o h??nh 3 n??m",
      img: "https://cf.shopee.vn/file/458be3e6bab5d6928a65230e25a3fee5",
      price: 65900000,
      star: 4,
      sold: 1500,
    },
    {
      title:
        "D???u G???i ?????u Clear Men Deep Cleanse Than Ho???t T??nh ????nh Bay G??u, Ng???a V?? Vi Khu???n D?????ng T??c Kh???i Kh??i B???i 900G",
      img: "https://cf.shopee.vn/file/37840e921ddfdf208813c8f0ab3f52fe",
      price: 54000,
      star: 4,
      sold: 1500,
    },
    {
      title: "V??y Tr??? Vai B??nh B??o , ?????m D??? Ti???c r???t Vai M??u Tr???ng",
      img: "https://cf.shopee.vn/file/a087dee5a5719b38912cf275df661e8b",
      price: 69000,
      star: 4,
      sold: 1500,
    },
  ],
};

export const bannerTopData = {
  title: "SI??U SHOP TH???NH H??NH - BUNG DEAL SI??U PH???M",
  items: [
    {
      title: "FREESHIP & HO??N XU",
      img: col1,
      price: " 2.000??",
    },
    {
      title: "SHOP XU H?????NG",
      img: col2,
      price: " 2.990??",
    },
    {
      title: "H??NG QU???C T???",
      img: col3,
      price: " 14.000??",
    },
    {
      title: "SHOPEE MALL",
      img: col4,
      price: " 20.000??",
    },
    {
      title: "SHOP H??NG X?????NG",
      img: col5,
      price: " 40.000??",
    },
  ],
};

export const heroBannerData = {
  normalPic: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10],

  abovePic: picrt,
  bottomPic: picrb,
};

let collection_name = "Th???i trang nam";
export const Collection__filter = {
  heading_title: {
    collection_name,
  },
  Search__filter: ["??o thun tr???ng", "??o Vest", "Qu???n Jeans"],
};

export const headerData = {
  images: {
    ggPlay,
    appStore,
    qrCode,
    logoShopee,
    logoShopeePrimary,
  },
  searchRecommend: ["??o nam", "V??y", "Qu???n d??i", "Qu???n ????i"],
};

export const productDetailDescriptionData = {
  detail: [
    {
      label: "Xu???t x???",
      content: "Vi???t Nam",
    },
    {
      label: "Chi???u d??i tay ??o",
      content: "D??i 3/4",
    },
    {
      label: "Ch???t li???u",
      content: "Cotton",
    },
    {
      label: "Kho h??ng",
      content: "15",
    },
    {
      label: "G???i t???",
      content: "N?????c ngo??i",
    },
  ],
  describe: [
    "N??m nay x?????ng v???n l??n ph???c v??? m???i ng?????i nh??",
    "Di???n team, m???c ????i ??ng x??u",
    "Freesize: Form d?????i 65kg ?????p nha!",
    "Gi?? s???c t???n x?????ng",
    "M???u m???i c???p nh???t li??n t???c nha!",
  ],
};

export const peInfoPostItemData = {
  orders: [
    {
      createdDate: "2022-08-02T21:31:43.000+00:00",
      modifiedDate: "2022-08-02T21:31:43.000+00:00",
      id: 7,
      status: "DONE",
      userName: "thanhnha",
      address: "s??? 1, V?? V??n Ng??n s??? 1, V?? V??n Ng??n s??? 1, V?? V??n Ng??n",
      phone: "0910013241",
      note: "Giao ?????n ?????a ch??? m???i",
      payment: "Thanh to??n khi nh???n h??ng",
      shippingFee: 29000,
      totalPrice: 100000,
      userId: 1,
      item: [
        {
          image: OrderPostItem,
          title: "??o thu n??? c?? ng?????i y??u ??o thu n??? c?? ng?????i y??u",
          type: "Xanh, L",
          quantity: 1,
          status: "Ch??? x??c nh???n",
          price: 99999,
          ratingText: "????nh gi??",
        },
    
        {
          image: OrderPostItem,
          title:
            "??o thu n??? c?? ng?????i y??u c?? ng?????i y??u c?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??u ",
          type: "Xanh, L",
          quantity: 1,
          status: "???? x??c nh???n",
          price: 99999,
          ratingText: "????nh gi??",
        },
    
        {
          image: OrderPostItem,
          title: "??o thu n??? c?? ng?????i y??u",
          type: "Xanh, L",
          quantity: 1,
          status: "???? h???y",
          price: 99999,
          ratingText: "????nh gi??",
        },
      ],
    },
    {
      createdDate: "2022-08-04T02:56:13.000+00:00",
      modifiedDate: "2022-08-04T09:38:41.000+00:00",
      id: 13,
      status: "CANCELED",
      userName: "thanhnha",
      address: "s??? 1, V?? V??n Ng??n",
      phone: "0910013241",
      note: "Giao ?????n ?????a ch??? m???i",
      payment: "Thanh to??n khi nh???n h??ng",
      shippingFee: 29000,
      totalPrice: 600000,
      userId: 1,
      item: [
        {
          image: OrderPostItem,
          title: "??o thu n??? c?? ng?????i y??u ??o thu n??? c?? ng?????i y??u",
          type: "Xanh, L",
          quantity: 1,
          status: "Ch??? x??c nh???n",
          price: 99999,
          ratingText: "????nh gi??",
        },
    
        {
          image: OrderPostItem,
          title:
            "??o thu n??? c?? ng?????i y??u c?? ng?????i y??u c?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??uc?? ng?????i y??u ",
          type: "Xanh, L",
          quantity: 1,
          status: "???? x??c nh???n",
          price: 99999,
          ratingText: "????nh gi??",
        },
    
        {
          image: OrderPostItem,
          title: "??o thu n??? c?? ng?????i y??u",
          type: "Xanh, L",
          quantity: 1,
          status: "???? h???y",
          price: 99999,
          ratingText: "????nh gi??",
        },
      ],
    },
  ],
};

export const categoryData = {
  title: "Danh M???c",
  items: [
    {
      title: "Th???i trang nam",
      img: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    {
      title: "??i???n tho???i",
      img: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    },
    {
      title: "Thi???t b??? ??i???n t???",
      img: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    },
    {
      title: "M??y t??nh",
      img: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
    },
    {
      title: "M??y ???nh",
      img: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    },
    {
      title: "?????ng h???",
      img: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
    },
    {
      title: "Th???i trang n???",
      img: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    },
    {
      title: "M??? v?? b??",
      img: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
    },
    {
      title: "Nh?? c???a",
      img: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
    },
    {
      title: "S???c ?????p",
      img: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
    },
    {
      title: "S???c kh???e",
      img: "https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
    },
    {
      title: "Gi??y d??p n???",
      img: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
    },
    {
      title: "Gi??y d??p nam",
      img: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    },
    {
      title: "????? gia d???ng",
      img: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
    },
    {
      title: "Th??? thao",
      img: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    },
    {
      title: "Xe m??y",
      img: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
    },
    {
      title: "B??ch h??a",
      img: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
    },
    {
      title: "Nh?? s??ch",
      img: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
    },
    {
      title: "????? ch??i",
      img: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
    },
    {
      title: "Gi???t gi??",
      img: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
    },
  ],
};

export const productCategory = {
  category: "Main Category",
  subCategory: "SubCategory",
  item: "Items",
};

export const footerData = {
  img: {
    Dangky,
    footerLast,
    fb,
    insta,
    linkin,
    grab,
    be,
    visa,
    master,
    cod,
    shpay,
    shexp,
    vnpost,
  },
  counTry: [
    "Vi???t Nam",
    "Singapore",
    "Th??i Lan",
    "????i Loan",
    "Philippines",
    "Brazil",
  ],

  counTryTitle: [
    "Singapore,",
    "Maylasia,",
    "Indonesia,",
    "Th??i Lan,",
    "Philippines,",
    "Brazil,",
    "????i Loan,",
    "Colombia,",
    "Poland",
  ],

  takeCare: [
    "Trung t??m tr??? gi??p",
    "Shopee Blog",
    "Shopee Mall",
    "Thanh To??n",
    "V???n chuy???n",
  ],

  about: [
    "??i???u kho???n Shopee",
    "Ch??nh s??ch b???o m???t",
    "Ch??nh h??ng",
    "Flash sales",
    "Li??n h??? v???i truy???n th??ng",
  ],
  policy: [
    "CH??NH S??CH B???O M???T",
    "QUY CH??? HO???T ?????NG",
    "CH??NH S??CH V???N CHUY???N",
    "CH??NH S??CH TR??? H??NG V?? HO??N TI???N",
  ],
};

export const rating = {
  rate: [-1, 5, 4, 3, 2, 1, -2, -3],
};
export const checkout = {
  img: {
    shopeecheckout,
  },
};

export const checkoutInfo = {
  item: [
    {
      userName: "user1",
      phone: "(+84)01234567",
      address: "48 B??i Th??? Xu??n",
    },
  ],
};

export const commentSection = {
  comment: [
    {
      username: "hanh",
      mate: "mem muot",
      comment: "giao hang nhanh",
    },
    {
      username: "hanh",
      mate: "mem muot",
      comment: "giao hang sieu nhanh",
    },
    {
      username: "hanh",
      mate: "mem muot",
      comment: "that tuyet voi",
    },
  ],
};

export const newsBanner = {
  title: "News",
  items: [
    {
      title: "Marketing News",
      img: "https://cf.shopee.vn/file/672e6ed7e4f93c272a620c425092fb8c",
    },
    {
      title: "Marketing News",
      img: "https://cf.shopee.vn/file/b5f23d30bab9efcdb87d034140652487",
    },
    {
      title: "Marketing News",
      img: "https://cf.shopee.vn/file/672e6ed7e4f93c272a620c425092fb8c",
    },
    {
      title: "Marketing News",
      img: "https://cf.shopee.vn/file/b5f23d30bab9efcdb87d034140652487",
    },
  ],
};
// export const productCategory = {
//   category: "Main Category",
//   subCategory: "SubCategory",
//   item: "Items"
// }
export const listAddressData = {
  listAddress: [
    {
      id: 1,
      fullname: "Nguy???n V??n A",
      phone_number: "0123 123 123",
      address: "TPHCM, Viet Nam",
      default: true,
    },
    {
      id: 2,
      fullname: "Nguy???n V??n B",
      phone_number: "0123 456 789",
      address: "HN, Viet Nam",
      default: false,
    },
    {
      id: 3,
      fullname: "Nguy???n V??n C",
      phone_number: "0123 987 654",
      address: "DN, Viet Nam",
      default: false,
    },
    {
      id: 4,
      fullname: "Nguy???n V??n D",
      phone_number: "0123 987 654",
      address: "DN, Viet Nam",
      default: false,
    },
  ],
};
export const averageStarRating = {
  count: 3,
};

export const CommentSectionData = {
  avatar:
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
  username: "Marc Levi",
  star: 4,
  time: "2022-07-17 22:56",
  comments:
    "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
  feedbackImg: [
    "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
  ],
};

export const commentSectionFullData = [
  {
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
    username: "Marc Levi 1 sao",
    star: 1,
    time: "2022-07-17 22:56",
    comments:
      "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
    feedbackImg: [
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    ],
  },
  {
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
    username: "Marc Levi 2 sao",
    star: 2,
    time: "2022-07-17 22:56",
    comments:
      "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
    feedbackImg: [
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    ],
  },
  {
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
    username: "Marc Levi 3 sao",
    star: 3,
    time: "2022-07-17 22:56",
    comments:
      "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
    feedbackImg: [
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    ],
  },
  {
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
    username: "Marc Levi 4 sao",
    star: 4,
    time: "2022-07-17 22:56",
    comments:
      "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
    feedbackImg: [
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    ],
  },
  {
    avatar:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4bQAqpo78aONOVEKlSmPsJkK_N5cPualk-KJkW2nuNXcCP07J",
    username: "Marc Levi 5 sao",
    star: 5,
    time: "2022-07-17 22:56",
    comments:
      "??u ti??n cao nh???t c???a ch??ng t??i l?? th???a m??n kh??ch h??ng th??ng qua vi???c chuy???n giao s???m v?? li??n t???c c??c ph???n m???m c?? gi?? tr???. Ch??o ????n vi???c thay ?????i y??u c???u, th???m ch?? r???t mu???n trong qu?? tr??nh ph??t tri???n. C??c quy tr??nh linh ho???t t???n d???ng s??? thay ?????i cho c??c l???i th??? c???nh tranh c???a kh??ch h??ng. Th?????ng xuy??n chuy???n giao ph???n m???m ch???y t???t t???i kh??ch h??ng, t??? v??i tu???n ?????n v??i th??ng, ??u ti??n cho c??c kho???ng th???i gian ng???n h??n. Nh?? kinh doanh v?? nh?? ph??t tri???n ph???i l??m vi???c c??ng nhau h??ng ng??y trong su???t d??? ??n. X??y d???ng c??c d??? ??n xung quanh nh???ng c?? nh??n c?? ?????ng l???c. Cung c???p cho h??? m??i tr?????ng v?? s??? h??? tr??? c???n thi???t, v?? tin t?????ng h??? ????? ho??n th??nh c??ng vi???c. Ph????ng ph??p hi???u qu??? nh???t ????? truy???n ?????t th??ng tin t???i nh??m ph??t tri???n v?? trong n???i b??? nh??m ph??t tri???n l?? h???i tho???i tr???c ti???p.",
    feedbackImg: [
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
      "https://cdn.tgdd.vn/Files/2021/07/23/1370265/hoa-cai-vang-y-nghia-cong-dung-va-cach-trong-hoa-dep-cuc-thu-hut-202107231143138186.jpg",
    ],
  },
];

export const customerTable = {
  info: [
    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },

    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },
    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },

    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },

    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },

    {
      user: "Nguyen Van A",
      time: "2022-7-23",
      email: "NguyenVA@gmail.com",
    },
  ],
};

export const registerData = {
  logo: {
    logoShopeePrimary,
  },
  bodyImage: {
    mainImage: mainRegisterImage,
    mainImageTemp: "https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba",
  },
};

export const imageDataLogin = {
  images: [facebookIcon, googleIcon, backgroundLogin],
};

export const topProductsWidgets = [
  {
    name: "Total Visits",
    img: topProductsWidgets0,
    val: 10800000,
  },
  {
    name: "Total Sales",
    img: topProductsWidgets1,
    val: 100345000,
  },
  {
    name: "Total Made",
    img: topProductsWidgets2,
    val: 200000,
  },
  {
    name: "Orders Completed",
    img: topProductsWidgets3,
    val: 98771,
  },
];

export const topProductsImages = [
  {
    name: "Samsung S20 128 GB",
    img: topProductsImages0,
    color: "Pink",
    orders: 50,
    columns: {
      Inventory: 700,
      Sold: 69,
      Pricing: 99999,
      Today: 99999,
    },
  },
  {
    name: "Samsung S21 256 GB",
    img: topProductsImages1,
    color: "Black",
    orders: 25,
    columns: {
      Inventory: 200,
      Sold: 69,
      Pricing: 99999,
      Today: 99999,
    },
  },
];

export const allProducts = {
  typeLabel: ["Lo???i", "Gi?? ti???n", "T???n kho"],
};

export const adminChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  salesMonth: {
    lastYear: [100000, 300000, 500000, 700000, 900000, 110000, 210000, 180000, 110000, 390000, 500000, 700000],
    nowYear: [2100, 1800, 100, 300, 500, 700, 100, 300, 500, 700, 900, 1100],
  },
  totalRevenue: 100000000, //tong thu nhap trong nam hien tai
};

export const dataLoginUser = {
  userName: "Nh??m 06",
  image: defaultAvatar,
};

export const checkOutData = {
  checkOutData: [
    {
      id: 1,
      name: "S???n ph???m test",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 163000,
      type: "vip1",
      taste: "Mix 3 v???",
      amount: 2,
    },
    {
      id: 1,
      name: "S???n ph???m test",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 163000,
      type: "vip1",
      taste: "Mix 3 v???",
      amount: 1,
    },
  ],
  total: 163000,
};

export const fullCartData = {
  fullCartData: [
    {
      id: 1,
      name: "??O KHO??C KAKI NAM FORM SI??U R???NG 80KG",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 100000,
      type: "Kem, L",
      amount: 2,
    },
    {
      id: 2,
      name: "??O KHO??C KAKI NAM FORM SI??U R???NG 80KG",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 200000,
      type: "Kem, L",
      amount: 1,
    },
    {
      id: 3,
      name: "??O KHO??C KAKI NAM FORM SI??U R???NG 80KG",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 300000,
      type: "Kem, L",
      amount: 1,
    },
    {
      id: 4,
      name: "??O KHO??C KAKI NAM FORM SI??U R???NG 80KG",
      img: "https://cf.shopee.vn/file/617597de972609215b1a063745a96e40_tn",
      price: 100000,
      type: "Kem, L",
      amount: 1,
    },
  ],
  total: 800000,
};

export const categoryList = [
  {
    id: 0,
    name: "category 0",
    subCategory: [
      {
        id: 0,
        name: "sub category 0",
      },
      {
        id: 1,
        name: "sub category 1",
      },
      {
        id: 2,
        name: "sub category 2",
      },
    ],
  },
  {
    id: 1,
    name: "category 1",
    subCategory: [
      {
        id: 0,
        name: "sub category 0",
      },
    ],
  },
  {
    id: 2,
    name: "category 2",
    subCategory: [
      {
        id: 0,
        name: "sub category 0",
      },
      {
        id: 1,
        name: "sub category 1",
      },
    ],
  },
];

export const subCategoryList = [
  {
    id: 0,
    name: "??o thun 0",
  },
  {
    id: 1,
    name: "??o thun 1",
  },
  {
    id: 2,
    name: "??o thun 2",
  },
  {
    id: 3,
    name: "??o thun 3",
  },
  {
    id: 4,
    name: "??o thun 4",
  },
  {
    id: 5,
    name: "??o thun 5",
  },
];
export const adminOrderData = {
  field: ["Order ID", "Date", "Status", "Customer", "Amount", "Action"],
  customer: [
    {
      id: "1",
      orderID: "1",
      date: "10/10/2020 10:10:10",
      orderStatus: "Pending",
      customerInfo: "John Smith",
      amount: "200000",
    },
    {
      id: "2",
      orderID: "2",
      date: "10/10/2020 10:10:10",
      orderStatus: "Shipping",
      customerInfo: "Hermingways",
      amount: "200000",
    },
    {
      id: "3",
      orderID: "3",
      date: "10/10/2020 10:10:10",
      orderStatus: "Done",
      customerInfo: "Shakespeare",
      amount: "200000",
    },
    {
      id: "4",
      orderID: "4",
      date: "10/10/2020 10:10:10",
      orderStatus: "Done",
      customerInfo: "Marc Levi",
      amount: "200000",
    },
    {
      id: "5",
      orderID: "5",
      date: "10/10/2020 10:10:10",
      orderStatus: "Done",
      customerInfo: "John London",
      amount: "200000",
    },
    {
      id: "6",
      orderID: "6",
      date: "10/10/2020 10:10:10",
      orderStatus: "Cancelled",
      customerInfo: "Robert Calvin",
      amount: "200000",
    },
  ],
};
