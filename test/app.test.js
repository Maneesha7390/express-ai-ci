const request = require('supertest')
const app = require('../app.js')

describe('GET /', ()=>{
    it('should return message from Maneesha', (done)=>{
        request(app).get('/').expect(200).expect((res)=>{
            if(!res.text.toLowerCase().trim().includes('maneesha')){
                throw new Error("Response doesn't contain expected text maneesha")
            }
        }).end(done)
    })
    it('should fail intentionally for testing GPT', (done) => {
    request(app)
      .get('/non-existent-route')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it('should fail intentionally', function() {
  throw new Error('Intentional test failure');
});
})