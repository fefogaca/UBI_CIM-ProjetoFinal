
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.card-wrapper');
    const leftBtn = document.querySelector('.arrow.left');
    const rightBtn = document.querySelector('.arrow.right');

    leftBtn.addEventListener('click', () => {
      const last = wrapper.lastElementChild;
      wrapper.prepend(last);
    });

    rightBtn.addEventListener('click', () => {
      const first = wrapper.firstElementChild;
      wrapper.appendChild(first);
    });
  });

