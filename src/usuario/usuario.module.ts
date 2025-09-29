import {Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "./usuario.dm";
import { SenhaForte } from "src/validator/senhaForte.validator";
import { EmailUnico, EmailUnicoValidator } from "src/validator/email.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuariosArmazenados,SenhaForte,EmailUnicoValidator ]
})

export class usuarioModule{}