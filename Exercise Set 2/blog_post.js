// Constructor Function
// we dont add the last 3 properties bc we didnt post the blog yet so there cant be any views, comments and its obviously not live atm.

let post = new Post("a", "b", "c");

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
