var app = angular.module( 'facturacionApp.clientesCtrl', [] );

// ===============================
// Controlador de Clientes
// ===============================
app.controller( 'clientesCtrl', ['$scope', 'Clientes', function( $scope, Clientes ) {
  $scope.activar( 'mClientes', '' ,'Clientes', 'lista' );
  $scope.clientes = {};
  Clientes.cargarPagina().then( function() {
    $scope.clientes = Clientes;
  });
}]  );
