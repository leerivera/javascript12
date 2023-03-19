document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === 'Saturday' || day === 'Sunday') {
    document.querySelector('#placeToPutResult').innerHTML = 'It\'s the weekend!'
  }


}
