// script.js

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
 * Аргумент modalId используется для формирования полного идентификатора элемента,
 * например, если modalId равен "privacy", то ищется элемент с id="modal-overlay-privacy".
 * После этого изменяем стиль отображения на 'block' и запрещаем прокрутку страницы (overflow: hidden).
 */
function openModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/*
 * Функция closeModal
 * Закрывает модальное окно, изменяя стиль отображения элемента с заданным id на 'none',
 * и восстанавливает прокрутку страницы (overflow: '').
 */
function closeModal(modalId) {
    const overlay = document.getElementById('modal-overlay-' + modalId);
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

/*
 * Функция maskPhone
 * Применяется для форматирования введённого номера телефона.
 * Функция удаляет все символы, кроме цифр, затем проверяет, начинается ли номер с "7".
 * Если да, то удаляет эту цифру, так как формат начинается с +7.
 * Если цифр больше 10, то оставляет только первые 10.
 * Затем создается строка с форматированием вида "+7 (XXX) XXX-XX-XX".
 * Полученный форматированный номер устанавливается в качестве значения поля ввода.
 */
function maskPhone(input) {
    // Удаляем все нецифровые символы.
    let digits = input.value.replace(/\D/g, '');

    // Если цифр нет, очищаем поле и выходим из функции.
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

    // Начинаем формировать форматированный номер.
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

    // Устанавливаем форматированный номер в значение поля ввода.
    input.value = formatted;
}

/*
 * Функция submitForm
 * Обрабатывает отправку формы.
 * Отменяет стандартное поведение отправки (чтобы страница не перезагружалась),
 * выводит сообщение об отправке формы через alert,
 * а затем сбрасывает форму (очищает все поля).
 */
function submitForm(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы.
    alert("Форма отправлена!"); // Выводим сообщение об успешной отправке.
    event.target.reset(); // Сбрасываем все поля формы.
}