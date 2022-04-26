

export interface Departamento {
  descripcion:  string;
  letra:        string;
  numero:       string;
  piso:         string;
  createdAt:    null;
  updatedAt:    Date;
  usuario:      string;
  category:     Categoria;
  idDepartment: number;
}

export interface Categoria {
  descripcion:      string;
  precio:           number;
  idCategory:       number;
}
