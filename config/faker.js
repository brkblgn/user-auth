const faker = require('faker/locale/tr');
const Contact = require('../model/contact');

const createDummyPerson = (parentID) => {
    const dummyPerson = {};

    dummyPerson.name = faker.name.findName();
    dummyPerson.email = faker.internet.email();
    dummyPerson.address = {};
    dummyPerson.address.street = faker.address.streetName();
    dummyPerson.address.town = faker.address.city()
    dummyPerson.address.city = faker.address.state();
    dummyPerson.address.country = faker.address.country();
    dummyPerson.jobPosition = faker.name.jobTitle();
    dummyPerson.phone = faker.phone.phoneNumber();
    dummyPerson.mobile = faker.phone.phoneNumber();
    dummyPerson.website = faker.internet.url();
    dummyPerson.taxID = faker.datatype.number();
    dummyPerson.contactType = 'person';
    dummyPerson.parentID = parentID;

    return dummyPerson;
}

const createDummyCompany = async () => {
    const dummyCompany = {};

    dummyCompany.name = faker.company.companyName();
    dummyCompany.email = faker.internet.email();
    dummyCompany.address = {};
    dummyCompany.address.street = faker.address.streetName();
    dummyCompany.address.town = faker.address.city()
    dummyCompany.address.city = faker.address.state();
    dummyCompany.address.country = faker.address.country();
    dummyCompany.phone = faker.phone.phoneNumber();
    dummyCompany.mobile = faker.phone.phoneNumber();
    dummyCompany.website = faker.internet.url();
    dummyCompany.taxID = faker.datatype.number();
    dummyCompany.contactType = 'company';

    return dummyCompany
}

const createDummy = async (amount) => {
    for (let i = 0; i < amount; i++) {
        const dummyCompany = await createDummyCompany();
        console.log('Company', dummyCompany);
        const company = await Contact.create(dummyCompany);

        for (let j = 0; j < 10; j++) {
            const dummyPerson = await createDummyPerson(company._id);
            console.log(dummyPerson);
            const person = await Contact.create(dummyPerson);
        }
    }
}

module.exports = { createDummy };