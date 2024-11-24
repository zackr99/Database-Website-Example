const util = require('util');
require('util.promisify').shim();

const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express()
var port = process.env.PORT || 4523;

var test = false;
var mysql = require('mysql');              //Require mysql

var con = mysql.createConnection({        //Connect to Zacks database on engineering server
	host: "classmysql.engr.oregonstate.edu",
	user: "cs340_chandz",
	password: "5759",
	database: "cs340_chandz"
});

con.connect(function(err) {              //Check to see if it is connected
	if (err) throw err;
	console.log("connected");
});

///Handlebar functions
app.engine('handlebars', exphbs.engine(({ defaultLayout: 'main' })))
app.set('view engine', 'handlebars')
app.use(express.json());
app.use(express.static('public'));



app.get('/', function(req, res, next) {
	if (true) {
		res.status(200).render('index');
	}
	else {
		next();
	}
});

app.get('/index', function(req, res, next) {
	if (true) {

		res.render('index');

	}
	else {
		next();
	}
});

/////////INITIAL QUERY OFF DATABASE TO DISPLAY/////////////////
app.get('/Artists', function(req, res) {
	if (true) {
		con.query("SELECT * FROM Artists", function(err, result, fields) {
			if (err) throw err;

			//console.log(result);
			res.render('Artists', { result: result });
		});
	}
});
//////SEARCH ARTIST/////////////////////////////////////////////////////
app.post('/search/Artists', function(req, res, next) {
	if (true) {
		var temp = req.body;
		con.query("SELECT * FROM Artists WHERE ArtistID = ?", [temp.ArtistID], function(err, Artists, fields) {	
			if (err) throw err;
			res.status(200).send(JSON.stringify(Artists));
		});
	}
	else {
		next();
	}
});
///////ADD ARTIST//////////////////////////////////////////////////////
app.post('/add/Artists', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.ArtistID == "" || temp.About == "")
			res.status(500).send("Both fields must be filled.");
		else {
			con.query("INSERT INTO Artists (ArtistID, About) VALUES(?, ?);", [temp.ArtistID, temp.About], function(err, Artists, fields) {
				if (err) throw err;
				res.status(200).render('Artists', { Artists: Artists });
			});
		}
	}
	else {
		next();
	}
});
///////UPDATE ARTIST//////////////////////////////////////////////////////
app.post('/update/Artists', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.Original == "" || temp.ArtistID == "" || temp.About == "")
			res.status(500).send("All fields must be filled.");
		else {
			con.query("SELECT * FROM Artists WHERE ArtistID = ?", [temp.Original, temp.About], function(err, Artists, fields) { ///////This is an error check to make sure artist exists.
				if (err) throw err;
				var test = JSON.stringify(Artists);
				if (test !== "[]") {
					con.query("UPDATE Artists SET ArtistID = ?, About = ? WHERE ArtistID = ?;", [temp.ArtistID, temp.About, temp.Original], function(err, Artists, fields) {
						if (err) throw err;
						res.status(200).send();
					});
				}
				else {
					res.status(500).send("Invalid Artist.");
				}
			});

		}
	}
	else {
		next();
	}
});
///////DELETE ARTIST//////////////////////////////////////////////////////

app.post('/delete/Artists', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.ArtistID == "" || temp.About == "")
			res.status(500).send("Both fields must be filled.");
		else {
			con.query("SELECT * FROM Artists WHERE ArtistID = ?", [temp.ArtistID], function(err, Artists, fields) { ///////This is an error check to make sure artist exists.
				if (err) throw err;
				var test = JSON.stringify(Artists);
				if (test !== "[]") {
					con.query("DELETE from Artists WHERE ArtistID = ?;", [temp.ArtistID], function(err, Artists, fields) {
						if (err) throw err;
						res.status(200).render('Artists', { Artists: Artists });
					});
				}
				else {
					res.status(500).send("Invalid Artist.");
				}
			});
		}
	}
	else {
		next();
	}
});

/////////INITIAL QUERY OFF DATABASE TO DISPLAY/////////////////
app.get('/Playlist', function(req, res, next) {
	if (true) {
		con.query("SELECT * FROM Playlists", function(err, playlist, fields) {
			if (err) throw err;
			res.render('Playlist', { playlist: playlist });
		});
	}
	else {
		next();
	}
});

//////ADD playlist//////////////////////////////////////////////////////////////////////
app.post('/add/Playlist', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.OwnerID == "" || temp.PlaylistName == "" || temp.PlaylistGenre == "") res.status(500).send("All fields must be filled.");
		else {
			con.query("INSERT INTO Playlists (OwnerID, PlaylistName ,PlaylistGenre) VALUES(?, ?, ?);", [temp.OwnerID, temp.PlaylistName, temp.PlaylistGenre], function(err, playlist, fields) {
				if (err) throw err;
				res.status(200).render('Playlist', { playlist: playlist });
			});
		}
	}
	else {
		next();
	}
});
///////Search playlist///////////////////////////////////////////////////////////////
app.post('/search/Playlist', function(req, res, next) {
	if (true) {
		var temp = req.body;
		con.query("SELECT * FROM Playlists WHERE PlaylistName = ? ", [temp.OwnerID, temp.PlaylistName, temp.PlaylistGenre], function(err, playlist, fields) {
			if (err) throw err;
			res.status(200).send(JSON.stringify(playlist));
		});
	}
	else {
		next();
	}
});
////Update playlist//////////////////////////////////////////////////////////////////
app.post('/update/Playlist', (req, res, next) => {
	if (true) {
		var temp = req.body
		if (temp.PlaylistName == "" || temp.OwnerID == "" || temp.PlaylistGenre == "") res.status(500).send("All entries must be filled")
		else {
			con.query("SELECT * FROM Playlists WHERE PlaylistName = ?", [temp.PlaylistName], function(err, playlist, fields) { ///////This is an error check to make sure playlist exists.
				if (err) throw err;
				var test = JSON.stringify(playlist);
				if (test !== "[]") {
					con.query("UPDATE Playlists SET OwnerID = ? , PlaylistName = ?, PlaylistGenre = ? WHERE PlaylistName = ?;", [temp.OwnerID, temp.PlaylistName, temp.PlaylistGenre, temp.PlaylistInitial], function(err, playlist, field) {
						if (err) throw err;
						res.status(200).send();
					});
				}
				else {
					res.status(500).send("Invalid Playlist");
				}
			});
		}
	}
	else {
		next();
	}
});
///////Delete Playlist///////////////////////////////////////
app.post('/delete/Playlist', (req, res, next) => {
	if (true) {
		var temp = req.body
		if (temp.PlaylistName == "") res.status(500).send("Enter a valid playlist");
		else {
			con.query("SELECT * FROM Playlists WHERE PlaylistName = ?", [temp.PlaylistName],
				function(err, playlist, fields) { ///////This is an error check to make sure artist exists.
					if (err) throw err;
					var test = JSON.stringify(playlist);
					if (test !== "[]") {
						con.query("DELETE from Playlists WHERE PlaylistName = ?;", [temp.PlaylistName, temp.OwnerID, temp.PlaylistGenre], function(err, playlist, field) {
							if (err) throw err;
							res.status(200).render('Playlist', { playlist: playlist });
						});
					}
					else {
						res.status(500).send("Invalid Playlist");
					}
				});
		}
	}
	else {
		next();
	}
});

/////////INITIAL QUERY OFF DATABASE TO DISPLAY/////////////////
app.get('/Friends', function(req, res, next) {
	if (true) {
		con.query("SELECT * FROM UsersFriends", function(err, Friends, fields) {
			if (err) throw err;

			//console.log(result);
			res.render('Friends', { Friends: Friends });
		});
	}
	else {
		next();
	}
});

app.post('/search/Friends', function(req, res, next) {
	if (true) {
		var temp = req.body;
		con.query("SELECT * FROM UsersFriends WHERE UserID = ?", [temp.UserID], function(err, Friends, fields) {
			if (err) throw err;
			res.status(200).send(JSON.stringify(Friends));
		});
	}
	else {
		next();
	}
});

app.post('/add/Friends', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.UserID == "" || temp.FriendID == "")
			res.status(500).send("Both fields must be filled.");
		else {
			con.query("SELECT * FROM Users WHERE UserID = ?", [temp.UserID], function(err, Users, fields) { ///////This is an error check to make sure User exists.
				if (err) throw err;
				var test = JSON.stringify(Users);
				con.query("SELECT * FROM Users WHERE UserID = ?", [temp.FriendID], function(err, UsersF, fields) { ///////This is an error check to make sure friend is a valid user.
					if (err) throw err;
					NotTemp = JSON.stringify(UsersF);
					if (test !== "[]" && NotTemp !== "[]") {
						con.query("INSERT INTO UsersFriends (UserID, FriendID) VALUES (?, ?);", [temp.UserID, temp.FriendID], function(err, Friends, fields) {
							if (err) throw err;
							res.status(200).render('Friends', { Friends: Friends });
						});
					}
					else {
						res.status(500).send("Invalid User or Friend.");
					}
				});
			});
		}
	}
	else {
		next();
	}
});

app.post('/delete/Friends', function(req, res, next) {
	if (true) {
		var temp = req.body;
		con.query("SELECT * FROM Users WHERE UserID = ?", [temp.UserID], function(err, Users, fields) { ///////This is an error check to make sure User exists.
			if (err) throw err;
			var test = JSON.stringify(Users);
			if (test !== "[]") {
				con.query("DELETE from UsersFriends WHERE UserID = ?;", [temp.UserID], function(err, Friends, fields) {
					if (err) throw err;
					res.status(200).render('Friends', { Friends: Friends });
				});
			}
			else {
				res.status(500).send("Invalid User.");
			}
		});
	}
	else {
		next();
	}
});

/////////INITIAL QUERY OFF DATABASE TO DISPLAY/////////////////
app.get('/Songs', function(req, res, next)
{
  if (true)
  {
    con.query("SELECT * FROM Songs", function(err, Songs, fields) {
      if (err) throw err;
      res.render('Songs', {Songs: Songs});
    });
  }
  else
  {
    next();
  }
});

//////////SEARCH SONGS/////////////////////////////////////
app.post('/search/Songs', function(req, res, next) {
	if (true) {
		var temp = req.body;
		con.query("SELECT * FROM Songs WHERE SongID = ? ", [temp.SongID], function(err, Songs, fields) {
			if (err) throw err;
			res.status(200).send(JSON.stringify(Songs));
		});
	}
	else {
		next();
	}
});

///////////ADD SONGS/////////////////////////////////
app.post('/add/Songs', function(req, res, next) 
{
	if(true)
	{
	  var temp = req.body;
	  if(temp.SongID == "" || temp.CreatorID == "" || temp.Time == "") 
		  res.status(500).send("All fields must be filled.");
	  else
	  {
			con.query("SELECT * FROM Artists WHERE ArtistID = ?", [temp.CreatorID], function(err, Artists, fields){ ///////This is an error check to make sure Artist exists.
				if (err) throw err;
				var test = JSON.stringify(Artists);
				if(test !== "[]")
				{
					con.query("INSERT INTO Songs (SongID, CreatorID, Time) VALUES (?, ?, ?);", [temp.SongID, temp.CreatorID, temp.Time], function(err, Songs, fields){
						if (err) throw err;
						res.status(200).render('Songs', {Songs: Songs});
					});
				}
				else
				{
					res.status(500).send("Invalid Artist.");
				}
			});
		 
		}
	}
	else
	{
		next();
	}
});

////////UPDATE SONG////////////////////////////////
app.post('/update/Songs', function(req, res, next) 
{
	if(true)
	{
		var temp = req.body;
		if(temp.OriginalSID == "" || temp.SongID == "" || temp.CreatorID == "" || temp.Time == "") 
			res.status(500).send("All fields must be filled.");
		else
		{
			con.query("SELECT * FROM Songs WHERE SongID = ? ", [temp.OriginalSID], function(err, Song, fields) { ///////This is an error check to make sure Song exists.
				if (err) throw err;
				var test = JSON.stringify(Song);
				con.query("SELECT * FROM Artists WHERE ArtistID = ?", [temp.CreatorID], function(err, Artists, fields){ ///////This is an error check to make sure Artist exists.
					if (err) throw err;
					NotTemp = JSON.stringify(Artists);
					if(test !== "[]" && NotTemp !== "[]")
					{
						con.query("UPDATE Songs SET SongID = ?, CreatorID = ?, Time = ? WHERE SongID = ?;", [temp.SongID, temp.CreatorID, temp.Time, temp.OriginalSID], function(err, Songs, fields){
							if (err) throw err;
							res.status(200).render('Songs', {Songs: Songs});
						});
					}
				
					else
					{
						res.status(500).send("Invalid Song or Artist");
					}
				});
			});
		}	 
	}
	else
	{
		next();
	}
});

////////DELETE SONG////////////////////////////////
app.post('/delete/Songs', function(req, res, next) 
{
	if(true)
	{
		var temp = req.body;
		con.query("SELECT * FROM Songs WHERE SongID = ?", [temp.SongID], function(err, Songs, fields){ ///////This is an error check to make sure Song exists.
			if (err) throw err;
			var test = JSON.stringify(Songs);
			if(test !== "[]")
			{
				con.query("DELETE from Songs WHERE SongID = ?;", [temp.SongID], function(err, Songs, fields){
				if (err) throw err;
				res.status(200).render('Songs', {Songs: Songs});
				});
			}
			else
			{
				res.status(500).send("Invalid Song.");
			}
		});
	}
	else
	{
		next();
	}
});

app.get('/Users', function(req, res, next) {
	if (true) {
		con.query("SELECT * FROM Users", function(err, Users, fields) {
			if (err) throw err;
			res.render('Users', { Users: Users });
		});
	}
	else {
		next();
	}
});
//////ADD USER//////////////////////////////////////////////////
app.post('/add/Users', function(req, res, next) {
	if (true) {
		var temp = req.body;
		if (temp.UserID == "" || temp.Email == "" || temp.AboutUser == "") res.status(500).send("All fields must be filled.");
		else {
			con.query("INSERT INTO Users (UserID , Email , AboutUser) VALUES(?,?,?)", [temp.UserID, temp.Email, temp.AboutUser], function(err, user, fields) {
				if (err) throw err;
				res.status(200).render('Playlist', { user: user });
			});
		}
	}
	else {
		next();
	}
});
app.get('*', function(req, res, next) {
	res.status(404).render('404', {
		path: req.url
	})
});
///////Update USER//////////////////////////////////////////////////
app.post('/update/Users', (req, res, next) => {
	if (true) {
		var temp = req.body;
		if (temp.UserID == "" || temp.Email == "" || temp.AboutUser == "") res.status(500).send("All entries must be filled");
		else {
			con.query("SELECT * FROM Users WHERE UserID = ?;", [temp.UserID], function(err, user, fields) { ///////This is an error check to make sure User exists.
				if (err) throw err;
				var test = JSON.stringify(user);
				if (test !== "[]") {
					con.query("UPDATE Users SET UserID = ?, Email = ?, AboutUser = ? WHERE UserID = ?;", [temp.OwnerID, temp.PlaylistName, temp.PlaylistGenre, temp.InitUserID], function(err, user, field) {
						if (err) throw err;
						res.status(200).send();
					});
				}
				else {
					res.status(500).send("Invalid Playlist");
				}
			});
		}
	}
	else {
		next();
	}
});
///////Search USER////////////////////////////////////////////////
app.post('/search/Users', function(req, res, next) {
	if (true) {
		var temp = req.body;
		console.log('TEST made it to function.');
		console.log(temp.UserID);
		con.query("SELECT * FROM Users WHERE UserID = ? ", [temp.UserID, temp.Email, temp.AboutUser], function(err, user, fields) {
			if (err) throw err;
			res.status(200).send(JSON.stringify(user));
		});
	}
	else {
		next();
	}
});
///////DELETE USER////////////////////////////////////////////
app.post('/delete/Users', (req, res, next) => {
	if (true) {
		var temp = req.body;
		if (temp.UserID == "") res.status(500).send("All fields must be filled");
		else {
			con.query("SELECT * FROM Users WHERE UserID = ?;", [temp.UserID], function(err, user, fields) { ///////This is an error check to make sure User exists.
				if (err) throw err;
				var test = JSON.stringify(user);
				if (test != "[]") {
					con.query("DELETE from Users WHERE UserID = ?;", [temp.UserID, temp.Email, temp.AboutUser], function(err, user, field) {
						if (err) throw err;
						res.status(200).render('Users', { user: user });
					});
				}
				else {
					res.status(500).send("Invalid User");
				}
			});
		}
	}
	else {
		next();
	}
});
///////404 Page///////////////////////////////////////////////
app.get('*/*', function(req, res, next) {
	res.status(404).render('404', {
		path: req.url
	})
});

///////SERVER ROUTING////////////////////////////////////////
app.listen(port, function(err) {
	if (err) {
		throw err;
	}
	console.log("== Server is listening on port", port);
});