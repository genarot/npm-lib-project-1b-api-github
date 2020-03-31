const fetchUserData = require("./../index").fetchUserData;
const genarotResponse = require('./responses/genarot');
const jperezResponse = require('./responses/jperez');
const { expect } = require("chai");
const nock = require('nock')

describe("Data test from different github users", () => {
  before(() => {
    nock('https://api.github.com')
    .log(console.log)
    .get('/users/genarot')
    .reply(200, genarotResponse)
  });
  
  describe('Fetch data from user "genarot"', async () => {
    // To check the variable type of the response of the function.
    let response 
    before( async () => {
        response = await fetchUserData("genarot");
    })
    
    // It must be an object.
    it('should return an object', () => {
        expect(response).to.be.an("object");

    })

    // To check that the user fetched from the API be genarot
    it('should has a login property equals to "genarot"', () => {
        expect(response).to.have.deep.property("login", "genarot");

    })

    // To check that user Id is a number
    it('should has "id" property as a number', () => {
        expect(response.id).to.be.a('number')
    })

    // To check that followers and following are numbers
    it('should has "following" and "followers" properties as number', () => {
        expect(response.followers).to.be.a('number')
        expect(response.following).to.be.a('number')
    })

    // The property locaction must be Nicaragua
    it('should return "location" equals to Nicaragua', () => {
        expect(response).to.have.deep.property('location', 'Nicaragua')
    })
  }).timeout(5000);
});
