import './styles/styles.scss';

const startQuestionsAccordion = () => {
  const questions = document.querySelectorAll('.accordion');

  questions.forEach((question) => {
    const questionTargetButton = question.querySelector('.icon-plus');

    questionTargetButton.addEventListener('click', () => {
      question.classList.toggle('open');
    });
  });
};

startQuestionsAccordion();
