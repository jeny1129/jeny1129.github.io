document.addEventListener('DOMContentLoaded', () => {
  const reasonRadios = document.querySelectorAll('input[name="reason"]');
  const hourlyRateWrapper = document.getElementById('hourlyRateWrapper');

  reasonRadios.forEach(radio => {
      radio.addEventListener('change', () => {
          if (radio.value === 'Hiring') {
              hourlyRateWrapper.style.display = 'block';
          } else {
              hourlyRateWrapper.style.display = 'none';
          }
      });
  });
});
