document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  const hoverAreas = document.querySelectorAll('.hover-area');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`; /* X 위치에 맞게 설정 */
    cursor.style.top = `${e.clientY}px`; /* Y 위치에 맞게 설정 */
  });

  hoverAreas.forEach(area => {
    area.addEventListener('mouseenter', () => {
      cursor.style.width = '52px';
      cursor.style.height = '52px';
    });
    area.addEventListener('mouseleave', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
    });
  });
});




function checkPassword() {
  var input = document.getElementById('password-input');
  var container = document.getElementById('password-container');
  var correctPassword = 'correctPassword'; // 올바른 패스워드 설정

  if (input.value === correctPassword) {
    container.className = 'password-container valid';
    window.location.href = 'next_page.html'; // 성공 시 리디렉션 페이지
  } else {
    container.className = 'password-container invalid';
  }
}

document.getElementById('password-input').addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    checkPassword(); // 패스워드 검사 함수 호출
  }
});





document.querySelector('.menu-icon').addEventListener('click', function() {
  var menu = document.querySelector('.main_menu');
  var overlay = document.querySelector('.menu-overlay');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
      overlay.style.display = 'none'; // 오버레이 숨기기
  } else {
      menu.style.display = 'block';
      overlay.style.display = 'block'; // 오버레이 표시
  }
});

