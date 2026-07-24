import { faker} from "@faker-js/faker";
export class FakerUtil
{
   // "firstName": "Linda",
    //"middleName": "Marie",
    //"lastName": "Anderson",
    //"employeeId": "9008",
    static employee()// as this is a static method, so no need to create object,we can directly use Fakerutil.employee()
    {
        //it willreturn object in the form of key:value pair
        return{
            firstName:faker.person.firstName(),
            middleName:faker.person.middleName(),
            lastName:faker.person.lastName(),
            employeeId:faker.string.numeric(4)
            
        };
    }
    
}