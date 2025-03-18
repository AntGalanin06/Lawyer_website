// Дожидаемся полной загрузки DOM, чтобы все элементы были доступны для манипуляций.
document.addEventListener('DOMContentLoaded', function(){

    // Находим элемент поля ввода номера телефона по его атрибуту name="phone".
    var phoneInput = document.querySelector('input[name="phone"]');
    if (phoneInput) {
        // Добавляем обработчик события keydown на поле номера телефона.
        // Если пользователь нажимает клавишу Backspace, предотвращаем стандартное поведение
        // (чтобы не удалять символы по одному) и полностью очищаем поле.
        phoneInput.addEventListener('keydown', function(e) {
            if (e.key === "Backspace") {
                e.preventDefault();
                this.value = "";
            }
        });
    }

    // Находим форму по классу .request-call-form, которая отвечает за отправку заявки.
    var form = document.querySelector(".request-call-form");
    if (form) {
        // При отправке формы вызываем функцию submitForm.
        form.addEventListener("submit", submitForm);
    }
});

/*
 * Функция openModal
 * Открывает модальное окно по его идентификатору.
 */
function openModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/*
 * Функция closeModal
 * Закрывает модальное окно.
 */
function closeModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

/*
 * Функция maskPhone
 * Форматирует введённый номер телефона.
 */
function maskPhone(input) {
    // Удаляем все нецифровые символы.
    let digits = input.value.replace(/\D/g, '');

    // Если цифр нет, очищаем поле.
    if (digits.length === 0) {
        input.value = "";
        return;
    }

    // Если номер начинается с "7", удаляем эту цифру.
    if (digits.startsWith("7")) {
        digits = digits.substring(1);
    }

    // Ограничиваем длину номера до 10 цифр.
    if (digits.length > 10) {
        digits = digits.substring(0, 10);
    }

    // Формируем форматированный номер.
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

    // Устанавливаем форматированный номер.
    input.value = formatted;
}

/*
 * Функция submitForm
 * Обрабатывает отправку формы.
 */
function submitForm(event) {
    event.preventDefault(); // Отменяем стандартное поведение.
    alert("Форма отправлена!"); // Сообщение об успешной отправке.
    event.target.reset(); // Сбрасываем поля формы.
}
