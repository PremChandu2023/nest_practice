export const menuExamples = {
    MenuById :{
        description : "Gives the menu details",
         value :{
            "succes": true,
            "data": {
                "menuitem_id": 2,
                "menu_itemname": "manchuria",
                "price": 10,
                "tax": 5,
                "date": {
                    "createdDate": "2023-08-17T08:31:36.802Z",
                    "updatedDate": "2023-08-24T04:40:27.390Z"
                }
            }
        }
    },
    MenuBadRequest : {
        description : "Occurs when given Id is invalid",
         value :{
            "message": "Given_id_is_not_found"
        }
    },
    addMenuItem : {
        description : "Creates a new Menu",
        value :{
            "succes": true,
            "data": {
                "menu_itemname": "Pancakes",
                "price": 20,
                "menus": {
                    "menu_id": 1,
                    "menu_name": "lunch",
                    "date": {
                        "createdDate": "2023-08-17T08:58:58.467Z",
                        "updatedDate": "2023-08-17T08:58:58.467Z"
                    }
                },
                "menuitem_id": 17,
                "tax": 5,
                "date": {
                    "createdDate": "2023-08-25T11:20:06.064Z",
                    "updatedDate": "2023-08-25T11:20:06.064Z"
                }
            }
        }
    },
    InvalidIdNotFound: {
        description : "Occurs when Menuid is not found",
        value : {
            "message": "Given_id_is_not_found"
        }
    },//user--starts
    registerSuccess : {
        description : 'Gives the registered user details',
        value : {
            "succes": true,
            "data": {
                "employee_Id": "A1",
                "employee_Name": "prem",
                "status": "Active",
                "email": "prem3a3",
                "phoneNumber": "8367"
            }
        }
    },
    duplicateEmail : {
        description : "Occurs when given Id is invalid",
         value :{
            "message": "Given email is already registered give new email"
        }
    },
    UserGetSuccess : {
        description : "Occurs when given Id is invalid",
         value :{
            "succes": true,
            "data": {
                "id": 1,
                "employee_Id": "A1",
                "employee_Name": "prem",
                "status": "Active",
                "email": "prem3a3",
                "phoneNumber": 8367
            }
        }
    },
    RoleGetSuccess : {
        description : "Gives the role deatils that have been posted",
         value :{
            "succes": true,
            "data": {
                "name": "Customer",
                "description": "customer has permission to order",
                "id": 5,
            }
        }
    },
    RoleConflict : {
        description : "Same Role posted again",
         value :{
            error: "Conflict Error",
            message : "Given_role_is_already_present ",
         }
    },
    RolePutSuccess:  {
        description : "Role is updated with given name in database",
         value : {
    "succes": true,
    "data": {
        "id": 1,
        "employee_Id": "A1",
        "employee_Name": "prem",
        "status": "Active",
        "email": "prem3a3",
        "phoneNumber": 8367,
        "date": {
            "createdDate": "2023-08-22T05:30:40.783Z",
            "updatedDate": "2023-08-22T09:38:24.000Z"
        },
        "roles": {
            "id": 1,
            "name": "Manager",
        }
    }
}
    },
    RolePutBadREquest : {
    description : "Role is updated with given name in database",
    value :{
        message : 'Id not found to update the role'
    }
}

}