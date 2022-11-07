
//JS code

// use api

const DataSection = document.getElementById("Data");
const CardArtists = document.getElementById("Artists");
const CardList = document.createElement('ul');
CardArtists.appendChild(CardList)
const CardAlbums = document.getElementById("Albums");
const CardListAlbum = document.createElement('ul');
CardAlbums.appendChild(CardListAlbum);
const CardPlaylists = document.getElementById("Playlists");
const CardListPlaylist = document.createElement('ul');
CardPlaylists.appendChild(CardListPlaylist);
const CardEpisodes = document.getElementById("Episodes");
const CardListEpisodes = document.createElement('ul');
CardEpisodes.appendChild(CardListEpisodes);
const CardTracks = document.getElementById("Tracks");
const CardListTracks = document.createElement('ul');
CardTracks.appendChild(CardListTracks)


//Play btn
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
 .then(response => {
  console.log(response);
  if(response.episodes.items.length == 0 ){
   const CardSoon = document.createElement('div');
   CardSoon.classList.add('card-soon')
   const TitleComing = document.createElement('ul');
   //think about setting a timer ...
   TitleComing.classList.add('title-coming')
   const span1 = document.createElement('span');
   span1.innerText = 'W'
   const span2 = document.createElement('span')
   span2.innerText= 'E'
   const span3 = document.createElement('span')
   span3.innerText= ' A'
   const span4 = document.createElement('span')
   span4.innerText= 'R'
   const span5 = document.createElement('span')
   span5.innerText= 'E'
   const span6 = document.createElement('span')
   span6.innerText= ' L'
   const span7 = document.createElement('span')
   span7.innerText= 'U'
   const span8 = document.createElement('span')
   span8.innerText= 'N'
   const span9 = document.createElement('span')
   span9.innerText= 'C'
   const span10 = document.createElement('span')
   span10.innerText= 'H'
   const span11 = document.createElement('span')
   span11.innerText= 'I'
   const span12 = document.createElement('span')
   span12.innerText= 'N'
   const span13 = document.createElement('span')
   span13.innerText= 'G'
   const span14 = document.createElement('span')
   span14.innerText= ' S'
   const span15 = document.createElement('span')
   span15.innerText= 'O'
   const span16 = document.createElement('span')
   span16.innerText= 'O'
   const span17 = document.createElement('span')
   span17.innerText= 'N'
   TitleComing.appendChild(span1)
   TitleComing.appendChild(span2)
   TitleComing.appendChild(span3)
   TitleComing.appendChild(span4)
   TitleComing.appendChild(span5)
   TitleComing.appendChild(span6)
   TitleComing.appendChild(span7)
   TitleComing.appendChild(span8)
   TitleComing.appendChild(span9)
   TitleComing.appendChild(span10)
   TitleComing.appendChild(span11)
   TitleComing.appendChild(span12)
   TitleComing.appendChild(span13)
   TitleComing.appendChild(span14)
   TitleComing.appendChild(span15)
   TitleComing.appendChild(span16)
   TitleComing.appendChild(span17)
   CardSoon.appendChild(TitleComing);
   CardListEpisodes.appendChild(CardSoon);
  }
  for (let index = 0 ; index < 5 ; index++){
   // for Artist Card..
   const CardArtiste = document.createElement('div');
   CardArtiste.classList.add('card-artiste');
   const imageArtiste = document.createElement('img');
   const NameArtist = document.createElement('h3');
   const UserType = document.createElement('p');
   imageArtiste.src = response.artists.items[index].data.visuals.avatarImage.sources[0].url;
   NameArtist.innerText = response.artists.items[index].data.profile.name;
   UserType.innerText = 'Artist';
   const btn1 = document.createElement('button');
   const ImageBtn1 = document.createElement('img');
   ImageBtn1.src = '../../../images/play-solid.svg';
   btn1.appendChild(ImageBtn1);
   CardArtiste.appendChild(imageArtiste);
   CardArtiste.appendChild(NameArtist);
   CardArtiste.appendChild(UserType);
   CardArtiste.appendChild(btn1);
   CardList.appendChild(CardArtiste);
   //for Albums
   const CardAlbum = document.createElement('div');
   CardAlbum.classList.add('card-artiste');
   const imageAlbum = document.createElement('img');
   const NameAlbum = document.createElement('h3');
   const DataAuthor = document.createElement('p');
   imageAlbum.src = response.albums.items[index].data.coverArt.sources[2].url;
   if(index===1){
    let nameTest = response.albums.items[index].data.name.slice(9,33);
    NameAlbum.innerText = nameTest;
   }else{
    NameAlbum.innerText = response.albums.items[index].data.name;
   }   
   DataAuthor.innerText = response.albums.items[index].data.date.year+' . '+response.albums.items[index].data.artists.items[0].profile.name
   const btn2 = document.createElement('button');
   const ImageBtn2 = document.createElement('img');
   ImageBtn2.src= '../../../images/play-solid.svg';
   btn2.appendChild(ImageBtn2)
   CardAlbum.appendChild(imageAlbum);
   CardAlbum.appendChild(NameAlbum);
   CardAlbum.appendChild(DataAuthor);
   CardAlbum.appendChild(btn2);
   CardListAlbum.appendChild(CardAlbum);
   //for Playlists
   const CardPlaylist = document.createElement('div');
   CardPlaylist.classList.add('card-artiste');
   const imagePlaylist = document.createElement('img');
   const NamePlaylist = document.createElement('h3');
   const PlaylistOwner = document.createElement('p');
   imagePlaylist.src = response.playlists.items[index].data.images.items[0].sources[0].url;
   NamePlaylist.innerText = response.playlists.items[index].data.name;
   PlaylistOwner.innerText = response.playlists.items[index].data.owner.name;
   const btn3 = document.createElement('button');
   const ImageBtn3 = document.createElement('img');
   ImageBtn3.src = '../../../images/play-solid.svg';
   btn3.appendChild(ImageBtn3);
   CardPlaylist.appendChild(imagePlaylist);
   CardPlaylist.appendChild(NamePlaylist);
   CardPlaylist.appendChild(PlaylistOwner);
   CardPlaylist.appendChild(btn3);
   CardListPlaylist.appendChild(CardPlaylist);   
   //for tracks
   const CardTrack = document.createElement("div");
   CardTrack.classList.add('card-artiste');
   const ImageTrack = document.createElement('img');
   const NameTrack = document.createElement('h3');
   ImageTrack.src = response.tracks.items[index].data.albumOfTrack.coverArt.sources[0].url;
   if(index === 1){
    NameTrack.innerText = response.tracks.items[index].data.albumOfTrack.name.slice(0,12);
   }
   else{
    NameTrack.innerText = response.tracks.items[index].data.albumOfTrack.name;
   }
   const btn4 = document.createElement('button');
   const ImageBtn4 = document.createElement('img');
   ImageBtn4.src = '../../../images/play-solid.svg';
   btn4.appendChild(ImageBtn4);
   CardTrack.appendChild(ImageTrack);
   CardTrack.appendChild(NameTrack);
   CardTrack.appendChild(btn4)
   CardListTracks.appendChild(CardTrack);
  }
 })
	.catch(err => console.error(err));

