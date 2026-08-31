import { faker} from "@faker-js/faker";
export class FakerUtil
{
   // "firstName": "Linda",
    //"middleName": "Marie",
    //"lastName": "Anderson",
    //"employeeId": "9008",
    static employee() {
        const firstName = faker.person.firstName();
        const middleName = faker.person.middleName();
        const lastName = faker.person.lastName();

        return {
            firstName,
            middleName,
            lastName,
            fullName: `${firstName} ${middleName} ${lastName}`,
            employeeId: faker.string.numeric(4)
        };
    }
    
}