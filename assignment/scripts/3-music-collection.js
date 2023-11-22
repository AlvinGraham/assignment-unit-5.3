console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
  // initialize new object
  let newObject ={};      
  
  // populate newObject with arguments
  newObject.title = title; 
  newObject.artist = artist;
  newObject.yearPublished = yearPublished;
  
  // add newObject to collection array and return newObject
  collection.push(newObject);
  return newObject;
}

// add first album to collection
console.log ('Add first album to collection. object returned by function:', addToCollection(myCollection, '1999', 'Prince', 1982));
console.log ('myCollection array after first call to addToCollection function:', myCollection);




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
