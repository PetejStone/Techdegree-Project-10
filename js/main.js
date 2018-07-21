let cards = document.querySelector('.cards');
let card = document.querySelectorAll('.card');
let cardOverlay = document.querySelectorAll('.card--overlay');
const close = document.getElementsByClassName('close');
const arrowLeft = document.getElementsByClassName('arrow--left');
const arrowRight = document.getElementsByClassName('arrow--right');


$.ajax({
  url: 'https://randomuser.me/api?results=12&nat=us',
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

    //Adds user info (before overlay)
    for (let i=0; i < card.length; i+=1) {
      let userInfo = '<div class="user--info"><p class="user user--name list">'+results[i].name.first +' '+ results[i].name.last+'</p>';
      userInfo += '<p class="user user--email">'+results[i].email+'</p>';
      userInfo += '<p class="user user--city">'+results[i].location.city+'</p><div>';
      card[i].insertAdjacentHTML('beforeend', userInfo);
    }
    //End user info (before overlay)


    //Adds user image (overlay)
    for (let i=0; i < cardOverlay.length; i+=1) {
      let overlayImage = '<img src="'+results[i].picture.large+'" class="large"></a>';
      cardOverlay[i].insertAdjacentHTML('beforeend',overlayImage);
    }
    //End of user image (overlay)

    //Adds user info (overlay)
    for (let i=0; i < cardOverlay.length; i+=1) {
      let userInfo = '<div class="overlay--info"><p class="user user--name">'+results[i].name.first+' '+results[i].name.last+'</p>';
      userInfo += '<p class="user user--email">'+results[i].email+'</p>';
      userInfo += '<p class="user user--city">'+results[i].location.city+'</p></div>';
      cardOverlay[i].insertAdjacentHTML('beforeend', userInfo);
    }
    //End of user info (overlay)

    //User contact (overlay)
    for (let i=0; i < cardOverlay.length; i+=1) {
      let userInfo = '<div class="overlay--contact"><p class="user user--phone">'+results[i].phone+'</p>';
      userInfo += '<p class="user user--address">'+results[i].location.street+' '+results[i].location.city+', ' +results[i].location.state+' '+results[i].location.postcode+ '</p>';
      userInfo += '<p class="user user--dob">Birthday: '+new Date(results[i].dob.date).toLocaleDateString('en-US')+'</p></div>';
      cardOverlay[i].insertAdjacentHTML('beforeend', userInfo);
    }
    //End user contact (overlay)

    //Overlay Box appears when clicked

    const image = document.getElementsByClassName('image');
    const overlay = document.getElementById('overlay');

    for (let i=0; i<card.length; i+=1) {
      card[i].addEventListener('click', ()=> {
        overlay.style.display = 'flex';
      })
    }

    //End of Overlay Box


    //Link to large photo from thumbnail

    for (let i=0; i < cardOverlay.length; i+=1) {
      const userName = card[i].children[1].children[0].textContent;
      const overlayName = cardOverlay[i].children[4].children[0].textContent;
      card[i].addEventListener('click', ()=> {
        if (overlayName === userName) {
          cardOverlay[i].style.display = 'flex';
        }



      });
      close[i].addEventListener('click', ()=> {
        overlay.style.display = 'none';
        cardOverlay[i].style.display = 'none';
      });

      arrowRight[i].addEventListener('click', ()=> {
        if (cardOverlay[i].nextElementSibling !== null){
        cardOverlay[i].style.display = 'none';
        cardOverlay[i].nextElementSibling.style.display = 'flex';
      } else {
          arrowRight[i].style.display = 'none';
        }
      });


      arrowLeft[i].addEventListener('click', ()=> {
        if (cardOverlay[i].previousElementSibling !== null){
          cardOverlay[i].style.display = 'none';
          cardOverlay[i].previousElementSibling.style.display = 'flex';
        } else {
            arrowLeft[i].style.display = 'none';
        }
      });

    }

    //End of link to large








// } //End of loop


///End of autocomplete function










  }  //end of function data
}); //End of Ajax
