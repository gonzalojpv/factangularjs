var app = angular.module( 'facturacionApp.dashboardCtrl', [] );

// ===============================
// Controlador de Clientes
// ===============================
app.controller( 'dashboardCtrl', ['$scope', function( $scope ) {
  $scope.activar( 'mDashboard', '', 'Dashboard', 'Información' );
}]  );
