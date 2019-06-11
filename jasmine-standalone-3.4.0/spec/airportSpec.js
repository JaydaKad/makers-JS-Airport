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

  it("won't land a plane if weather is stormy", function() {
    expect(function() {airport.land(plane, "stormy")}).toThrow(new Error("Landing denied"));
  });

  it("won't land a plane if capacity is full", function() {
    for(i = 0; i < 30; i++) {
      airport.land(plane)
    };
    expect(function() {airport.land(plane)}).toThrow(new Error("Landing denied"));
  });

});
