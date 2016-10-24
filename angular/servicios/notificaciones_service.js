var app= angular.module( 'facturacionApp.notificaciones', [] );

app.factory( 'Notificaciones', [ '$http', '$q', function( $http, $q ) {

  var self = {
    notificaciones:[
      {
        icono:'fa-user',
        notificacion: 'Nuevo user'
      },
      {
        icono:'fa-save',
        notificacion: 'Usando el disk'
      },
      {
        icono:'fa-building',
        notificacion: 'Soluta dolorum iusto occaecati porro occaecati rerum. '
      },
    ]
  };

  return self;
} ] );
