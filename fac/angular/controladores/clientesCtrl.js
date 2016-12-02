var app = angular.module( 'facturacionApp.clientesCtrl', [] );

// ===============================
// Controlador de Clientes
// ===============================
app.controller( 'clientesCtrl', ['$scope', '$routeParams', 'Clientes', function( $scope, $routeParams, Clientes ) {

  $scope.activar( 'mClientes', '' ,'Clientes', 'lista' );
  $scope.clientes = {};
  $scope.clienteSel = {};

  var pag = $routeParams.pag;

  $scope.moverA = function( pag ) {
    Clientes.cargarPagina(pag).then( function() {
      $scope.clientes = Clientes;
    });
  };

  $scope.moverA(pag);

  // ===============
  // Mostrar moda de Clientes
  // ===============
  $scope.mostrarModal = function( cliente ) {
    console.log( cliente );
    angular.copy( cliente, $scope.clienteSel );
    $('#modal_cliente').modal();
  }

  // ======================
  // Guardar Cliente
  // ======================
  $scope.guardar = function( cliente, frmCliente ) {
    Clientes.guardar( cliente ).then( function() {
      //codigo
      $('#modal_cliente').modal('hide');
      $scope.clienteSel = {};
      frmCliente.autoValidateFormOptions.resetForm();
    } );
  }
}]  );
