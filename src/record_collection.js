var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


// Only change code below this line
function updateRecords(id, prop, value) {
  //console.log("id", id);
  //console.log("prop", prop);
  //console.log("value", value);
  if (value !== "" && prop !== "tracks") {
    //console.log('value', value);
    collection[id][prop] = value;
  
  }
  else if (prop === "tracks" && value !== "") {
     collection[id][prop].push(value);
  } else {
      delete collection[id][prop];
  }
  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2548, "tracks", ""));
