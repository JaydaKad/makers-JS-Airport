function Airport(){
  this._hangar = [];
  this._capacity = 30;
};

Airport.prototype.land = function(plane, weather){
  if (weather === "stormy" || this._capacity <= this._hangar.length) {
    throw new Error('Landing denied')
  } else {
    this._hangar.push(plane);
  };
};

Airport.prototype.hangar = function(){
  return this._hangar;
};

Airport.prototype.takeOff = function(weather) {
  if (weather === "stormy"){
      throw new Error('Takeoff denied')
  } else {
    this._hangar.pop();
  };
  };

Airport.prototype.setCapacity = function(number) {
  this._capacity = number;
};

Airport.prototype.capacity = function(){
  return this._capacity;
};
