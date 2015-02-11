describe("coinCombination", function() {
  it("returns coin combination for a value equal to one coin", function() {
    expect(coinCombination(25)).to.eql([0,0,0,1]);
  });

  it("returns coin combination for a value equal to one coin", function() {
    expect(coinCombination(35)).to.eql([0,0,1,1]);
  });

  it("returns coin combination for a value equal to one coin", function() {
    expect(coinCombination(40)).to.eql([0,1,1,1]);
  });

  it("returns coin combination for a value equal to one coin", function() {
    expect(coinCombination(41)).to.eql([1,1,1,1]);
  });

  it("returns coin combination for a value equal to one coin", function() {
    expect(coinCombination(178)).to.eql([3,0,0,7]);
  });
});
