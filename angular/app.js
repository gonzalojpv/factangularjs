var app = angular.module( 'facturacionApp', [
  'ngRoute',
  'facturacionApp.configuracion',
  'facturacionApp.mensajes',
  'facturacionApp.notificaciones'
 ] );

app.controller( 'mainCtrl', [ '$scope', 'Configuracion', 'Mensajes', 'Notificaciones', function( $scope, Configuracion, Mensajes, Notificaciones ) {
  $scope.config = {};
  $scope.mensajes = Mensajes.mensajes;
  $scope.notificaciones = Notificaciones.notificaciones;
  $scope.usuario = {
    nombre:'Gonzalo'
  };

  Configuracion.cargar().then( function() {
    $scope.config = Configuracion.config;
  } );

} ] );


// ================
// RUTAS
// ================
app.config( [ '$routeProvider', function( $routeProvider ) {
  $routeProvider
    .when( '/', {
      templateUrl: 'dashboard/dashboard.html'
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
