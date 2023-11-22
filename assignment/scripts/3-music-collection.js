console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection (collection, title, artist, yearPublished, tracks) {
  // initialize new object
  let newObject ={};      
  
  // populate newObject with arguments
  newObject.title = title; 
  newObject.artist = artist;
  newObject.yearPublished = yearPublished;
  // extra stretchy goal addition
  newObject.tracks = tracks;
  
  // add newObject to collection array and return newObject
  collection.push(newObject);
  return newObject;
}

// addToCollection function test code
// console.log ('Add first album to collection. object returned by function:', addToCollection(myCollection, '1999', 'Prince', 1982));
// console.log ('myCollection array after first call to addToCollection function:', myCollection);

// Extra stretchy goal data - tracks
let tracks1999 = [{name: '1999', duration: '6:15'}, {name: 'Little Red Corvette', duration: '5:03'}, {name: 'Delirious', duration: '4:00'}, {name: 'Lets Pretend Were Married', duration: '7:21'}, {name: 'D.M.S.R', duration: '8:17'}, {name: 'Automatic', duration: '9:28'}, {name: 'Something in the Water (Does Not Compute)', duration: '4:02'}, {name: 'Free', duration: '5:08'}, {name: 'Lady Cab Driver', duration: '8:19'}, {name: 'All the Critics Love U in New York', duration: '5:59'}, {name: 'International Lover', duration: '6:37'}];
let tracksIn3D = [{name: 'Eat It', duration: '3:21'}, {name: 'Midnight Star', duration: '4:35'}, {name: 'The Brady Bunch', duration: '2:37'}, {name: 'Buy Me a Condo', duration: '3:45'}, {name: 'I Lost on Jeopardy', duration: '3:28'}, {name: 'Polkas on 45', duration: '4:23'}, {name: 'Mr. Popeil', duration: '4:42'}, {name: 'King of Suede', duration: '4:13'}, {name: 'That Boy Could Dance', duration: '3:34'}, {name: 'Theme from Rocky XIII', duration: '3:37'}, {name: 'Nature Trail to Hell', duration: '5:55'}];
let tracksTopGun = [{name: 'Danger Zone', duration: '3:36'}, {name: 'Mighty Wings', duration: '3:51'}, {name: 'Playing with the Boys', duration: '3:59'}, {name: 'Lead Me On', duration: '3:47'}, {name: 'Take My Breath Away', duration: '4:11'}, {name: 'Hot Summer Nights', duration: '3:38'}, {name: 'Heaven in Your Eyes', duration: '4:04'}, {name: 'Through the Fire', duration: '3:46'}, {name: 'Destination Unknown', duration: '3:48'}, {name: 'Top Gun Anthem', duration: '4:12'}];
let tracksAroundTheWorld = [{name: 'Around the World in A Day', duration: '3:28'}, {name: 'Paisley Park', duration: '4:42'}, {name: 'Condition of the Heart', duration: '6:48'}, {name: 'Raspberry Beret', duration: '3:33'}, {name: 'Tamborine', duration: '2:47'}, {name: 'America', duration: '3:42'}, {name: 'Pop Life', duration: '3:43'}, {name: 'The Ladder', duration: '5:29'}, {name: 'Temptation', duration: '8:18'}];
let tracksSoTonight = [{name: 'Fade Into You', duration: '4:55'}, {name: 'Bells Ring', duration: '4:32'}, {name: 'Mary of Silence', duration: '6:02'}, {name: 'Five String Serenade', duration: '4:24'}, {name: 'Blue Light', duration: '5:10'}, {name: 'Shes My Baby', duration: '4:25'}, {name: 'Unreflected', duration: '3:42'}, {name: 'Wasted', duration: '5:31'}, {name: 'Into Dust', duration: '5:36'}, {name: 'So Tonight That I Might See', duration: '7:19'}];
let tracksAudioslave = [{name: 'Cochise', duration: '3:42'}, {name: 'Show Me Hot to Live', duration: '4:38'}, {name: 'Gasoline', duration: '4:39'}, {name: 'What You Are', duration: '4:09'}, {name: 'Like a Stone', duration: '4:54'}, {name: 'Set it Off', duration: '4:23'}, {name: 'Shadow on the Sun', duration: '5:43'}, {name: 'I am the Highway', duration: '5:35'}, {name: 'Exploder', duration: '3:26'}, {name: 'Hypnotize', duration: '3:27'}, {name: 'Bring Em Back Alive', duration: '5:29'}, {name: 'Light My Way', duration: '5:03'}, {name: 'Getaway Car', duration:'4:59'}, {name: 'The Last Remaining Light', duration: '5:17'}];




// Add Albums to collection (with extra stretch tracks)
console.log('Adding first album to myCollection:', addToCollection (myCollection, '1999', 'Prince', 1982, tracks1999));
console.log('Adding second album to myCollection:', addToCollection (myCollection, 'In 3-D', 'Weird Al', 1984, tracksIn3D));
console.log('Adding third album to myCollection:', addToCollection (myCollection, 'Top Gun Soundtrack', 'Various Artists', 1986, tracksTopGun));
console.log('Adding fourth album to myCollection:', addToCollection (myCollection, 'Around the Worlds in a Day', 'Prince', 1985, tracksAroundTheWorld));
console.log('Adding fifth album to myCollection:', addToCollection (myCollection, 'So Tonight that I Might See', 'Mazzy Star', 1993, tracksSoTonight));
console.log('Adding sixth album to myCollection:', addToCollection (myCollection, 'Audioslave', 'Audioslave', 2002, tracksAudioslave));

console.log('Contents of myCollection after calling addToCollection 6Xs:', myCollection);

// showCollection function

function showCollection (collection) {
  for (let x of collection) {
    console.log(`"${x.title}" by ${x.artist}, published in ${x.yearPublished}.`);

  }
}

// Test show Collection Function
console.log('\nshowCollection Function test\n------------------------------');
showCollection(myCollection);

// findByArtist Function
function findByArtist (collection, artist) {
  let foundArtists = [];
  for (let x of collection) {
    if (x.artist === artist) {
      foundArtists.push(x);
    }
  }
  return foundArtists;
}

//Test findByArtistFunction
console.log('\nfindByArtist Function test\n------------------------------');
console.log('Search for "Mazzy Star" in myCollection (should return one element array):', findByArtist(myCollection, 'Mazzy Star'));
console.log('Search for "Toby Keith" in myCollection (should return empty array):', findByArtist(myCollection, 'Toby Keith'));
console.log('Search for "Prince" in myCollection (should return two element array):', findByArtist(myCollection, 'Prince'));


// stretch goal - search function
/* 
The returned output from search should meet these requirements:
Return a new array of all items in the collection matching all of the search criteria.
If no results are found, return an empty array.
If there is no search object, an empty search object, or missing artist/year data provided as 
input, return all albums from the collection being searched.
*/

function search (collection, searchCriteria) {
  let newArray = [];
  // console.log(`Searching collection ${collection} for criteria ${searchCriteria}`);
  // if serach criteria is absent or element of search criteria is absent, return all items of collection
  if (!searchCriteria || !searchCriteria.artist || !searchCriteria.year) {
    for (let x of collection){
      newArray.push(x);
    }
    return newArray;
  }
  // generate array based on serach criteria
  for (let y of collection){
    if ((y.artist === searchCriteria.artist) && (y.yearPublished === searchCriteria.year)) {
      newArray.push(y);      
    }
  }
  return newArray;
}

//Test search Function
console.log('\nsearch Function test\n------------------------------');
console.log('search results with missing search argument (Expect array length 6):\n',search (myCollection));
console.log('search results with empty search argument (Expect array length 6):\n',search (myCollection, {}));
console.log('search results with missing artist search argument (Expect array length 6):\n',search (myCollection, {year: 1982}));
console.log('search results with missing year search argument(Expect array length 6):\n',search (myCollection, {artist: 'Prince'}));
console.log('search results with "Prince" and 1982(Expect array length 1):\n',search (myCollection, {artist: 'Prince', year: 1982}));
console.log('search results with "Prince" and 2001(Expect empty array):\n',search (myCollection, {artist: 'Prince', year: 2001}));
// Code shows as failing in automated tests but as seen in the following code,
//   function returns correct results
console.log('search results with "Wilco" and 1908(Expect empty array):\n',search (myCollection, {artist: 'Wilco', year: 1908}));

// Extra stretchy stretch goal - adding track functionality
//   track data added with original data population
//   added functionality to orignal addToCollection function to accpet tracks

//   original showCollection Function modified to display tracks
function showCollectionTracks (collection) {
  for (let x of collection) {
    console.log(`"${x.title}" by ${x.artist}, published in ${x.yearPublished}.`);
    for (y = 0; y < x.tracks.length; y++) {
      console.log(`     ${y+1}. ${x.tracks[y].name}: ${x.tracks[y].duration}`);
    }
  }
}

// Test show Collection Function (with tracks)
console.log('\nshowCollection Function test (with tracks)\n------------------------------');
showCollectionTracks(myCollection);



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
