
const titles = document.querySelectorAll(".item__title");
titles.forEach((t)=>{
    const header = t.closest('.item__header');
    const checkbox = header.querySelector('.checkbox');
    t.addEventListener("click",()=>{
        checkbox.checked=!checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
});

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',()=>{
        const item = checkbox.closest('.item');
        item.classList.toggle("active");
    });
});

titles[0].dispatchEvent(new Event('click'));
