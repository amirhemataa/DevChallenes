document.addEventListener("DOMContentLoaded", () => {
   // تابع برای اعمال تم ذخیره‌شده از localStorage
   const applySavedTheme = () => {
     const savedTheme = localStorage.getItem("theme");
     if (savedTheme === "dark" || savedTheme === "light") {
       document.body.classList.remove("dark", "light");
       document.body.classList.add(savedTheme);
     } else {
       // اگر هیچ تمی ذخیره نشده بود، پیش‌فرض light رو تنظیم می‌کنیم
       document.body.classList.add("light");
     }
   };
 
   // هنگام لود صفحه، تم ذخیره‌شده رو اعمال کن
   applySavedTheme();
 
   // فقط اگر دکمه تغییر تم وجود داشته باشه
   const toggleBtn = document.getElementById("toggle-theme");
   if (toggleBtn) {
     toggleBtn.addEventListener("click", () => {
       // تغییر تم از light به dark یا برعکس
       const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
       const newTheme = currentTheme === "dark" ? "light" : "dark";
 
       // تغییر کلاس‌های body برای اعمال تم جدید
       document.body.classList.remove(currentTheme);
       document.body.classList.add(newTheme);
 
       // ذخیره تم جدید در localStorage
       localStorage.setItem("theme", newTheme);
     });
   }
 });
 