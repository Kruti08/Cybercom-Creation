const products = {
  state: {
      products: [
            {
                id:1,
                image: 'shop_towels.jpeg',
                details: 'Scott Professional Multi-Purpose Shop Towels, 55 Sheets per Roll,6 Ct',
                price: 9.97,
                convertedPrice: '(3.0 c/ea)',
                delieveryTime: '2-day delivery',
             },
            {
                id:2,
                image: 'purple_powder.jpeg',
                details: 'Purple Powder Degreaser Concentrate, 2.5 Gallons',
                price: 11.67,
                convertedPrice: '$11.67/each',
                delieveryTime: '2-day delivery',
            },
            {
                id:3,
                image: 'gift_pack.png',
                details: 'Armor All ultimate Car Care Holiday Gift Pack (7 Pieces)',
                price: 14.99,
                convertedPrice: '$14.99/ each',
                delieveryTime: '-',
            },
            {
                id:4,
                image: 'car_care_kit.jpeg',
                details: 'Maguiar-s Complete Car Care Kit, G55208',
                price: 19.97,
                convertedPrice: '',
                delieveryTime: '-',
            },
            {
                id:5,
                image: 'car_gift_pack.jpeg',
                details: 'Armor All complete Car Cleaning Car Care Kit (4 Pieces)',
                price: 13.29,
                convertedPrice: '$13.29/each',
                delieveryTime: '2-day delivery',
            },
            {
                id:6,
                image: 'tire_coating.jpeg',
                details: 'Meguiar\'s Hot Shine High Gloss Tire Coating - 15 oz.',
                price: 5.97,
                convertedPrice: '$5.97/each',
                delieveryTime: '-',
            },
            {
                id:7,
                image: 'fast_orange.jpeg',
                details: 'Fast Orange Pumish Hand Claener, 1 Gallon Orange Scented - 25219',
                price: 9.88,
                convertedPrice: '$9.88 (7.7 c/fl oz)',
                delieveryTime: '2-day delivery',
            },
            {
                id:8,
                image: 'car_duster.jpeg',
                details: 'California Car Duster with Plastic Handle 26',
                price: 11.97,
                convertedPrice: '$11.97 / each',
                delieveryTime: '-',
            },
            {
                id:9,
                image: 'shop_towels.jpeg',
                details: 'Scott Professional Multi-Purpose Shop Towels, 55 Sheets per Roll,6 Ct',
                price: 9.97,
                convertedPrice: '(3.0 c/ea)',
                delieveryTime: '2-day delivery',
             },
            {
                id:10,
                image: 'purple_powder.jpeg',
                details: 'Purple Powder Degreaser Concentrate, 2.5 Gallons',
                price: 11.67,
                convertedPrice: '$11.67/each',
                delieveryTime: '2-day delivery',
            },
            {
                id:11,
                image: 'gift_pack.png',
                details: 'Armor All ultimate Car Care Holiday Gift Pack (7 Pieces)',
                price: 14.99,
                convertedPrice: '$14.99/ each',
                delieveryTime: '-',
            },
            {
                id:12,
                image: 'car_care_kit.jpeg',
                details: 'Maguiar-s Complete Car Care Kit, G55208',
                price: 19.97,
                convertedPrice: '',
                delieveryTime: '-',
            },
      ]
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    getProducts(state){
        return state.products;
    }
 }
};

export default products;
