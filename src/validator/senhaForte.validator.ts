import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "src/usuario/usuario.dm";
import zxcvbn from 'zxcvbn'

@Injectable()
@ValidatorConstraint({ async: true })
export class SenhaForte implements ValidatorConstraintInterface {
    constructor() {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const result = zxcvbn(value);
        var validarSenha = result.score >= 3;   /*Score minimo de 3 para ser senha forte*/
        return validarSenha
     
    }
}


export const SenhaUnica = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: SenhaForte
        });
    }
}