import * as bcrypt from "bcrypt"
export class Usuario{
    
    id:string
    nome:string
    email:string
    senha:string
    

    constructor(id:string, nome:string ,email:string,senha:string){
        var saltOrRounds = 10
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }

    trocarSenha(senha:string){
        var saltOrRounds = 10
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }

    login(senha: string): boolean{
        return bcrypt.compareSync(senha, this.senha);
    }
}