// the script to run tests of other scripts in.

// make some test red mark objects
test1 = [
    {date:new Date()}
]

test2 = [
    {date: new Date()},
    {date: new Date()}
]

test3 = [
    {date: new Date("2020-2-2")},
    {date: new Date("2020-3-15")}, // seems to be one date behind for some reason?
    {date: new Date()}
]

console.log(GetPermittedPostingDate(test1, 3))
console.log(GetPermittedPostingDate(test2, 3))
console.log(GetPermittedPostingDate(test3, 3))

console.log("Setting up dummy DB...")
SetupInitialDB()
// console.log(GetDB())

let postForm = new FormData(document.getElementById("post_form"))
let object = {};
  formData.forEach((value, key) => {
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  })