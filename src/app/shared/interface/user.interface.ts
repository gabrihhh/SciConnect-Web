export interface IUser
{
  usertype:'Estudante'|'Colaborador';
  documentoEstudante: string;
  areaInteresse: string;
  ultimoLogin: string;
  nome: string;
  documento: string;
  areaEstudo: string;
  senha: string;
  verificado: string;
}

export interface IPost{
  autor: string;
  areaEstudoDocumento: string;
  nomeDocumento: string;
  propostaEstudo: string;
  documentoVerificado: string;
}