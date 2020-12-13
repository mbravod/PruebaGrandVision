export interface IDia {
    mes: string;
    nombre: string;
    numero: string;
    recordatorio?: {
        title: string;
        color: string;
        ciudad: string;
        pais: string;
        hora: string;
        clima: string;
    }[];
}

export interface ICiudad {
    value: string;
    viewValue: string;
}

export interface IHoras {
    value: string;
    viewValue: string;
}