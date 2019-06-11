describe("Airport", function() {
var airport;
var plane;

  beforeEach(function() {
  airport = new Airport();
  plane = new Plane();
  });

  it("can land a plane", function() {
    airport.land(plane)
    expect(airport.hangar()).toEqual ([plane])

  });

});
