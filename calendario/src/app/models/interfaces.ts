export interface IDia {
    mes: string;
    nombre: string;
    numero: string;
    recodatorio?: {
        title: string;
        color: string;
        ciudad: string;
        hora: string;
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