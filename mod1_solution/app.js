(function () {
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', function($scope) {
		$scope.csvList = '';
		$scope.parsedList = [];
		$scope.result = '';

		$scope.parseList = function() {
			parseTheList();
		}

		function parseTheList() {
			$scope.parsedList = [];
			$scope.parsedList = $scope.csvList.split(',').clean("");
			$scope.result = evaluateList($scope.parsedList);
		}

		function evaluateList(list) {
			console.log(list);
			if (list.length === 0) {
				return "Please enter data first";
			} 
			if (list.length <= 3) {
				return "Enjoy!";
			}
			return "Too much!";
		}
	});	
})();

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].trim() == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};