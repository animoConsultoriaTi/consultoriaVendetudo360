import './styles/styles.scss';

const startQuestionsAccordion = () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    const questionTargetButton = question.querySelector('.icon-plus');

    questionTargetButton.addEventListener('click', () => {
      question.classList.toggle('open');
    });
  });
};

startQuestionsAccordion();
