import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "../Entities/employee.entity";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { EmployeeAuthGuard } from "./auth.Guard";
import { Roles } from "../Entities/roles.entities";
import { RolesGuard } from "../guards/rolebased.guard";

@Module({
controllers: [AuthController],
imports : [TypeOrmModule.forFeature([Employee, Roles]),
            JwtModule.register({
                secret: 'employeesecret',
                signOptions : {algorithm : 'HS512',
                expiresIn : '1d'
                            }
            }),PassportModule.register({defaultStrategy : 'jwt'})],providers : [AuthService,EmployeeAuthGuard,RolesGuard]
})
export class AuthModule {

}