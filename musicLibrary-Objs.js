'use strict'

let library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a track from the library
// track = { id: "t02",
//       name: "Model View Controller",
//       artist: "James Dempsey",
//       album: "WWDC 2003"}
// printTrack(track)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printTrack = function(trackId) {
  let track = library.tracks[trackId]
  console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})` )
}
// printTrack("t02")


// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

let printPlaylists = function (library) {
  let playlists = library.playlists
  for (let listId in playlists) {
    let list = playlists[listId]
    console.log(`${listId}: ${list.name} - ${list.tracks.length} tracks`)
  }
}
printPlaylists(library)


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
//
let printTracks = function (library) {
  let tracks = library.tracks
  for (let track in tracks) {
    printTrack(track)
  }
}
// printTracks(library)


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
//
var printPlaylist = function (playlistId) {
  let playlist = library.playlists[playlistId]
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`)
  playlist.tracks.forEach(function(trackId) {
    printTrack(trackId)
  })

}
// printPlaylist("p01")

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//
// }


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

let addTrack = function (name, artist, album) {
  let id = uid()
  let track = {
            id: id,
            name: name,
            artist: artist,
            album: album
            }
  library.tracks[id] = track
}
// addTrack("Jupiter", "FM-84", "Atlas")

// adds a playlist to the library

var addPlaylist = function (name) {
  let id = uid()
  let playlist = {
                id: id,
                name: name,
                tracks: []
                 }
  library.playlists[id] = playlist
  console.log(playlist)
}
// addPlaylist("My Favorites")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  //loop through the tracks to search for (/'query'/g)
  // .search(/)
}
