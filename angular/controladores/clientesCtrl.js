var app = angular.module( 'facturacionApp.clientesCtrl', [] );

// ===============================
// Controlador de Clientes
// ===============================
app.controller( 'clientesCtrl', ['$scope', '$routeParams', 'Clientes', function( $scope, $routeParams, Clientes ) {

  $scope.activar( 'mClientes', '' ,'Clientes', 'lista' );
  $scope.clientes = {};

  var pag = $routeParams.pag;

  $scope.moverA = function( pag ) {
    Clientes.cargarPagina(pag).then( function() {
      $scope.clientes = Clientes;
    });
  };

  $scope.moverA(pag);
}]  );
