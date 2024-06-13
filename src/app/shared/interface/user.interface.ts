export interface IUser
{
  userid:number;
  nome: string;
  email:string;
  telefone:string;
  senha:string;
  usertype:'Estudante'|'Colaborador';
}

export interface IPost{
  user:IUser
  data: string;
  titulo: string;
  descricao: string;
  views: number;
}