const Books = require("../models/books");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();
chai.use(chaiHttp);

let book = {
  name: "Livro #1",
  ogName: "#1 Book",
  author: "Author Unknown",
  year: "2022",
  categories: ["Unknown", "Ficção"],
};

const bookObj = new Books(book);

describe("Books", () => {
  describe("/GET books", () => {
    it("it should GET all the books", (done) => {
      chai
        .request(app)
        .get("/api/books")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST books", () => {
    it("it should new POST a book", (done) => {
      chai
        .request(app)
        .post("/api/books")
        .send(book)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id books", () => {
    it("it should new POST a book", (done) => {
      blog.save((err, _book) => {
      chai
        .request(app)
        .post("/api/books" + _book.id)
        .send(book)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
      })
    });
  });
});
