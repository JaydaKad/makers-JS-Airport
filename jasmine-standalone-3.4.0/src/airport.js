function Airport(){
  this._hangar = [];

};

Airport.prototype.land = function(plane, weather){
  if (weather === "stormy"){
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
