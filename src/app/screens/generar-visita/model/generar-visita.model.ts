export interface generalInterface{
  nombre: string,
  cedula: string,
  direccion: string,
  celular: string,
  email: string,
  cedula_catastral: string,
  matricula_inmobiliaria: string,
  descripcion: string,
  objeto: string,
  escritura?: string
}

export interface ubicacionInterface{
  barrio: string;
  municipio: string;
  departamento: string;
  clasificacion_suelo: string,
  actividad: string,
  topografia: string,
  estado_vias: string,
  alumbrado: string,
  transporte: string,
  equipamientos: string
}

export interface fisicoInterface {
  norte: string,
  sur: string,
  oriente: string,
  occidente: string,
  descripcion_construccion: string,
  area_construccion: string,
  unidad_construccion: string,
  descripcion_cultivos: string,
  area_cultivos: string,
  unidad_cultivos: string
}

export interface predioInterface {
  licencia: string,
  no_licencia?: string,
  ph: string,
  ph_torres?: string,
  ph_pisos?: string,
  ph_unidades?: string,
  electricidad: string,
  agua: string,
  gas_natural: string,
  alcantarillado: string,
  telefono: string,
  internet: string,
  riesgo: string,
  riesgo_descripcion?: string
}