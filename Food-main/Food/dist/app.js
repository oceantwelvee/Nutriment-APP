const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// получаем элементы модальных окон Вход и Регистрация
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

// получаем элементы закрытия модальных окон
const loginCloseBtn = document.getElementsByClassName("close")[0];
const registerCloseBtn = document.getElementsByClassName("close-reg")[0];

// добавляем обработчики событий на клик по кнопкам Вход и Регистрация
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

// добавляем обработчики событий на клик по кнопкам закрытия модальных окон
loginCloseBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

registerCloseBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// добавляем обработчик события на клик вне модального окна, чтобы закрыть его
window.addEventListener("click", (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});


/* SCROOL btn */
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Предотвращаем переход по ссылке

      let target = this.getAttribute('href'); // Получаем целевой элемент для прокрутки
      let targetElement = document.querySelector(target); // Находим целевой элемент

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем до целевого элемента с плавной анимацией
      }
    });
  });


  /* chatbot */
  const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.parentNode.classList.toggle('active');
  });
});

/* Timer */

 // Установка даты окончания акции
 let endDate = new Date('2023-06-17T00:00:00');

 // Функция для обновления таймера
 function updateTimer() {
   let currentDate = new Date();
   let timeDifference = endDate.getTime() - currentDate.getTime();

   if (timeDifference > 0) {
     let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Обновляем значения элементов на странице
     document.getElementById('days').textContent = formatTime(days);
     document.getElementById('hours').textContent = formatTime(hours);
     document.getElementById('minutes').textContent = formatTime(minutes);
     document.getElementById('seconds').textContent = formatTime(seconds);
   } else {
     // Если время истекло, можно выполнить нужные действия
     document.getElementById('timer').textContent = 'Акция завершена';
   }
 }

 // Функция для форматирования времени в двузначный формат
 function formatTime(time) {
   return time < 10 ? '0' + time : time;
 }

 // Обновляем таймер каждую секунду
 setInterval(updateTimer, 1000);

  

