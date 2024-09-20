const faqs = document.querySelectorAll('.faq__accordion');
  
faqs.forEach(faq => {
  const question = faq.querySelector('.faq__question');
  const answer = faq.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    if (faq.classList.contains('open')) {
      faq.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      // Open blocks closing
      faqs.forEach(otherBlocks => {
        if (otherBlocks.classList.contains('open')) {
          otherBlocks.classList.remove('open');
          otherBlocks.querySelector('.faq__answer').style.maxHeight = null;
        }
      });

      faq.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
