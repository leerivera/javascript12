document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === 'tuesday' || day === 'thursday') {
    alert('It\'s class day!')
  } else if (day === 'Saturday' || day === 'Sunday') {
    alert('It\'s the weekend!')
  } else {
    alert('It\'s a weekday!')
  }


}



