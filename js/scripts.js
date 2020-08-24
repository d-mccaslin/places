// Place - ID / Location / Time of year / Landmarks / Notes / Star rating
// Visit Log - places

// Business logic for Place

function Place(name, location, seasonVisited) {
  this.name;
  this.location;
  this.seasonVisited;
}

Place.prototype.tagLine = function() {
  return this.name;
}

// Business logic for Visit Log

function VisitLog() {
  this.places = [];
  this.currentId = 0;
}

VisitLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

VisitLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

VisitLog.prototype.findPlace = function(id) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

VisitLog.prototype.deletePlace = function(id) {
  for (let i = 0; i < this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}




