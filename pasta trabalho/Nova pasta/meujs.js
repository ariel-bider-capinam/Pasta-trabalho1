function changeBackground() {
    const masculinoRadio = document.getElementById('masculino');
    const femininoRadio = document.getElementById('feminino');
    const genderMessage = document.getElementById('gender-message');
  
    document.body.style.backgroundColor = femininoRadio.checked ? '#FF69B4' : (masculinoRadio.checked ? '#2196F3' : '#fff');
  
    if (femininoRadio.checked) {
      genderMessage.innerText = 'Oi, solteira?';
    } else if (masculinoRadio.checked) {
      genderMessage.innerText = 'Infelizmente, Arielzin está atrás de uma namorada.';
    } else {
      genderMessage.innerText = '';
    }
  }
  
  function checkTeam() {
    const teamInput = document.getElementById('favorite-team');
    const teamMessage = document.getElementById('team-message');
  
    if (teamInput.value.toLowerCase() === 'corinthians') {
      teamMessage.innerText = 'Maior de todos: Corinthians!';
    } else if (teamInput.value.trim() !== '') {
      teamMessage.innerText = 'Se não botar Corinthians, não aceitamos.';
    } else {
      teamMessage.innerText = '';
    }
  }
  
  function submitForm() {
    alert('Formulário enviado,caso voce seja a perfeita te chamamos!');
  }
  