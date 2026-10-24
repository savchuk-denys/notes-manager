const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

// Крок 9. прокоментування функції showPage для перемикання між сторінками
function showPage(name) {
    pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + name));
    tabs.forEach(t => t.classList.toggle('active', t.dataset.page === name));
}

// Крок 9. прокументування функції router для обробки зміни хешу в URL та відображення відповідної сторінки
function router() {
    const hash = location.hash.replace('#', '') || 'notes';
    const known = ['notes', 'passwords'];
    showPage(known.includes(hash) ? hash : 'notes');
}

window.addEventListener('hashchange', router);
router();

// Крок 4. Оголошення данихдо варіанта
const notes = [
    { title: "Закупівля обладнання", category: "робота" },
    { title: "Особисті плани", category: "особисте" },
    { title: "Ідея для стартапу", category: "ідея" },
    { title: "Звіт за тиждень", category: "робота" }
];

// Крок 5. Обробка даних циклом for для підрахунку кількості в категоріях
let workCount = 0;
let personalCount = 0;
let ideaCount = 0;

for (const note of notes) {
    if (note.category === "робота") {
        workCount++;
    } else if (note.category === "особисте") {
        personalCount++;
    } else if (note.category === "ідея") {
        ideaCount++;
    }
}
console.log(`Кількість нотаток за категоріями:\n Робота: ${workCount}\n Особисте: ${personalCount}\n Ідея: ${ideaCount}`);

// Крок 6. Умовна класифікація (перевірка довжини жорстко заданого пароля)
const password = "123"; // тестовий пароль
if (password.length < 8) {
    console.warn("Попередження: Пароль занадто короткий (менше 8 символів)!");
} else {
    console.log("Пароль достатньої довжини.");
}

// Крок 7. Стрілкова функція для перевірки надійності пароля з коментарем
// Функція приймає рядок пароля та повертає true, якщо його довжина >= 8, і false — якщо менше
const isStrongPassword = password => password.length >= 8;
console.log("Перевірка пароля 'SecurePassword123':", isStrongPassword("SecurePassword123"));
console.log("Перевірка пароля '12345':", isStrongPassword("12345"));