const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency ?? "Недоступно",
    deviceMemory: navigator.deviceMemory ?? "Недоступно",
    screenWidth: screen.width,
    screenHeight: screen.height,
    colorDepth: screen.colorDepth,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

function renderStorageInfo() {
    const container = document.getElementById("storageInfo");
    const storedData = Object.create(null);

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);

        try {
            storedData[key] = JSON.parse(value);
        } catch {
            storedData[key] = value;
        }
    }

    container.textContent = JSON.stringify(storedData, null, 2);
}

try {
    localStorage.setItem("systemInfo", JSON.stringify(systemInfo));
    renderStorageInfo();
} catch (error) {
    document.getElementById("storageInfo").textContent =
        "Не вдалося отримати доступ до localStorage.";

    console.error(error);
}async function loadComments() {
    const container = document.getElementById("comments");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/11/comments"
        );

        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const comments = await response.json();

        container.replaceChildren();

        if (comments.length === 0) {
            container.textContent = "Коментарів поки немає.";
            return;
        }

        for (const comment of comments) {
            const card = document.createElement("article");
            card.className = "comment-card";

            const title = document.createElement("h3");
            title.textContent = comment.name;

            const email = document.createElement("p");
            email.className = "comment-email";
            email.textContent = `Email: ${comment.email}`;

            const body = document.createElement("p");
            body.className = "comment-body";
            body.textContent = comment.body;

            card.append(title, email, body);
            container.append(card);
        }
    } catch (error) {
        container.textContent =
            "Не вдалося завантажити коментарі. Спробуйте оновити сторінку.";

        console.error(error);
    }
}

loadComments();const contactModal = document.getElementById("contactModal");
const closeModalButton = document.getElementById("closeModal");

setTimeout(() => {
    if (!contactModal.open) {
        contactModal.showModal();
    }
}, 60000);

closeModalButton.addEventListener("click", () => {
    contactModal.close();
});
const themeToggle = document.getElementById("themeToggle");

function applyTheme(isDark) {
    document.documentElement.classList.toggle("dark", isDark);

    themeToggle.setAttribute("aria-pressed", String(isDark));

    themeToggle.textContent = isDark
        ? "Увімкнути світлу тему"
        : "Увімкнути темну тему";
}

// Початкова тема залежить від місцевого часу комп’ютера.
const currentHour = new Date().getHours();
applyTheme(currentHour < 7 || currentHour >= 21);

// Ручне перемикання.
themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    applyTheme(!isDark);
});