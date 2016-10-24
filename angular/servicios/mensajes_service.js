var app= angular.module( 'facturacionApp.mensajes', [] );

app.factory( 'Mensajes', [ '$http', '$q', function( $http, $q ) {
  var self = {
    mensajes:[
      {
        img: 'dist/img/user2-160x160.jpg',
        nombre: 'Gloria',
        mensaje: 'Bienvenido al servicio',
        fecha: '5-Marzo'
      },
      {
        img: 'dist/img/user2-160x160.jpg',
        nombre: 'Bubba',
        mensaje: 'Amet sit harum tempora iusto ratione. Veritatis dolores dolores quae.',
        fecha: '10-Marzo'
      },
      {
        img: 'dist/img/user2-160x160.jpg',
        nombre: 'Citla',
        mensaje: 'Amet sit harum tempora iusto ratione. Veritatis dolores dolores quae.',
        fecha: '8-Marzo'
      }
    ]
  };

  return self;
} ] );
