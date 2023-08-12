const questions = document.querySelectorAll('.question');
const nextBtn = document.querySelector('.nextBtn');
let currentQuestion = 0;

function showQuestion(index) {
  questions.forEach((question, idx) => {
    if (idx === index) {
      question.style.display = 'block';
    } else {
      question.style.display = 'none';
    }
  });
}

nextBtn.addEventListener('click', () => {
  const currentQuestionElem = questions[currentQuestion];
  const inputs = currentQuestionElem.querySelectorAll('input[type="radio"]');
  const inputValue = currentQuestionElem.querySelector('input[type="number"]')?.value;
  const textareaValue = currentQuestionElem.querySelector('textarea')?.value;

  if (inputValue) {
    console.log(`Resposta para a pergunta ${currentQuestion + 1}: ${inputValue}`);
  } else if (textareaValue) {
    console.log(`Resposta para a pergunta ${currentQuestion + 1}: ${textareaValue}`);
  } else {
    const selectedInput = [...inputs].find(input => input.checked);

    if (!selectedInput) {
      alert('Por favor, responda a todas as perguntas.');
      return;
    }

    console.log(`Resposta para a pergunta ${currentQuestion + 1}: ${selectedInput.value}`);
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    console.log('Comentários Adicionais:', textareaValue);
    showQuestion(questions.length - 1);
    nextBtn.style.display = 'none';
  }
});

showQuestion(0);
