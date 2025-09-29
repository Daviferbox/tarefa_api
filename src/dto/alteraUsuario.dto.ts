import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "src/validator/email.validator";
import { ApiProperty } from "@nestjs/swagger";
import { SenhaUnica } from "src/validator/senhaForte.validator";

export class AlteraUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: "Nome não pode ser vazio" })
  @IsOptional()
  @ApiProperty({example: 'João Silva',
                description: 'Nome completo do usuário'}
  )
  nome: string;

  @IsEmail(undefined, { message: "Email inválido" })
  @EmailUnico({ message: "Já existe usuário com esse email" })
  @IsOptional()
   @ApiProperty({example: 'joaosilva@joao.com.br',
                description: 'Email do usuário, deve ser único'}
  )
  email: string;

  @SenhaUnica({message: 'Senha deve ser forte'})
  @MinLength(6, { message: "Tamanho da senha inválido" })
  @IsOptional()
  @ApiProperty({example: 'senha123',
                description: 'Senha do usuário, deve ter no mínimo 6 caracteres'}
  )
  senha: string;

}