// مدیریت تب‌ها
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// مدیریت آپلود فایل
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");
const pdfList = document.getElementById("pdf-list");

uploadButton.addEventListener("click", () => {
    const file = fileInput.files[0];
    if (file && file.type === "application/pdf") {
        const listItem = document.createElement("li");

        // ایجاد لینک دانلود
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.download = file.name;

        listItem.appendChild(link);
        pdfList.appendChild(listItem);

        // پاک کردن فایل از ورودی
        fileInput.value = "";
        alert("فایل با موفقیت آپلود شد!");
    } else {
        alert("لطفاً یک فایل PDF انتخاب کنید.");
    }
}); // مدیریت تب‌ها
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// مدیریت آپلود فایل
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");
const pdfList = document.getElementById("pdf-list");

uploadButton.addEventListener("click", () => {
    const file = fileInput.files[0];
    if (file && file.type === "application/pdf") {
        const listItem = document.createElement("li");

        // ایجاد لینک دانلود
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.download = file.name;

        listItem.appendChild(link);
        pdfList.appendChild(listItem);

        // پاک کردن فایل از ورودی
        fileInput.value = "";
        alert("فایل با موفقیت آپلود شد!");
    } else {
        alert("لطفاً یک فایل PDF انتخاب کنید.");
    }
});