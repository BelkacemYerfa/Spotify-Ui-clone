//JS code


let ImagesArrayTypes = [
 'JS/Images/0a74d96e091a495bb09c0d83210910c3.jpg',
 'JS/Images/3327f4ab75e84b84b95113d347cd0acf.jpg',
 'JS/Images/3a65e06ed84743b29df8c5d9102dd827.jpeg',
 'JS/Images/4c8b58ab42b54296ad5379514d36edac.jpg',
 'JS/Images/54841f7d6a774ef096477c99c23f0cf1.jpeg',
 'JS/Images/6a48e36b373a4d879a9340076db03a7b.jpg',
 'JS/Images/8cfa9cb1e43a404db76eed6ad594057c.jpg',
 'JS/Images/a2a24668f16c4e9680233a0d7d244a4b.jpeg',
 'JS/Images/abcd4d64-1423-49df-8f12-a2ba0040922b.jpg',
 'JS/Images/b4182906bf244b4994805084c057e9ee.jpeg',
 'JS/Images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
 'JS/Images/ea364e99656e46a096ea1df50f581efe.png',
 'JS/Images/region_global_default.jpg',
 'JS/Images/workout-274x274.jpg',
	'JS/Images/UserTypes3.jpg'
];
//array 
let FavTypesImages = [
 'JS/Images/UserTypes.jpg',
	'JS/Images/UserTypes2.jpg',
	'JS/Images/UserTypes4.jpg',
	'JS/Images/UserTypes5.jpg'
]

const UserFavTypes = document.getElementById('UserTypes');
const AllTypes = document.getElementById('AllTypes');
const 	CardListType = document.createElement('ul');
AllTypes.appendChild(CardListType);
const CardListFav = document.createElement("ul");
CardListFav.setAttribute("id" , 'Slider')
UserFavTypes.appendChild(CardListFav);
		
for(let index= 0; index < FavTypesImages.length; index++){
	const CardFav = document.createElement('div');
		CardFav.classList.add('fav-card')
		const ImageFav = document.createElement('img');
		const TextOverlay = document.createElement("div");
		TextOverlay.classList.add('overlay');
		const TextOverlayShow = document.createElement('p');
		TextOverlayShow.innerText = 'Active'
		TextOverlay.appendChild(TextOverlayShow);
		CardFav.appendChild(TextOverlay);
	 ImageFav.src = FavTypesImages[index] ; 
		CardFav.appendChild(ImageFav);
		CardListFav.appendChild(CardFav);
}

for(let index = 0 ; index < ImagesArrayTypes.length ; index++){
	const CardType = document.createElement('div');
	CardType.classList.add('type-card')
		const ImageFav = document.createElement('img');
		const TextOverlay = document.createElement("div");
		TextOverlay.classList.add('overlay');
		const TextOverlayShow = document.createElement('p');
		TextOverlayShow.innerText = 'Active'
		TextOverlay.appendChild(TextOverlayShow);
		CardType.appendChild(TextOverlay);
	 ImageFav.src = ImagesArrayTypes[index] ; 
		CardType.appendChild(ImageFav);
		CardListType.appendChild(CardType);
}
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d6796a13fmsh5b6b09d9f9ca34ep1262acjsnbbd1102f05aa',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
 .then(response => console.log(response)) */

