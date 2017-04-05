'use strict';

      

var burgersArray = [
    { 
      burger_name: 'White Castle Cheeseburger',
    },
    { 
      burger_name: 'White Castle Veggie burger',
    },
    { 
      burger_name: 'Mc Donalds Big Mac ',
    },
    { 
      burger_name: 'Mc Donalds Quarter Pounder with Cheese',
    },
    { 
      burger_name: 'Burger King Whopper',
    },
    { 
      burger_name: 'Burger King Whopper Jr with Cheese',
    },
    { 
      burger_name: 'Wendys Single Cheeseburger',
    },
    { 
      burger_name: 'Wendys Double Cheeseburger',
    }
    
];

module.exports = {

  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('burgers', burgersArray);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('burgers', null, {});
  }
};



// -----------------------------------------------------------------------

