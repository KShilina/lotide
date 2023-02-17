
const assert = require('chai').assert;
 //const tail  = require('../tail');
 const {tail} = require("../index")


const words = ["Hello", "Lighthouse", "Labs"]
const result = tail(words);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns true for 3", () => {
    assert.deepEqual(words.length, 3);
  });

  it("returns true for ['Labs'] ", () => {
    assert.deepEqual(words[1], 'Lighthouse');
  });

});