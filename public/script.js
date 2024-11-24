//MOST OF THESE FUNCTIONS FOLLOW A EXTREMELY SIMILAR PATTERN LOOK AT ARTIST FUNCTIONS FOR DESCRIPTIONS.

/*Hide/Unhide/get_data artist*/
var ADisplayPlay = document.getElementById('ASearchButton');
function ShowAPlaylist() {							//ANY FUNCTION WITH SHOW IN IT JUST DISPLAYS HIDDEN STUFF
	var unhideplay = document.getElementById("ASearchText");
	var unhidelabel1 = document.getElementById("labelArtist");
	unhideplay.classList.toggle('hidden');
	unhidelabel1.classList.toggle('hidden');
}
if (ADisplayPlay) {
	ADisplayPlay.addEventListener('click', ShowAPlaylist);
	var AsearchA = document.getElementById("ASearchText");
	function AFsearchA() {
		var SearchA = AsearchA.value; //insert value here

		//Creating http request
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			//Clearing table and adding new stuff from query
			else {
				var fromServer = JSON.parse(event.target.response);
				var table = document.getElementById("SearchA")

				while (table.rows.length > 1) {
					table.deleteRow(1);
				}

				for (i = 0; i < fromServer.length; i++) {
					var insert = table.insertRow(1);
					var artistID = insert.insertCell(0);
					var about = insert.insertCell(1);
					artistID.innerHTML = fromServer[i].ArtistID;
					about.innerHTML = fromServer[i].About;
				}
			}
		});
		//Object creator
		toServer =
		{
			ArtistID: SearchA
		};
		//Editing and sending request to server
		var requsetURL = '/search/Artists';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));

	}
	if (AsearchA) {
		AsearchA.addEventListener("keypress", function(keyboardEvent) {
			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AFsearchA();
			}
		});
	}
}

var ADisplayAdd = document.getElementById('AAddButton');
function AShowAdd() {
	var unhidelabel1 = document.getElementById("labelAdd1");
	var unhidelabel2 = document.getElementById("labelAdd2");
	var unhideAdd = document.getElementById("AAddText");
	var unhideAdd2 = document.getElementById("AAddText2");

	unhidelabel1.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhideAdd.classList.toggle('hidden');
	unhideAdd2.classList.toggle('hidden');


}
if (ADisplayAdd) {
	ADisplayAdd.addEventListener('click', AShowAdd);
	var AArtistA = document.getElementById("AAddText");
	var AddAboutA = document.getElementById("AAddText2");
	function AArtistadd() {
		//Creating http request
		AddArtist = AArtistA.value;
		AddAbout = AddAboutA.value;
		var request = new XMLHttpRequest();
		//Awaiting reply from server
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		//Object creator
		toServer =
		{
			ArtistID: AddArtist,
			About: AddAbout
		};
		//Editing and sending request to server
		var requsetURL = '/add/Artists';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (AArtistA) {
		AArtistA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AArtistadd();
			}
		});
	}
	if (AddAboutA) {
		AddAboutA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AArtistadd();
			}
		});
	}
}

var ADisplayUpdate = document.getElementById('AUpdateButton');
function AShowUpdate() {
	var unhidePrev = document.getElementById("PrevName");
	var unhideUpdate = document.getElementById("AUpdateText");
	var unhideupdate2 = document.getElementById("AUpdateText2");
	var unhidelabel = document.getElementById("labelPrev");
	var unhidelabel1 = document.getElementById("labelupdate1");
	var unhidelabel2 = document.getElementById("labelupdate2");
	unhidePrev.classList.toggle('hidden');
	unhideUpdate.classList.toggle('hidden');
	unhideupdate2.classList.toggle('hidden');
	unhidelabel.classList.toggle('hidden');
	unhidelabel1.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
}
if (ADisplayUpdate) {
	ADisplayUpdate.addEventListener('click', AShowUpdate);
	var AupdateO = document.getElementById("PrevName");
	var AUpdateA = document.getElementById("AUpdateText");
	var AUpdateAb = document.getElementById("AUpdateText2");
	function AArtistupdate() {
		//Creating http request
		var UpArtistO = AupdateO.value;
		var UpArtistA = AUpdateA.value;
		var UpArtistAb = AUpdateAb.value;
		var request = new XMLHttpRequest();
		//Awaiting reply from server
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		//Object creator
		toServer =
		{
			Original: UpArtistO,
			ArtistID: UpArtistA,
			About: UpArtistAb
		};
		//Editing and sending request to server
		var requsetURL = '/update/Artists';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}

	if (AupdateO) {
		AupdateO.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AArtistupdate();
			}
		});
	}
	if (AUpdateA) {
		AUpdateA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AArtistupdate();
			}
		});
	}
	if (AUpdateAb) {
		AUpdateAb.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AArtistupdate();
			}
		});
	}
}

var ADisplayDelete = document.getElementById('ADeleteButton');
function AShowDelete() {
	var unhideDelete = document.getElementById("ADeleteText");
	var unhidelabel1 = document.getElementById("labelDelete");
	unhideDelete.classList.toggle('hidden');
	unhidelabel1.classList.toggle('hidden');
}
if (ADisplayDelete) {
	ADisplayDelete.addEventListener('click', AShowDelete);
	var ADeleteA = document.getElementById("ADeleteText");
	function ADelete() {
		var temp = ADeleteA.value; //insert value here 
		//Creating http request
		var request = new XMLHttpRequest();
		//Awaiting reply from server
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		//Object creator
		toServer =
		{
			ArtistID: temp
		};
		//Editing and sending request to server
		var requsetURL = '/delete/Artists';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (ADeleteA) {
		ADeleteA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				ADelete();
			}
		});
	}
}

/*Hide/Unhide Friends*/
var FDisplaySearch = document.getElementById('FSearchUserButton');
function FShowSearch() {
	var unhideSearch = document.getElementById("FSearchText");
	var unhidelabel = document.getElementById("labelSearch");
	unhideSearch.classList.toggle('hidden');
	unhidelabel.classList.toggle('hidden');
}
if (FDisplaySearch) {
	FDisplaySearch.addEventListener('click', FShowSearch);
	var FUSearch = document.getElementById("FSearchText");
	function AUsearch() {
		var SearchF = FUSearch.value; //insert value here

		//Creating http request
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				var fromServer = JSON.parse(event.target.response);
				var table = document.getElementById("SearchF")

				while (table.rows.length > 1) {
					table.deleteRow(1);
				}

				for (i = 0; i < fromServer.length; i++) {
					var insert = table.insertRow(1);
					var UserID = insert.insertCell(0);
					var FriendID = insert.insertCell(1);
					UserID.innerHTML = fromServer[i].UserID;
					FriendID.innerHTML = fromServer[i].FriendID;
				}
			}
		});
		toServer =
		{
			UserID: SearchF
		};

		var requsetURL = '/search/Friends';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (FUSearch) {
		FUSearch.addEventListener("keypress", function(keyboardEvent) {
			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AUsearch();
			}
		});
	}
}

var FDisplayAdd = document.getElementById('FAddfriendButton');
function FShowAdd() {
	var unhideAdd = document.getElementById("FAddfriendText");
	var unhideAdd2 = document.getElementById("FAddfriendText2");
	var unhidelabel = document.getElementById("labelAdd1");
	var unhidelabel2 = document.getElementById("labelAdd2");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhideAdd.classList.toggle('hidden');
	unhideAdd2.classList.toggle('hidden');
}
if (FDisplayAdd) {
	FDisplayAdd.addEventListener('click', FShowAdd);
	var AddfriendU = document.getElementById("FAddfriendText");
	var AddfriendF = document.getElementById("FAddfriendText2");
	function Addfriend() {

		var UserAdd = AddfriendU.value;
		var FriendAdd = AddfriendF.value;
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		toServer =
		{
			UserID: UserAdd,
			FriendID: FriendAdd
		};
		var requsetURL = '/add/Friends';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (AddfriendU) {
		AddfriendU.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				Addfriend();
			}
		});
	}
	if (AddfriendF) {
		AddfriendF.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				Addfriend();
			}
		});
	}
}

var FDisplayDelete = document.getElementById('FDeleteFriendButton');
function FShowDelete() {
	var unhideDelete = document.getElementById("FFriendDeleteText");
	var unhidelabel = document.getElementById("labelDelete");
	unhidelabel.classList.toggle('hidden');
	unhideDelete.classList.toggle('hidden');
}
if (FDisplayDelete) {
	FDisplayDelete.addEventListener('click', FShowDelete);
	var DeleteFriend = document.getElementById("FFriendDeleteText");
	function DeleteF() {
		var temp = DeleteFriend.value; //insert value here 

		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		toServer =
		{
			UserID: temp
		};
		var requsetURL = '/delete/Friends';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (DeleteFriend) {
		DeleteFriend.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				DeleteF();
			}
		});
	}

}


/*Hide/Unhide Playlist*/
var PDisplaySearch = document.getElementById('PplaylistButton');
function PShowSearch() {
	var unhidesearch = document.getElementById("PplaylistText");
	var unhidelabel = document.getElementById("labelSearch");
	unhidesearch.classList.toggle('hidden');
	unhidelabel.classList.toggle('hidden');
}
if (PDisplaySearch) {
	PDisplaySearch.addEventListener('click', PShowSearch);
	var SearchPlaylist = document.getElementById("PplaylistText");
	function searchPlay() {
		var temp = "test"; //insert value here
		// console.log(SearchPlaylist.value);
		var SearchP = SearchPlaylist.value; //insert value here

		//Creating http request
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				var fromServer = JSON.parse(event.target.response);
				var table = document.getElementById("output-play")

				while (table.rows.length > 1) {
					table.deleteRow(1);
				}

				for (i = 0; i < fromServer.length; i++) {
					var insert = table.insertRow(1);
					var OwnerID = insert.insertCell(0);
					var PlaylistName = insert.insertCell(1);
					var PlaylistGenre = insert.insertCell(2);
					OwnerID.innerHTML = fromServer[i].OwnerID;
					PlaylistName.innerHTML = fromServer[i].PlaylistName;
					PlaylistGenre.innerHTML = fromServer[i].PlaylistGenre;

				}
			}
		});
		var searchPlay = SearchPlaylist.value;

		toServer =
		{
			PlaylistName: searchPlay
		};

		var requsetURL = '/search/Playlist';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));

	}
	if (SearchPlaylist) {
		SearchPlaylist.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				searchPlay();
			}
		});
	}
}

var PDisplayAdd = document.getElementById('PnewplaylistButton');
function PShowAdd() {
	var unhideadd = document.getElementById("PnewplaylistText");
	var unhideadd2 = document.getElementById("PnewplaylistText2");
	var unhideadd3 = document.getElementById("PnewplaylistText3");
	var unhidelabel = document.getElementById("labelAdd");
	var unhidelabel2 = document.getElementById("labelAdd2");
	var unhidelabel3 = document.getElementById("labelAdd3");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhideadd.classList.toggle('hidden');
	unhideadd2.classList.toggle('hidden');
	unhideadd3.classList.toggle('hidden');
}
if (PDisplayAdd) {
	PDisplayAdd.addEventListener('click', PShowAdd);
	var AddPlaylistP = document.getElementById("PnewplaylistText");
	var AddPlaylistO = document.getElementById("PnewplaylistText2");
	var AddPlaylistG = document.getElementById("PnewplaylistText3");
	function addPlay() {
		var temp = "test"; //insert value here
		console.log(AddPlaylistP.value);
		console.log(AddPlaylistO.value);
		console.log(AddPlaylistG.value);
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		var AddID = AddPlaylistO.value;
		var AddPlay = AddPlaylistP.value;
		var AddGen = AddPlaylistG.value;
		toServer =
		{
			OwnerID: AddID,
			PlaylistName: AddPlay,
			PlaylistGenre: AddGen
		};

		var requsetURL = '/add/Playlist';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (AddPlaylistP) {
		AddPlaylistP.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addPlay();
			}
		});
	}
	if (AddPlaylistO) {
		AddPlaylistO.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addPlay();
			}
		});
	}
	if (AddPlaylistG) {
		AddPlaylistG.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addPlay();
			}
		});
	}
}

var PDisplayUpdate = document.getElementById('PUpdateplaylistButton');
function PShowUpdate() {
	var unhideUpdate = document.getElementById("PUpdateplaylistText");
	var unhideUpdate2 = document.getElementById("PUpdateplaylistText2");
	var unhideUpdate3 = document.getElementById("PUpdateplaylistText3");
	var unhidelabel = document.getElementById("labelUpdate");
	var unhidelabel2 = document.getElementById("labelUpdate2");
	var unhidelabel3 = document.getElementById("labelUpdate3");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhideUpdate.classList.toggle('hidden');
	unhideUpdate2.classList.toggle('hidden');
	unhideUpdate3.classList.toggle('hidden');
}
if (PDisplayUpdate) {
	PDisplayUpdate.addEventListener('click', PShowUpdate);
	var UpdatePlaylistP = document.getElementById("PUpdateplaylistText");
	var UpdatePlaylistO = document.getElementById("PUpdateplaylistText2");
	var UpdatePlaylistG = document.getElementById("PUpdateplaylistText3");
	function updatePlay() {
		var temp = "test"; //insert value here
		//  console.log(UpdatePlaylistP.value);
		// console.log(UpdatePlaylistO.value);
		//console.log(UpdatePlaylistG.value);

		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Successfully updated")
				location.reload();
			}
		});
		var playlistname = UpdatePlaylistP.value;
		var owner = UpdatePlaylistO.value;
		var genre = UpdatePlaylistG.value;
		var initialplaylist = UpdatePlaylistP.value;
		toServer =
		{
			PlaylistName: playlistname,
			OwnerID: owner,
			PlaylistGenre: genre,
			PlaylistInitial: initialplaylist

		};

		var requsetURL = '/update/Playlist';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		console.log('Sending');
		request.send(JSON.stringify(toServer));

	}
	if (UpdatePlaylistP) {
		UpdatePlaylistP.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				updatePlay();
			}
		});
	}
	if (UpdatePlaylistO) {
		UpdatePlaylistO.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				updatePlay();
			}
		});
	}
	if (UpdatePlaylistG) {
		UpdatePlaylistG.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				updatePlay();
			}
		});
	}
}

var PDisplayDelete = document.getElementById('PdelplaylistButton');
function PShowDelete() {
	var unhidedelete = document.getElementById("PdelplaylistText");
	var unhidelabel = document.getElementById("labelDelete");
	unhidelabel.classList.toggle('hidden');
	unhidedelete.classList.toggle('hidden');
}
if (PDisplayDelete) {
	PDisplayDelete.addEventListener('click', PShowDelete);
	var DeletePlaylist = document.getElementById("PdelplaylistText");
	function deletePlay() {
		var temp = "test"; //insert value here
		console.log(DeletePlaylist.value);
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Deletion Successfully")
				location.reload()
			}
		});
		var playlistDelete = DeletePlaylist.value;
		toServer = {

			PlaylistName: playlistDelete
		};

		var requsetURL = '/delete/Playlist';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		console.log('Sending');
		request.send(JSON.stringify(toServer));
	}
	if (DeletePlaylist) {
		DeletePlaylist.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				deletePlay();
			}
		});
	}
}

/*Hide/Unhide Songs*/
var SDisplaySearch = document.getElementById('SsongsButton');
function SShowSearch() {
	var unhidesearch = document.getElementById("SsongsText");
	var unhidelabel = document.getElementById("labelSong");
	unhidelabel.classList.toggle('hidden');
	unhidesearch.classList.toggle('hidden');
}
if (SDisplaySearch) {
	SDisplaySearch.addEventListener('click', SShowSearch);
	var SearchSongs = document.getElementById("SsongsText");
	function SearchS() {
		var searchSong = SearchSongs.value;
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				var fromServer = JSON.parse(event.target.response);
				var table = document.getElementById("output-songs")

				while (table.rows.length > 1) {
					table.deleteRow(1);
				}
				for (i = 0; i < fromServer.length; i++) {
					var insert = table.insertRow(1);
					var SongID = insert.insertCell(0);
					var CreatorID = insert.insertCell(1);
					var Time = insert.insertCell(2);
					SongID.innerHTML = fromServer[i].SongID;
					CreatorID.innerHTML = fromServer[i].CreatorID;
					Time.innerHTML = fromServer[i].Time;
				}
			}
		});
		toServer =
		{
			SongID: searchSong
		};

		var requsetURL = '/search/Songs';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (SearchPlaylist) {
		SearchPlaylist.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				searchPlay();
			}
		});
	}
	if (SearchSongs) {
		SearchSongs.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				SearchS();
			}
		});
	}
}

var SDisplayAdd = document.getElementById('SAddButton');
function SShowAdd() {
	var unhideAdd = document.getElementById("SAddText");
	var unhideAdd2 = document.getElementById("SAddText2");
	var unhideAdd3 = document.getElementById("SAddText3");
	var unhidelabel = document.getElementById("labelAdd");
	var unhidelabel2 = document.getElementById("labelAdd2");
	var unhidelabel3 = document.getElementById("labelAdd3");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhideAdd.classList.toggle('hidden');
	unhideAdd2.classList.toggle('hidden');
	unhideAdd3.classList.toggle('hidden');
}
if (SDisplayAdd) {
	SDisplayAdd.addEventListener('click', SShowAdd);
	var AddSongsS = document.getElementById("SAddText");
	var AddSongsA = document.getElementById("SAddText2");
	var AddSongsT = document.getElementById("SAddText3");
	function AddS() {
		var AddSong = AddSongsS.value;
		var AddSongA = AddSongsA.value;
		var AddSongT = AddSongsT.value;

		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});

		toServer =
		{
			SongID: AddSong,
			CreatorID: AddSongA,
			Time: AddSongT
		};

		var requsetURL = '/add/Songs';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (AddSongsS) {
		AddSongsS.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AddS();
			}
		});
	}
	if (AddSongsA) {
		AddSongsA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AddS();
			}
		});
	}
	if (AddSongsT) {
		AddSongsT.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				AddS();
			}
		});
	}
}

var SDisplayUpdate = document.getElementById('SUpdateButton');
function SShowUpdate() {
	var unhidePrev = document.getElementById("PrevName");
	var unhideUpdate = document.getElementById("SUpdateText");
	var unhideUpdate2 = document.getElementById("SUpdateText2");
	var unhideUpdate3 = document.getElementById("SUpdateText3");
	var unhidelabel = document.getElementById("labelPrev");
	var unhidelabel2 = document.getElementById("labelUpdate");
	var unhidelabel3 = document.getElementById("labelUpdate2");
	var unhidelabel4 = document.getElementById("labelUpdate3");
	unhidePrev.classList.toggle('hidden');
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhidelabel4.classList.toggle('hidden');
	unhideUpdate.classList.toggle('hidden');
	unhideUpdate2.classList.toggle('hidden');
	unhideUpdate3.classList.toggle('hidden');
}
if (SDisplayUpdate) {
	SDisplayUpdate.addEventListener('click', SShowUpdate);
	var UpdateSongsO = document.getElementById("PrevName");
	var UpdateSongsS = document.getElementById("SUpdateText");
	var UpdateSongsA = document.getElementById("SUpdateText2");
	var UpdateSongsT = document.getElementById("SUpdateText3");
	function UpdateS() {
		var OriginalS = UpdateSongsO.value;
		var UpdateSID = UpdateSongsS.value;
		var UpdateA = UpdateSongsA.value;
		var UpdateT = UpdateSongsT.value;
		//***********************************************************
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});

		toServer =
		{
			OriginalSID: OriginalS,
			SongID: UpdateSID,
			CreatorID: UpdateA,
			Time: UpdateT
		};

		var requsetURL = '/update/Songs';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (UpdateSongsO) {
		UpdateSongsO.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				UpdateS();
			}
		});
	}
	if (UpdateSongsS) {
		UpdateSongsS.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				UpdateS();
			}
		});
	}
	if (UpdateSongsA) {
		UpdateSongsA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				UpdateS();
			}
		});
	}
	if (UpdateSongsT) {
		UpdateSongsT.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				UpdateS();
			}
		});
	}
}

var SDisplayDelete = document.getElementById('SDeleteButton');
function SShowDelete() {
	var unhideDelete = document.getElementById("SDeleteText");
	var unhidelabel = document.getElementById("labelDelete");
	unhidelabel.classList.toggle('hidden');
	unhideDelete.classList.toggle('hidden');
}
if (SDisplayDelete) {
	SDisplayDelete.addEventListener('click', SShowDelete);
	var DeleteSongs = document.getElementById("SDeleteText");
	function DeleteS() {
		var temp = DeleteSongs.value; //insert value here 

		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Success");
				location.reload();
			}
		});
		toServer =
		{
			SongID: temp
		};
		var requsetURL = '/delete/Songs';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));
	}
	if (DeleteSongs) {
		DeleteSongs.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				DeleteS();
			}
		});
	}
}

/*Hide/Unhide Users*/
var UDisplayAdd = document.getElementById('UAddButton');
function UShowAdd() {
	var unhideAdd = document.getElementById("UAddText");
	var unhideAdd2 = document.getElementById("UAddText2");
	var unhideAdd3 = document.getElementById("UAddText3");
	var unhidelabel = document.getElementById("labelAdd");
	var unhidelabel2 = document.getElementById("labelAdd2");
	var unhidelabel3 = document.getElementById("labelAdd3");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhideAdd.classList.toggle('hidden');
	unhideAdd2.classList.toggle('hidden');
	unhideAdd3.classList.toggle('hidden');
}
if (UDisplayAdd) {
	UDisplayAdd.addEventListener('click', UShowAdd);
	var AddUserU = document.getElementById("UAddText");
	var AddUserE = document.getElementById("UAddText2");
	var AddUserA = document.getElementById("UAddText3");
	function addU() {
		var temp = "test"; //insert value here
		//  console.log(AddUserU.value);
		// console.log(AddUserE.value);
		// console.log(AddUserA.value);
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Added new user");
				location.reload();
			}
		});
		//Create variables for user input
		var userid = AddUserU.value;
		var email = AddUserE.value;
		var about = AddUserA.value;
		toServer =
		{
			UserID: userid,
			Email: email,
			AboutUser: about

		};
		///Send to server
		var requsetURL = '/add/Users';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		console.log('Sending');
		request.send(JSON.stringify(toServer));
	}
	if (AddUserU) {
		AddUserU.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addU();
			}
		});
	}
	if (AddUserE) {
		AddUserE.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addU();
			}
		});
	}
	if (AddUserA) {
		AddUserA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				addU();
			}
		});
	}
}

var UDisplayEdit = document.getElementById('UEditButton');
function UShowEdit() {
	var unhideEdit = document.getElementById("UEditText");
	var unhideEdit2 = document.getElementById("UEditText2");
	var unhideEdit3 = document.getElementById("UEditText3");
	var unhidelabel = document.getElementById("labelEdit");
	var unhidelabel2 = document.getElementById("labelEdit2");
	var unhidelabel3 = document.getElementById("labelEdit3");
	unhidelabel.classList.toggle('hidden');
	unhidelabel2.classList.toggle('hidden');
	unhidelabel3.classList.toggle('hidden');
	unhideEdit.classList.toggle('hidden');
	unhideEdit2.classList.toggle('hidden');
	unhideEdit3.classList.toggle('hidden');
}
if (UDisplayEdit) {
	UDisplayEdit.addEventListener('click', UShowEdit);
	var EditUserU = document.getElementById("UEditText");
	var EditUserE = document.getElementById("UEditText2");
	var EditUserA = document.getElementById("UEditText3");
	function editU() {
		var temp = "test"; //insert value here
		// console.log(EditUserU.value);
		//console.log(EditUserE.value);
		//console.log(EditUserA.value);

		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("User updated");
				location.reload()
			}
		});
		//Create variables for user input
		var userid = EditUserU.value;
		var email = EditUserE.value;
		var about = EditUserA.value;
		var initialUserid = EditUserU.value;
		toServer =
		{
			UserID: userid,
			Email: email,
			AboutUser: about,
			InitUserID: initialUserid

		};
		///Send to server
		var requsetURL = '/update/Users';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		console.log('Sending');
		request.send(JSON.stringify(toServer));
	}
	if (EditUserU) {
		EditUserU.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				editU();
			}
		});
	}
	if (EditUserE) {
		EditUserE.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				editU();
			}
		});
	}
	if (EditUserA) {
		EditUserA.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				editU();
			}
		});
	}
}

var UDisplayData = document.getElementById('UviewButton');
function UShowData() {
	var unhidedata = document.getElementById("UviewText");
	var unhidelabel = document.getElementById("labelView");
	unhidelabel.classList.toggle('hidden');
	unhidedata.classList.toggle('hidden');
}
if (UDisplayData) {
	UDisplayData.addEventListener('click', UShowData);
	var DisplayData = document.getElementById("UviewText");
	function displayDU() {
		var temp = "test"; //insert value here
		// console.log(DisplayData.value);
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				var fromServer = JSON.parse(event.target.response);
				var table = document.getElementById("output-users")

				while (table.rows.length > 1) {
					table.deleteRow(1);
				}

				for (i = 0; i < fromServer.length; i++) {
					var insert = table.insertRow(1);
					var UserID = insert.insertCell(0);
					var Email = insert.insertCell(1);
					var AboutUser = insert.insertCell(2);
					UserID.innerHTML = fromServer[i].UserID;
					Email.innerHTML = fromServer[i].Email;
					AboutUser.innerHTML = fromServer[i].AboutUser;

				}
			}
		});
		var displayPlay = DisplayData.value

		toServer =
		{
			UserID: displayPlay
		};

		var requsetURL = '/search/Users';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(toServer));


	}
	if (DisplayData) {
		DisplayData.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				displayDU();
			}
		});
	}
}

var UDisplayDelete = document.getElementById('UDeleteButton');
function UShowDelete() {
	var unhidedelete = document.getElementById("UDeleteText");
	var unhidelabel = document.getElementById("labelDelete");
	unhidelabel.classList.toggle('hidden');
	unhidedelete.classList.toggle('hidden');
}
if (UDisplayDelete) {
	UDisplayDelete.addEventListener('click', UShowDelete);
	var DeleteUser = document.getElementById("UDeleteText");
	function deleteU() {
		var temp = "test"; //insert value here
		/// console.log(DeleteUser.value);
		var request = new XMLHttpRequest();
		request.addEventListener('load', function(event) {
			if (event.target.status !== 200) {
				var message = event.target.response;
				alert(message);
			}
			else {
				alert("Deletion Successfully")
				location.reload()
			}
		});
		var userDelete = DeleteUser.value;
		toServer = {

			UserID: userDelete
		};
		////Send to server
		var requsetURL = '/delete/Users';
		request.open("POST", requsetURL, true);
		request.setRequestHeader('Content-Type', 'application/json');
		console.log('Sending');
		request.send(JSON.stringify(toServer));
	}
	if (DeleteUser) {
		DeleteUser.addEventListener("keypress", function(keyboardEvent) {

			if ((keyboardEvent.code === 'Enter') || keyboardEvent.code === 'NumpadEnter') {
				deleteU();
			}
		});
	}
}