//JS code


const CardListPodcast = document.createElement('ul');
const Podcast = document.getElementById('Podcast');
Podcast.appendChild(CardListPodcast);

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
  if(response.podcasts.items.length === 0){
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
   CardListPodcast.appendChild(CardSoon);
  }
 })
	.catch(err => console.error(err));