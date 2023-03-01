export class Product {
  static idNum = 1;
  category: string;
  image: string;
  id: number;
  rating: number;
  name: string;
  price: number;
  description: string;
  link: string;
  constructor(rating : number, name: string, price: number, description: string, link: string, image:string, category: string) {
    this.rating = rating;
    this.name = name;
    this.price = price;
    this.description = description;
    this.link = link;
    this.id = Product.idNum++;
    this.category = category;
    this.image = image;
  }
}
export let products = new Array<Product>();

const prods = [
  {
    name: 'Apple Iphone 11',
    price: 293000,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    description: 'Discover more possibilities. Get everything at once. Apple Iphone 11\'s 6.6-inch V-notch TFT display lets you see and do more, 128GB, Slim Box',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    category: 'Phones and gadgets'
  },
  {
    name: 'Apple iPhone 13 Pro Max',
    price: 663000,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    description: 'Apple iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with incredibly high pixel density - photos.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=750000000#!/item',
    category: 'Phones and gadgets'
  },

  {
    name: 'Apple iphone 14',
    price: 590000,
    image:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    description: 'Super high refresh rate. A high refresh rate of 120Hz ensures smooth operation and rich image details when browsing the web.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    category: 'Phones and gadgets'
  },
  {
    name:'Apple Watch Series',
    price:225000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h33/hc7/63158967926814/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    description: 'Series, 8 45mm, Aluminum, black.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    category: 'Phones and gadgets'
  },
  {
    name: 'Apple Watch SE',
    price: 167000,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    description: 'Series, 8 45mm, Gold',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    category: 'Phones and gadgets'
  },
  {
    name: 'Notebook Acer Nitro 5 ',
    price: 389000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    description: 'NVIDIA GeForce GTX 1650, 15.6 inch.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    category: 'Computers'
  },
  {
    name:'Apple MacBook Air 13',
    price: 478874,
    image:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: 'Apple M1 7 core, 13.3 inch.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    category: 'Computers'
  },

  {
    name: 'ASUS TUF Gaming A15',
    price: 349390,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    description: '15.6 inch, AMD Ryzen 5 4600H, nVidia GeForce GTX1650',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    category: 'Computers'
  },
  {
    name: 'Acer Nitro 5',
    price: 658002,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h3d/62755167404062/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-cernyj-106607259-1.jpg',
    description: '15.6 inch, Intel Core i7 12700H, nVidia GeForce RTX 3060',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-chernyi-106607259/?c=750000000#!/item',
    category: 'Computers'
  },

  {
    name: 'Acer Extensa',
    price: 219990,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h73/52316483452958/acer-extensa-ex215-52-31eb-nx-eg8er-021-cernyj-105725685-1.jpg',
    description: '15.6 inch, Intel Core i3 1005G1, Intel UHD Graphics g1',
    rating: 2,
    link: 'https://kaspi.kz/shop/p/acer-extensa-ex215-52-31eb-nx-eg8er-021-chernyi-105725685/?c=750000000#!/item',
    category: 'Computers'
  },

  {
    name: 'Морозильник Бирюса',
    price: 103500,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/hf2/49180988669982/birusa-210kx-white-2800630-1-Container.jpg',
    description: 'freezer-lary, manual, 14kg/day',
    rating: 3,
    link: 'https://kaspi.kz/shop/p/birjusa-210kx-200-l-belyi-2800630/?c=750000000#!/item',
    category: 'Appliances'
  },
  {
    name: 'Стиральная машина LG',
    price: 238400,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/hc9/31588629643294/lg-f2m5hs6s-serebristyj-3601448-1-Container.jpg',
    description: 'electron-mechanical, Maximum loading of linen: 7 kg, Rotation speed during spin: 1200 rpm, silver',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000#!/item',
    category: 'Appliances'
  },

  {
    name: 'Стиральная машина LG',
    price: 194675,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h58/52665601916958/lg-f2j3ws1w-belyi-105927780-1.jpg',
    description: 'electron-mechanical, Maximum loading of linen: 7 kg, Rotation speed during spin: 1200 rpm, white',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/lg-f2j3ws1w-belyi-105927780/?c=750000000#!/item',
    category: 'Appliances'
  },

  {
    name: 'Кухонная плита Artel Comarella ',
    price: 75740,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/he4/32667127480350/artel-comarella-50-00-e-belyi-100335150-1.jpg',
    description: 'hob: electric, Management: mechanical, white',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/artel-comarella-50-00-e-belyi-100335150/?c=750000000#!/item',
    category: 'Appliances'
  },

  {
    name: 'Кулер для воды Eurobox',
    price: 130000,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/h46/32992755679262/eurobox-96la-serebristyj-100570890-1-Container.jpg',
    description: 'type: cooler, electronic, upper, white-black',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/eurobox-96la-100570890/?c=750000000#!/item',
    category: 'Appliances'
  },
  {
    name: 'Стул N-12',
    price: 7500,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    description: 'Material: plastic, height, see: 81, white color',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000#!/item',
    category: 'Furniture'
  },
  {
    name: 'Табурет ЦМУ Уют',
    price: 3150,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h57/62761182920734/stul-taburet-tsmu-uyut-ldsp-44-5x30x30-sm-belyi-105393277-1.jpg',
    description: 'Material: chipboard, height, see: 44.5, white color',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/taburet-tsmu-ujut-44-5x30x30-sm-belyi-105393277/?c=750000000#!/item',
    category: 'Furniture'
  },
  {
    name: 'Кухонный гарнитур DEEBO',
    price: 127000,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h5d/48901694586910/kuhonnyj-garnitur-modulnyj-103811820-1.jpg',
    description: 'Type: straight, the width of the headset, see: 240, white color',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/deebo-suppelex-240-240x60x216-ldsp-dsp-103811820/?c=750000000#!/item',
    category: 'Furniture'
  },
  {
    name: 'Кухонный гарнитур Grand Miks Триада',
    price: 255974,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h69/31497989488670/grand-miks-triada-3-6-100616438-1-Container.jpg',
    description: 'Type: straight, the width of the headset, see: 360, white white, gray',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/grand-miks-triada-3-6-360x60x220-sm-ldsp-mdf-100616438/?c=750000000#!/item',
    category: 'Furniture'
  },
  {
    name: 'Кухонный гарнитур Стендмебель Денвер',
    price: 151700,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h94/52229914296350/kuhna-denver-2-0-belyj-atele-svetlyj-105675286-1.jpg',
    description: 'Type: straight, the width of the headset, see: 200, white white, gray',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/stendmebel-denver-200x60x215-8-ldsp-105675286/?c=750000000#!/item',
    category: 'Furniture'
  },

];

for(let i of prods){
  products.push(new Product(i.rating, i.name, i.price, i.description, i.link, i.image, i.category));
}

