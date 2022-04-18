export interface Client {
  idcustomer:   number;
  descripcion:  string;
  documento:    string;
  ruc:          string;
  retainer:     null;
  tipo:         string;
  nombre:       string;
  nombre2:      string;
  apellidoP:    string;
  apellidoM:    string;
  celular:      string;
  correo:       string;
  fechaNac:     Date;
  departamento: string;
  provincia:    string;
  distrito:     string;
  createdAt?:    Date;
  updatedAt?:    null;
  pets?:        Pet[];
  vehicles?:    Vehicle[];
}

export interface Pet {
  ip_pk:       number;
  descripcion: string;
  createdAt:   Date;
  updatedAt:   Date;
  idPet:       number;
}

export interface Vehicle {
  iv_pk:        number;
  marca:        string;
  tipovehiculo: string;
  placa:        string;
  color:        string;
  idVehicle:    number;
}
