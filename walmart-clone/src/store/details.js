const details =  {
  state: {
      details: [
          {
            id: 1,
            title : 'Pickup or delivery',
            image: 'pickup&delievery.jpg',
            semiTitle: 'Groceries & even more',
            detail: '1919 Davis St, San Leandro',
            buttonDetail: 'Start your order'  
          },
          {
            id: 2,
            title : 'Earn 5% cash back',
            image: 'card.jpg',
            semiTitle: 'Earn 5% cash back',
            detail: 'every day on Walmart.com',
            buttonDetail: 'Learn how'  
          },
          {
            id: 3,
            title : 'No order minimum shipping',
            image: 'shipping.jpg',
            semiTitle: 'For Walmart+ members',
            detail: 'Start your free trial today. Restrictions apply.',
            buttonDetail: 'Try it free'  
          },
      ],
  },
  getters: {
    getDetails(state){
        return state.details;
    }
  },
  mutations: {
  },
  actions: {
  },
};

export default details;
