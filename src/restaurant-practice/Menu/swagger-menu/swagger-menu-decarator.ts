import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiConflictResponse, ApiOkResponse, ApiResponse } from "@nestjs/swagger";
import { MenuResponses } from "./swagger-resposnes-menu";


export function MenuCustomdecarators(method:string,route:string)
{
    switch(method){
        case 'Get':
            switch(route)
            {
                case '/':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.get.ok)
                    )
                case '/:id':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.getById.ok),
                        ApiBadRequestResponse(MenuResponses.getById.Badrequest)
                    )
                    //useremployee
                case ':id/details': 
                return applyDecorators( ApiOkResponse(MenuResponses.getById.ok),
                ApiBadRequestResponse(MenuResponses.getById.Badrequest),

                )
            }
        case 'Post':
            switch(route)
            {
                case '/':
                    return applyDecorators()
                case ':id/menuitem':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.addMenuItem.ok),
                        ApiBadRequestResponse(MenuResponses.addMenuItem.BadRequest),
                        //user
                        ApiResponse(MenuResponses.Userpost.sucess),
                        ApiBadRequestResponse(MenuResponses.UserbadRequest),
                    )
                    case 'roles':
                        //user
                        return applyDecorators(
                            ApiOkResponse(MenuResponses.PostRole.ok),
                            ApiConflictResponse(MenuResponses.PostRole.Conflict)
                        )

            }
        case 'Delete':
            switch(route)
            {
                case '/':
                    return applyDecorators()
            }
        case 'Put':
            switch(route)
            {
                case 'role/:id':
                    return applyDecorators(
                        //usersrole
                        ApiOkResponse(MenuResponses.PutRole.ok),
                        ApiBadRequestResponse(MenuResponses.PutRole.BadRequest)
                    )
            }

    }
}