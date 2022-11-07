//JS code

const PlaylistContainer = document.getElementById('CreatingPlaylist');
const Btn = document.getElementById('btnAdd');
let UserNameAccount = 'Default';
const main = document.getElementById('main');
const Btn2 = document.getElementById('CreateBtn');

Btn.addEventListener('click' , ()=>{
 const PlaylistCard = document.createElement('div');
 PlaylistCard.classList.add('playlist-card')
 const ImagePlaylist = document.createElement('div');
 ImagePlaylist.classList.add('SvgContainer');
 ImagePlaylist.innerHTML = '<svg role="img" height="64" width="64" aria-hidden="true" data-testid="card-image-fallback" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 EQkJl"><path d="M7 3h14v15.167a3.5 3.5 0 11-3.5-3.5H19V5H9v13.167a3.5 3.5 0 11-3.5-3.5H7V3zm0 13.667H5.5a1.5 1.5 0 101.5 1.5v-1.5zm12 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path></svg>';
 const PlaylistName = document.createElement('h3');
 PlaylistName.innerText = 'My Playlist';
 const UserCreator= document.createElement('p');
 UserCreator.innerText = 'By'+' '+UserNameAccount ; 
 const btn = document.createElement('div');
 btn.classList.add('btn-primary')
 const btnImage = document.createElement('img');
 btnImage.src = '../../../images/play-solid.svg';
 btn.appendChild(btnImage);
 PlaylistCard.appendChild(ImagePlaylist);
 PlaylistCard.appendChild(PlaylistName);
 PlaylistCard.appendChild(UserCreator);
 PlaylistCard.appendChild(btn)
 PlaylistContainer.appendChild(PlaylistCard);
});

Btn2.addEventListener('click', ()=>{
 const PlaylistCard = document.createElement('div');
 PlaylistCard.classList.add('playlist-card')
 const ImagePlaylist = document.createElement('div');
 ImagePlaylist.classList.add('SvgContainer');
 ImagePlaylist.innerHTML = '<svg role="img" height="64" width="64" aria-hidden="true" data-testid="card-image-fallback" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 EQkJl"><path d="M7 3h14v15.167a3.5 3.5 0 11-3.5-3.5H19V5H9v13.167a3.5 3.5 0 11-3.5-3.5H7V3zm0 13.667H5.5a1.5 1.5 0 101.5 1.5v-1.5zm12 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path></svg>';
 const PlaylistName = document.createElement('h3');
 PlaylistName.innerText = 'My Playlist';
 const UserCreator= document.createElement('p');
 UserCreator.innerText = 'By'+' '+UserNameAccount ; 
 const btn = document.createElement('div');
 btn.classList.add('btn-primary')
 const btnImage = document.createElement('img');
 btnImage.src = '../../../images/play-solid.svg';
 btn.appendChild(btnImage);
 PlaylistCard.appendChild(ImagePlaylist);
 PlaylistCard.appendChild(PlaylistName);
 PlaylistCard.appendChild(UserCreator);
 PlaylistCard.appendChild(btn)
 PlaylistContainer.appendChild(PlaylistCard);

})