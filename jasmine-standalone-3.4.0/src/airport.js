function Airport(){
  this._hangar = [];

};

Airport.prototype.land = function(plane){
  this._hangar.push(plane);
};

Airport.prototype.hangar = function(){
  return this._hangar;
};

Airport.prototype.takeOff = function() {
  this._hangar.pop();
};
