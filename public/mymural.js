// criando o módulo
angular.module("mymural",[]);
// adicionando um controlador ao módulo:
angular.module("mymural").controller("MyMural",function($scope,$http){
  // função pra dar um estado inicial para a tela
  $scope.initmural=function(){
    $scope.novamsg={
      titulomensagem:"",
      corpomensagem:""
    };
    $http({
      method : "GET",
      url : "mensagens",
      headers : {
      	"Content-Type" : "application/json"
      }
    }).then(function(res){
      $scope.mensagens=res.data;
    });
  };
  // começar com a lista e com o formulário limpo
  $scope.initmural();
  // esta chamada salva no servidor uma nova mensagem
  $scope.enviamsg=function(){
    $http({
      method : "POST",
      url : "novamensagem",
      headers : {
        "Content-Type" : "application/json"
      },
      data:JSON.stringify($scope.novamsg)
    }).then(function(res){
      alert(res.data);
      $scope.initmural();
    });
  };
});
