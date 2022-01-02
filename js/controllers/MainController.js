app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
    $scope.mains =[
      {
        name: 'Barbecue Wings',
        description: 'Barbecue filled chicken wings.',
        price: 4.95
      },
      {
        name: 'Tri-Tip',
        description: 'Steak filled Tri-tip',
        price: 7.50
      },
      {
        name: 'Pinaple flavored Pizza',
        description: 'peporoni flavored, pinaple toping pizza',
        price:  12.00
      }
    ];
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      },
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95
      }
    ];
    $scope.extras =[
      {
        name: 'Cookies',
        description: 'oven baked',
        price: 4.95
      },
      {
        name: 'Cheese',
        description: 'mozerella',
        price: 7.50
      },
      {
        name: 'Donut',
        description: 'glazed chocolate',
        price:  12.00
      }
    ];
  
  }]);