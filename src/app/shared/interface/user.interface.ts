export interface IColaborador
{
  idColaborador: number,
  nome: string,
  documento: string,
  areaEstudo: string,
  verificado: string,
  senhaColaborador: string,
  ultimoLogin: string
  tipoUsuario: string
}

export interface IEstudante{
  idEstudante: number,
  documentoEstudante: string,
  nomeEstudante: string,
  areaInteresse: string,
  senhaEstudante: string,
  ultimoLogin: string
  tipoUsuario: string
}
export interface IResponseLogin{
  idEstudante: number,
  documentoEstudante: string;
  nomeEstudante: string;
  areaInteresse: string;
  senhaEstudante: string;
  tipoUsuario: 'estudante' | 'colaborador';
  ultimoLogin: string;
}

export interface IResponsePost{
  idDocumento: number;
  autor: string;
  areaEstudoDocumento: string;
  nomeDocumento: string;
  propostaEstudo: string;
  documentoVerificado: "SIM" | "NAO"
}

export interface IResponseCadastro{
  idEstudante: number;
  documentoEstudante:string;
  nomeEstudante:string;
  areaInteresse:string;
  senhaEstudante:string;
  tipoUsuario:string;
  ultimoLogin:string;
}