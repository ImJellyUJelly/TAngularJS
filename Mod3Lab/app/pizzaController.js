app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Pizza Builder',
        availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
        toppings: [] 
        };

        $scope.addTopping = function (topping){
            $scope.model.toppings.push(topping);
            $scope.model.showAdded = true;
            $scope.model.search = null;
        };

        $scope.alerts = [
            { type: 'danger', msg: 'No results.' },
            { type: 'success', msg: 'Topping added.' }
          ];
    }
]);