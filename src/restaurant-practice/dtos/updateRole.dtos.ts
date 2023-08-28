import { ApiProperty } from "@nestjs/swagger";

export class updateRoleDto {
    @ApiProperty({example : 'Manager'})
    name: string;
}