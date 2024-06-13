export interface IUser
{
  userid:number;
  nome: string;
  email:string;
  senha:string;
  usertype:'Estudante'|'Colaborador';
  formacao:string;
}

export interface IPost{
  user:IUser
  data: string;
  titulo: string;
  descricao: string;
  views: number;
}