let cards = document.querySelector('.cards');
let card = document.querySelectorAll('.card');


$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function (data) {
    let results = data.results;

    //Adds User Image Function
    for (let i=0; i < card.length; i+=1) {
      // let thumbnail = '<a href="'+results[i].picture.large+'" class="image">';
      let thumbnail = '<img src="'+results[i].picture.medium+'" class="thumbnail"></a>';
      card[i].innerHTML = thumbnail;
    }
    //End of add user image function
    for (let i=0; i < card.length; i+=1) {
      // let thumbnail = '<a href="'+results[i].picture.large+'" class="image">';
      let userInfo = '<div class="user--info"><p class="user user--name">'+results[i].name.first+'</p>';
      userInfo += '<p class="user user--email">'+results[i].email+'</p>';
      userInfo += '<p class="user user--city">'+results[i].location.city+'</p>';
      card[i].insertAdjacentHTML('beforeend', userInfo);
    }
    //Adds user info (before overlay)


  }  //end of function data
}); //End of Ajax

const image = document.getElementsByClassName('image');
const overlay = document.getElementById('overlay');

for (let i=0; i<image.length; i+=1) {
  image[i].addEventListener('click', ()=> {
    overlay.style.display = 'flex';
  })
}
