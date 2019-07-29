/**
  Dependencies
 */

const test = require("tape");
const EmailSuggester = require("../index.js");
es = new EmailSuggester([
  "online.no",
  "live.no",
  "live.com",
  "icloud.com",
  "yahoo.no",
  "lyse.net",
  "msn.com",
  "me.com"
]);

let testCounter = 1;

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@gnail.no");
  assert.equal(suggestions[0].email, "hello@gmail.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@yahop.no");
  assert.equal(suggestions[0].email, "hello@yahoo.no");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@yahuu.no");
  assert.equal(suggestions[0].email, "hello@yahoo.no");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@onlin.no");
  assert.equal(suggestions[0].email, "hello@online.no");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@gmali.no");
  assert.equal(suggestions[0].email, "hello@gmail.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@outlok.com");
  assert.equal(suggestions[0].email, "hello@outlook.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@iclod.no");
  assert.equal(suggestions[0].email, "hello@icloud.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@lysr.net");
  assert.equal(suggestions[0].email, "hello@lyse.net");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@msn.no");
  assert.equal(suggestions[0].email, "hello@msn.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@me.no");
  assert.equal(suggestions[0].email, "hello@me.com");
});

test("should suggest email #" + testCounter++, assert => {
  assert.plan(1);
  let suggestions = es.suggest("hello@md.com");
  assert.equal(suggestions[0].email, "hello@me.com");
});
