import { IsString, IsEmail, MinLength, IsNotEmpty, IsNumber } from "class-validator";
import { SenhaUnica } from "src/validator/senhaForte.validator";


export class CriaUsuarioDTO {
  @IsString()
  @IsNotEmpty({message: 'O nome não pode ser vazio'})
  nome: string;

  @IsNotEmpty({message: 'Cidade não pode ser vazia'})
  @IsString()
  email: string;

  
  @IsNotEmpty({message: 'Telefone não pode ser vazio'})
  @IsString()
  @SenhaUnica({ message: 'Senha deve ser forte' })
  senha: string;
}