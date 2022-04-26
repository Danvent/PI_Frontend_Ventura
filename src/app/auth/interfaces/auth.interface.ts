export interface User {
  documemto: string;
  apellidoP: string;
  apellidoM: string;
  celular:   string;
  correo:    string;
  username:  string;
  password:  string;
  rol:       Rol;
  idUser:    number;
  pnombre:   string;
  snombre:   string;
}

export interface Rol {
  descripcion: string;
  idRol:       number;
}
