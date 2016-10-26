var app = angular.module( 'facturacionApp', [
  'ngRoute',
  'facturacionApp.configuracion',
  'facturacionApp.mensajes',
  'facturacionApp.notificaciones',
  'facturacionApp.clientes',
  'facturacionApp.dashboardCtrl',
  'facturacionApp.clientesCtrl',
 ] );

app.controller( 'mainCtrl', [ '$scope', 'Configuracion', 'Mensajes', 'Notificaciones', function( $scope, Configuracion, Mensajes, Notificaciones ) {
  $scope.config = {};
  $scope.mensajes = Mensajes.mensajes;
  $scope.notificaciones = Notificaciones.notificaciones;
  $scope.titulo = '';
  $scope.subtitulo = '';
  $scope.usuario = {
    nombre:'Gonzalo'
  };

  Configuracion.cargar().then( function() {
    $scope.config = Configuracion.config;
  } );

  // ==================================
  // Funciones Globales del scope
  // ===================================
  $scope.activar = function( menu, submenu, titulo, subtitulo ) {

    $scope.titulo = titulo;
    $scope.subtitulo = subtitulo;

    $scope.mDashboard = '';
    $scope.mClientes = '';

    $scope[menu] = 'active';
  }

} ] );


// ================
// RUTAS
// ================
app.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider
    .when( '/', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    } )
    .when( '/clientes', {
      templateUrl: 'clientes/clientes.html',
      controller: 'clientesCtrl'
    } )
    .otherwise({
      redirectTo: '/'
    })
} ] );


// ============
//FILTROS
//===============
app.filter( 'quitarletra', function() {

  return function( palabra ) {
    if ( palabra && palabra.length ) {
      return palabra.substr(1);
    }
    else {
      return '';
    }
  }
} )
.filter( 'mensajecorto', function() {

  return function( mensaje ) {
    if ( mensaje ) {
      if ( mensaje.length > 20  )
        return mensaje.substr(0, 30) + '...';
      else
        return mensaje;
    }
    else {
      return '';
    }
  }
} );
