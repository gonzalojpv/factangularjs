<?php
include_once("../clases/class.Database.php");

$post_data = file_get_contents("php://input");

$request = json_decode( $post_data );
$request = (array) $request;

if ( isset( $request ['id'] ) ) {
  $sql = "update clientes set
    nombre    = '". $request['nombre'] ."'
    correo    = '". $request['correo'] ."'
    zip       = '". $request['zip'] ."'
    telefono1 = '". $request['telefono1'] ."'
    telefono2 = '". $request['telefono2'] ."'
    pais      = '". $request['pais'] ."'
    direccion = '". $request['direccion'] ."'
    where id  = ".$request['id'];

  $hecho = Database::ejecutar_idu( $sql );

  if ( is_numeric( $hecho ) OR $hecho == TRUE )
    $respuesta = array( 'err' => FALSE, 'Mensaje' => 'Registro actualizado' );
  else
    $respuesta = array( 'err' => TRUE, 'Mensaje' => $hecho );


}
else {
  $sql = "insert into clientes (nombre, correo, zip, telefono1, telefono2, pais, direccion)
    values (
      '". $request['nombre'] ."',
      '". $request['correo'] ."',
      '". $request['zip'] ."',
      '". $request['telefono1'] ."',
      '". $request['telefono2'] ."',
      '". $request['pais'] ."',
      '". $request['direccion'] ."'
    )";

    $hecho = Database::ejecutar_idu( $sql );

    if ( is_numeric( $hecho ) OR $hecho == TRUE )
      $respuesta = array( 'err' => FALSE, 'Mensaje' => 'Registro insertado' );
    else
      $respuesta = array( 'err' => TRUE, 'Mensaje' => $hecho );
}

echo json_encode( $respuesta );
?>
