SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Playlists;
DROP TABLE IF EXISTS Artists;
DROP TABLE IF EXISTS Songs;
DROP TABLE IF EXISTS UsersArtists;
DROP TABLE IF EXISTS PlaylistsSongs;
DROP TABLE IF EXISTS UsersFriends;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `Users`
(
	 `UserID` varchar(20) NOT NULL,
	 `Email`  varchar(50) NOT NULL,
	 `AboutUser` varchar(250) DEFAULT NULL, 
	 PRIMARY KEY (`UserID`),
	 unique key `UserID` (`UserID`)
) Engine=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Users` (`UserID` , `Email` , `AboutUser`) VALUES
	('BlakBird45' , 'beardi@oregonstate,edu' , 'Likes most genres of music besides country and worhip music'),
	('SultryZack' , 'chandz@oregonstate.edu' , 'Likes rap music'),
	('meNElouS'  ,  'tacobel23@gmail.com' , 'I like cholupas and country music');

CREATE TABLE `Playlists`
(
	`PlaylistName` varchar(100) NOT NULL,
 	`OwnerID` varchar(20) NOT NULL,
 	`PlaylistGenre` varchar (20) DEFAULT NULL,
 	PRIMARY KEY (`PlaylistName`),
		CONSTRAINT `PlaylistsFK`
		FOREIGN KEY (`OwnerID`) REFERENCES `Users`(`UserID`) ON UPDATE CASCADE ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Playlists` (`OwnerID`, `PlaylistName`, `PlaylistGenre`) VALUES
	('BlakBird45', 'CodingVibes', 'Mixed'),
	('SultryZack', 'FortniteBoss', 'Mixed'),
	('SultryZack', 'Wrapped', 'Rap');

CREATE TABLE `Artists`
(
	 `ArtistID` varchar(50) NOT NULL,
	 `About` varchar(250) DEFAULT NULL,
	 PRIMARY KEY (`ArtistID`),
	 UNIQUE KEY `ArtistID` (`ArtistID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Artists` (`ArtistID`, `About`) VALUES
	('Linkin Park', 'RockBand In memory of Chester Bennington'),
	('Future', 'Rapper straight outta Georgia'),
	('Megaherz', 'German Neue Deutsche Härte band');

CREATE TABLE `Songs`
(
	 `SongID` varchar(100) NOT NULL,
	 `CreatorID` varchar(50),
	 `Time` int(4) NOT NULL,
	 PRIMARY KEY (`SongID`),
	 	CONSTRAINT `SongsFK` 
		FOREIGN KEY (`CreatorID`) REFERENCES `Artists`(`ArtistID`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 

INSERT INTO `Songs` (`SongID`, `CreatorID`, `Time`) VALUES
	('Castle of Glass', 'LINKIN PARK', 206),
	('Fine China' , 'Future', 133),
	('VOODOO', 'Future', 211);

CREATE TABLE `UsersArtists`
(
	`UserID` varchar(20) NOT NULL,
	`ArtistID` varchar(50) NOT NULL,
	PRIMARY KEY (`UserID`, `ArtistID`),
		CONSTRAINT `UAUsersFK` 
		FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON UPDATE CASCADE ON DELETE CASCADE,
		CONSTRAINT `UAArtistsFK` 
		FOREIGN KEY (`ArtistID`) REFERENCES `Artists`(`ArtistID`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `UsersArtists` (`UserID`, `ArtistID`) VALUES
	('BlakBird45', 'Linkin Park'),
	('BlakBird45' , 'Megaherz'),
	('SultryZack', 'Future');


CREATE TABLE `PlaylistsSongs`
(
	`PlaylistName` varchar(100) NOT NULL,
	`SongID` varchar(100) NOT NULL,
	PRIMARY KEY (`PlaylistName`, `SongID`),
		CONSTRAINT `PSPlaylistsFK` 
		FOREIGN KEY (`PlaylistName`) REFERENCES `Playlists`(`PlaylistName`) ON UPDATE CASCADE ON DELETE CASCADE,
		CONSTRAINT `PSSongsFK` 
		FOREIGN KEY (`SongID`) REFERENCES `Songs`(`SongID`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `PlaylistsSongs` (`PlaylistName`, `SongID`) VALUES
	('CodingVibes', 'Castle of Glass'),
	('FortniteBoss' , 'Fine China'),
	('Wrapped', 'VOODOO');

CREATE TABLE `UsersFriends`
(
	`UserID` varchar(20) NOT NULL,
	`FriendID` varchar(20) NOT NULL,
	PRIMARY KEY (`UserID`, `FriendID`),
		CONSTRAINT `UFUsersFK` 
		FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON UPDATE CASCADE ON DELETE CASCADE,
		CONSTRAINT `UFFriendsFK` 
		FOREIGN KEY (`FriendID`) REFERENCES `Users`(`UserID`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `UsersFriends` (`UserID`, `FriendID`) VALUES
	('BlakBird45', 'SultryZack');