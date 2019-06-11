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

  it("can allow plane to take off", function() {
    airport.land(plane)
    airport.takeOff()
    expect(airport.hangar()).toEqual ([])
  });

  it("won't allow plane to take off if weather is stormy", function() {
    airport.land(plane)
    expect(function() { airport.takeOff("stormy") } ).toThrow(new Error("Takeoff denied"));

  });


});
