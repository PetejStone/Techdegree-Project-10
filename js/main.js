let cards = document.querySelector('.cards');
let card = document.querySelectorAll('.card');





$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function (data) {
    let results = data.results;

    for (let i=0; i < card.length; i+=1) {
      let thumbnail = '<a href="'+results[i].picture.large+'" class="image">';
      thumbnail += '<img src="'+results[i].picture.thumbnail+'"></a>';
      card[i].innerHTML = thumbnail;
    }





  }  //end of function data
}); //End of Ajax




 //End of function(datasuccess: function(data) {

  //
  // success: function(data) {
  //   members = data.results;
