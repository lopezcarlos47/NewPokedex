// Write your code here
var Pokemon = angular.module("Pokemon",[])
Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Lista = [];
	for(var y=1;y<=100;y++){
		$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/pokemon/"+y
	}).then(function datos(x){
		$scope.Lista.push(x);
	})
	}
	
});