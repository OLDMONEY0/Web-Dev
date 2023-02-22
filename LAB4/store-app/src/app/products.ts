export interface Product {
  rating: number;
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple Iphone 11',
    price: 293000,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    description: 'Discover more possibilities. Get everything at once. Apple Iphone 11\'s 6.6-inch V-notch TFT display lets you see and do more, 128GB, Slim Box',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Apple iPhone 13 Pro Max',
    price: 663000,
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    description: 'Apple iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with incredibly high pixel density - photos.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'Samsung Galaxy A73',
    price: 270000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/h08/50197108654110/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794-1.jpg',
    description: 'The functional and stylish smartphone Samsung Galaxy A73 in a metal case is able to provide not only everyday communication and entertainment, but also productive work.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-seryi-104545794/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'Samsung Galaxy A53',
    price :157810,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4e/h8c/49613532463134/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg',
    description: 'The elegant combination of a unique form factor and natural classic shades draws attention every time you open it, 128GB, Grey.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Apple iphone 14',
    price: 590000,
    image:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h82/h83/62948396662814/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    description: 'Super high refresh rate. A high refresh rate of 120Hz ensures smooth operation and rich image details when browsing the web.',
    rating: 4,
    link:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item'
  },
  {
    id: 6,
    name:'Apple Watch Series',
    price:225000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h33/hc7/63158967926814/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    description: 'Series, 8 45mm, Aluminum, black.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item'
  },
  {
    id:7,
    name: 'Apple Watch SE',
    price: 167000,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    description: 'God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Notebook Acer Nitro 5 ',
    price: 389000,
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    description: 'NVIDIA GeForce GTX 1650, 15.6 inch.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item'
  },
  {
    id: 9,
    name:'Apple MacBook Air 13',
    price: 478874,
    image:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    description: 'Apple M1 7 core, 13.3 inch.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Sony PlayStation 5',
    price: 333985,
    image:'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7d/hf3/33035105959966/sony-playstation-5-belyj-100746577-1-Container.jpg',
    description: '+4 free game disk, white.',
    rating: 5,
    link:'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item'
  }
];

