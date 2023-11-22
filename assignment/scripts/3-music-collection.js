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

// addToCollection function test code
// console.log ('Add first album to collection. object returned by function:', addToCollection(myCollection, '1999', 'Prince', 1982));
// console.log ('myCollection array after first call to addToCollection function:', myCollection);

// Add Albums to collection
console.log('Adding first album to myCollection:', addToCollection (myCollection, '1999', 'Prince', 1982));
console.log('Adding second album to myCollection:', addToCollection (myCollection, 'In 3-D', 'Weird Al', 1984));
console.log('Adding third album to myCollection:', addToCollection (myCollection, 'Top Gun Soundtrack', 'Various Artists', 1986));
console.log('Adding fourth album to myCollection:', addToCollection (myCollection, 'Around the Worlds in a Day', 'Prince', 1985));
console.log('Adding fifth album to myCollection:', addToCollection (myCollection, 'So Tonight that I Might See', 'Mazzy Star', 1993));
console.log('Adding sixth album to myCollection:', addToCollection (myCollection, 'Audioslave', 'Audioslave', 2002));

console.log('Contents of myCollection after calling addToCollection 6Xs:', myCollection);




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
