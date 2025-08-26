// Women Products
import womenp_1 from './product_1.png'
import womenp_2 from './product_2.png'
import womenp_3 from './product_3.png'
import womenp_4 from './product_4.png'
import womenp_5 from './product_5.png'
import womenp_6 from './product_6.png'
import womenp_7 from './product_7.png'
import womenp_8 from './product_8.png'
import womenp_9 from './product_9.png'
import womenp_10 from './product_10.png'
import womenp_11 from './product_11.png'

// Men ./Products
import menp_12 from './product_12.png'
import menp_13 from './product_13.png'
import menp_14 from './product_14.png'
import menp_15 from './product_15.png'
import menp_16 from './product_16.png'
import menp_17 from './product_17.png'
import menp_18 from './product_18.png'
import menp_19 from './product_19.png'
import menp_20 from './product_20.png'
import menp_21 from './product_21.png'
import menp_22 from './product_22.png'
import menp_23 from './product_23.png'
import menp_24 from './product_24.png'

// Kids ./Products
import kidsp_25 from './product_25.png'
import kidsp_26 from './product_26.png'
import kidsp_27 from './product_27.png'
import kidsp_28 from './product_28.png'
import kidsp_29 from './product_29.png'
import kidsp_30 from './product_30.png'
import kidsp_31 from './product_31.png'
import kidsp_32 from './product_32.png'
import kidsp_33 from './product_33.png'
import kidsp_34 from './product_34.png'
import kidsp_35 from './product_35.png'
import kidsp_36 from './product_36.png'

const all_product = [
  { id: 1, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_1, price_new: 29, price_old: 39.99, sizes: ["S", "M", "L"] },
  { id: 2, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_2, price_new: 35, price_old: 45.99, sizes: ["M", "L", "XL"] },
  { id: 3, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_3, price_new: 25, price_old: 34.99, sizes: ["S", "M"] },
  { id: 4, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_4, price_new: 40, price_old: 55.99, sizes: ["L", "XL"] },
  { id: 5, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_5, price_new: 32, price_old: 44.99, sizes: ["S", "M", "L", "XL"] },
  { id: 6, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_6, price_new: 27, price_old: 36.99, sizes: ["M", "L"] },
  { id: 7, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_7, price_new: 33, price_old: 48.99, sizes: ["S", "M", "L", "XL"] },
  { id: 8, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_8, price_new: 38, price_old: 52.99, sizes: ["S", "M"] },
  { id: 9, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_9, price_new: 29, price_old: 39.99, sizes: ["L", "XL"] },
  { id: 10, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_10, price_new: 31, price_old: 42.99, sizes: ["S", "M", "L"] },
  { id: 11, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: womenp_11, price_new: 36, price_old: 49.99, sizes: ["M", "L", "XL"] },
  { id: 12, name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", category: "women", img: menp_12, price_new: 40, price_old: 55.99, sizes: ["S", "L"] },

  { id: 13, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_13, price_new: 35, price_old: 46.99, sizes: ["M", "L", "XL"] },
  { id: 14, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_14, price_new: 39, price_old: 50.99, sizes: ["S", "M", "L"] },
  { id: 15, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_15, price_new: 45, price_old: 59.99, sizes: ["L", "XL"] },
  { id: 16, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_16, price_new: 30, price_old: 42.99, sizes: ["S", "M"] },
  { id: 17, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_17, price_new: 34, price_old: 47.99, sizes: ["M", "L", "XL"] },
  { id: 18, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_18, price_new: 41, price_old: 56.99, sizes: ["S", "M", "L"] },
  { id: 19, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_19, price_new: 37, price_old: 49.99, sizes: ["S", "L", "XL"] },
  { id: 20, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_20, price_new: 50, price_old: 65.99, sizes: ["M", "L"] },
  { id: 21, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_21, price_new: 42, price_old: 58.99, sizes: ["S", "M", "L", "XL"] },
  { id: 22, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_22, price_new: 31, price_old: 44.99, sizes: ["S", "M"] },
  { id: 23, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_23, price_new: 38, price_old: 51.99, sizes: ["M", "L", "XL"] },
  { id: 24, name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket", category: "men", img: menp_24, price_new: 29, price_old: 39.99, sizes: ["L", "XL"] },

  { id: 25, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_25, price_new: 20, price_old: 28.99, sizes: ["S", "M"] },
  { id: 26, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_26, price_new: 18, price_old: 25.99, sizes: ["M", "L", "XL"] },
  { id: 27, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_27, price_new: 22, price_old: 30.99, sizes: ["S", "M", "L"] },
  { id: 28, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_28, price_new: 19, price_old: 26.99, sizes: ["L", "XL"] },
  { id: 29, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_29, price_new: 21, price_old: 29.99, sizes: ["S", "M"] },
  { id: 30, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_30, price_new: 23, price_old: 32.99, sizes: ["M", "L", "XL"] },
  { id: 31, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_31, price_new: 20, price_old: 27.99, sizes: ["S", "M", "L"] },
  { id: 32, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_32, price_new: 19, price_old: 26.99, sizes: ["M", "L"] },
  { id: 33, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_33, price_new: 24, price_old: 33.99, sizes: ["S", "M", "L", "XL"] },
  { id: 34, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_34, price_new: 22, price_old: 30.99, sizes: ["S", "M"] },
  { id: 35, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_35, price_new: 21, price_old: 29.99, sizes: ["M", "L", "XL"] },
  { id: 36, name: "Boys Orange Colourblocked Hooded Sweatshirt", category: "kids", img: kidsp_36, price_new: 25, price_old: 34.99, sizes: ["L", "XL"] },
]

export default all_product;
