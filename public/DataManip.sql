--We are using the special character : colon to identify user input value
--As well as, each Userinputted Variable will have the denotion UI[Insert_variable_name] for User Input

--*******************************************************
--Initial database viewing queries
--*******************************************************

--Get a list of Users
SELECT UserID FROM Users;

--Get a list of playlist

SELECT PlaylistName FROM Playlists;
 
--Get a list of Artists
SELECT ArtistID FROM Artists;

--Get a list of Songs
SELECT SongID FROM Songs;

--*******************************************************
--Database queries for specific database search functions
--*******************************************************

--Get a specific User
Select * FROM Users WHERE UserID = ':UIUser'; 

--Get a specific Playlist

SELECT * FROM Playlists WHERE PlaylistName = ':UIPlaylist';

--Get a specific Artist	
Select * FROM Artists WHERE ArtistID = ':UIArtist';

--Get a specific Song	
Select SongID AS Song_Title, CreatorID AS Artist, Songs.Time AS Time_in_Seconds FROM Songs WHERE SongID = ':UISong';

--Get a list of all the users playlists
Select Playlists.OwnerID, Playlists.PlaylistName FROM Playlists JOIN Users ON Playlists.OwnerID = Users.UserID WHERE Users.UserID = ':UIUserP';

-- Get a list of all the users Artist
SELECT UsersArtists.UserID,  UsersArtists.ArtistID FROM UsersArtists JOIN Users ON  UsersArtists.UserID = Users.UserID WHERE Users.UserID = ':UIUserA';

-- Get a list of all the users Friends
SELECT UsersFriends.UserID, UsersFriends.FriendID FROM UsersFriends JOIN Users ON  UsersFriends.UserID = Users.UserID WHERE Users.UserID = ':UIUserF';

-- Get a list of all the playlists Songs
Select PlaylistsSongs.PlaylistName, PlaylistsSongs.SongID FROM PlaylistsSongs JOIN Playlists ON Playlists.PlaylistName = PlaylistsSongs.PlaylistName WHERE PlaylistsSongs.PlaylistName = ':UIPlaylistS';

--Get a list of all the Artists Songs
Select Songs.SongID AS Song_Title, Songs.CreatorID AS Artist, Songs.Time AS Time_in_Seconds FROM Songs JOIN Artists ON Artists.ArtistID = Songs.SongID;

--*******************************************************
--Database queries for insertion
--*******************************************************

--Insert User
INSERT INTO Users (UserID , Email , AboutUser) VALUES (':UIUserID' , ':UIEmail' , ':UIAboutUser')

-- Insert Playlist
INSERT INTO Playlists (OwnerID, PlaylistName, PlaylistGenre) VALUES (':UIOwnerID' ,':UIPlaylistName' , ':UIPlaylistgenre' );

--Insert Artist
INSERT INTO Artists (ArtistID, About) VALUES(':UIArtistID' , 'UIAbout');

--Insert Songs	
INSERT INTO Songs (SongID, CreatorID, Time) VALUES (':UISongID', ':UICreatorID', :UITime);

--Insert Friends
INSERT INTO `UsersFriends` (`UserID`, `FriendID`) VALUES (':UIUserID', ':UIFriendID');

--********************************************************
--Database queries for editing
--********************************************************

--Update Users
UPDATE Users SET UserID = ':UIUserID', Email = ':UIEmail', AboutUser = ':UIAboutUser' WHERE UserID = ':UIinitialUserID';

--Update Playlist
UPDATE Playlists SET OwnerID = ':UIOwnerID', PlaylistName = ':UIPlaylistName', PlaylistGenre = 'UIPlaylistGenre' WHERE PlaylistName = 'UIinitialPlaylistName';

--Update Artist
UPDATE Artists SET ArtistID = ':UIArtistID', About = 'UIAbout' WHERE ArtistID = 'UIinitialArtistID';

--Update Songs
UPDATE Songs SET SongID = ':UISongID', CreatorID =':UICreatorID', Time = 'UITime' WHERE SongID = 'UIinitialSongID';

--Update Friends
UPDATE UsersFriends SET UserID = ':UIUserID', FriendID =':UIFriendID' WHERE UIUserID = 'UIinitialUserID';

--********************************************************
--Database queries for deleting 
--********************************************************

--Delete users
DELETE from Users WHERE UserID = 'UIdeleteUser';

--Delete playlist
DELETE from Playlists WHERE PlaylistName = 'UIDeletePlaylist';

--Delete Songs
DELETE from Songs WHERE SongID = 'UIDeleteSong';

--Delete Artist
DELETE from Artists WHERE ArtistID = 'UIDeleteArtist';

--Delete Artist
DELETE from UsersFriends WHERE UserID = 'UIDeleteFriend';