import { MenuItems } from "src/restaurant-practice/Orders/orders.entities/menuitem.entity";
import { menuExamples } from "./swagger-menu-examples";

export const MenuResponses = {
    get : {
        ok : {
            status: 200, description: 'Gives the orders details by given id',
            // schema :MenuItems,
            
               content: {
              'application/json': {
                examples: {
                 success : {}
                }
              }
            }
          }
    },
    getById :  {
        ok : {
            status: 200, description: 'Gives the order details by given id',
            
               content: {
              'application/json': {
                examples: {
                 success : menuExamples.MenuById
                }
              }
            }
          },
        Badrequest:  {
            status: 400, description: 'Occurs when given Id is invalid',
            
               content: {
              'application/json': {
                examples: {
                 InvalidId : menuExamples.MenuBadRequest
                }
              }
            }
          }
    },
    addMenuItem :{
        ok : {
        status: 201, description: 'Creates a new Menuitem',
        // schema :MenuItems,
        
           content: {
          'application/json': {
            examples: {
             success : menuExamples.addMenuItem
            }
          }
        }
      },
      BadRequest : {
        status: 400, description: 'Invalid id',
        // schema :MenuItems,
        
           content: {
          'application/json': {
            examples: {
             MenuItemIdFound : menuExamples.InvalidIdNotFound
            }
          }
        }
      }
    },//auth--starts
    Userpost: {
      sucess :{
    status: 201, description : 'registers a user in the database',
    content : {
      'application/json': {
        examples: {
         Success : menuExamples.registerSuccess,
        }
      }
    }
    }
  },
  UserbadRequest : {
    status: 400, description : 'Errors in given request body',
    content : {
      'application/json': {
        examples: {
         MenuItemIdFound : menuExamples.duplicateEmail,
        }
      }
    }
    },
    userGet :  {
      ok : {
          status: 200, description: 'Gives the user details by given id',
             content: {
            'application/json': {
              examples: {
               success : menuExamples.UserGetSuccess
              }
            }
          }
        }
  },
  PostRole : {
    ok : {
      status: 210, description: 'creates a role',
         content: {
        'application/json': {
          examples: {
           success : menuExamples.RoleGetSuccess
          }
        }
      }
    },
    Conflict : {
      status :410, description : "Occurs when you are trying to post the same role again",
      content: {
        'application/json': {
          examples: {
           conflict : menuExamples.RoleConflict
          }
        }
      }
    }
  },
  PutRole: {
    ok: {
      status: 200, description: 'Role is updated succefully',
         content: {
        'application/json': {
          examples: {
           success : menuExamples.RolePutSuccess
          }
        }
      }
    },
    BadRequest : {
      status :410, description : "Occurs when given path varaible is invalid",
      content: {
        'application/json': {
          examples: {
           IdNotFound : menuExamples.RolePutBadREquest
          }
        }
      }
    }
  }
  
    
}