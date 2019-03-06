$(document).ready( function() {
  $('.choice').on('click', function() {
    var pchoice;
    var ochoice = Math.floor(Math.random()*3);
    var result;

    switch(this.id) {
      case 'rock':
        pchoice = 'Rock'
        break;
      case 'paper':
        pchoice = 'Paper'
        break;
      case 'scissors':
        pchoice = 'Scissors'
        break;
    }
    $('#pchoice').text('Your choice: ' + pchoice)

    switch(ochoice) {
      case 0:
        ochoice = 'Rock'
        break;
      case 1:
        ochoice = 'Paper'
        break;
      case 2:
        ochoice = 'Scissors'
        break;
    }
    $('#ochoice').text("Opponent's choice: " + ochoice)

    switch(true) {
      case pchoice === ochoice:
        $('#result').text('Tie!').css('color','gold')
        result = 'tie'
        break;
      case pchoice === 'Rock' && ochoice === 'Scissors':
        $('#result').text('Player wins!').css('color', 'darkgreen')
        result = 'win'
        break;
      case pchoice === 'Paper' && ochoice === 'Rock':
        $('#result').text('Player wins!').css('color', 'darkgreen')
        result = 'win'
        break;
      case pchoice === 'Scissors' && ochoice === 'Paper':
        $('#result').text('Player wins!').css('color', 'darkgreen')
        result = 'win'
        break;
      default:
        $('#result').text('Opponent wins. Better luck next time!').css('color', 'red')
        result = 'loss'
        break;
    }
    changeScore(result);
  })

  $('#reset').on('click', function() {
    result = 'reset'
    $('#wins').text('Wins: 0')
    $('#losses').text('Losses: 0')
    $('#ties').text('Ties: 0')
    $('#result').text('')

    changeScore(result);
  })

  function changeScore(result) {
    var wins = parseInt($('#wins').text().replace(/[A-Za-z:]/g, ''));
    var losses = parseInt($('#losses').text().replace(/[A-Za-z:]/g, ''));
    var ties = parseInt($('#ties').text().replace(/[A-Za-z:]/g, ''));

    switch(result) {
      case 'win':
        wins += 1
        $('#wins').text('Wins: ' + wins)
        break;
      case 'loss':
        losses += 1
        $('#losses').text('Losses: ' + losses)
        break;
      case 'tie':
        ties += 1
        $('#ties').text('Ties: ' + ties)
        break;
      case 'reset':
    }
    checkPercent(wins, losses, ties);
    scoreboardCheck(wins, losses, ties);
  }
  
  function checkPercent(wins, losses, ties) {
    var total = wins + losses + ties

    $('#winpercent').text(Math.round((wins/total) * 100) + '%');
    $('#losspercent').text(Math.round((losses/total) * 100) + '%');
    $('#tiepercent').text(Math.round((ties/total) * 100) + '%');
  }

  function scoreboardCheck(wins, losses, ties) {
    if(wins === 0 && losses === 0 && ties === 0)
      $('.score').hide()
    else
      $('.score').show()
  }


})