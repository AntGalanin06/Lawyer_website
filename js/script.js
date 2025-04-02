document.addEventListener('DOMContentLoaded', function() {
    // Обработка ввода телефона: при нажатии Backspace очищаем поле
    var phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('keydown', function(e) {
            if (e.key === "Backspace") {
                e.preventDefault();
                this.value = "";
            }
        });
    }
    // Обработчик отправки формы
    var form = document.querySelector(".request-call-form");
    if (form) {
        form.addEventListener("submit", submitForm);
    }
});

function openModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function maskPhone(input) {
    let digits = input.value.replace(/\D/g, '');
    if (digits.length === 0) {
        input.value = "";
        return;
    }
    if (digits.startsWith("7")) {
        digits = digits.substring(1);
    }
    if (digits.length > 10) {
        digits = digits.substring(0, 10);
    }
    let formatted = '+7 (' + digits.substring(0, 3);
    if (digits.length >= 3) {
        formatted += ') ' + digits.substring(3, 6);
    }
    if (digits.length >= 6) {
        formatted += '-' + digits.substring(6, 8);
    }
    if (digits.length >= 8) {
        formatted += '-' + digits.substring(8, 10);
    }
    input.value = formatted;
}

function submitForm(event) {
    event.preventDefault();
    alert("Форма отправлена!");
    event.target.reset();
}

function toggleMenu() {
    const menu = document.querySelector('.lawyer-menu-container');
    menu.classList.toggle('active');
}