export interface IUser
{
  userid:number;
  nome: string;
  email:string;
  telefone:string;
}

export interface IPost{
  user:IUser
  data: string;
  titulo: string;
  descricao: string;
}

export interface IUserLogin{
  nome:string;
  senha:string;
}