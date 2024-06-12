export interface IUser
{
  userid:number;
  nome: string;
  email:string;
  telefone:string;
  senha:string;
  diciplina:string;
}

export interface IPost{
  user:IUser
  data: string;
  titulo: string;
  descricao: string;
}