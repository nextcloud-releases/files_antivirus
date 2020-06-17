OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Чистий",
    "Infected" : "Інфікований",
    "Unchecked" : "Неперевірений",
    "Scanner exit status" : "Статус завершення сканування",
    "Scanner output" : "Вивід сканера",
    "Saving…" : "Збереження...",
    "Antivirus" : "Антивірус",
    "File {file} is infected with {virus}" : "Файл {file} інфіковано вірусом {virus}",
    "The file has been removed" : "Файл було вилучено",
    "File containing {virus} detected" : "Знайдено файл, що містить вірус {virus}",
    "Antivirus detected a virus" : "Антивірус знайшов вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "У файлі знайдено вірус %s. Завантаження неможливо завершити.",
    "Saved" : "Збережено",
    "Antivirus for files" : "Антивірус для файлів",
    "An antivirus app for Nextcloud based on ClamAV" : "Застосунок Антивірус для Nextcloud працює на основі ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивірус для Файлів - це антивірусний застосунок для Nextcloud, що базується на ClamAV.\n\n* 🕵️‍♂️ Коли користувач завантажує файл - він перевіряється\n* ☢️ Завантажені інфіковані файли буде вилучено, про що буде показано сповіщення і надіслано електронного листа\n* 🔎 Фонове сканування всіх файлів\n\nЦей застосунок перевіряє всі файли при завантаженні до Nextcloud на наявність вірусів до моменту запису у сховище Nextcloud. Якщо файл ідентифіковано як вірус - робиця запис до журналу або файл не завантажується на сервер. Застосунок використовує антивірусний двигун ClamAV, на який адміністратор спрямовує Nextcloud під час налаштування.\nДля ефективної роботи застосунку антивірусні бази ClamAV повинні постійно оновлюватися. Також зауважте, що використання цього застосунку може вплинути на швидкодію системи, так як додаткове навантаження від роботи антивірусу буде спостерігатися при кожному завантаженні файла. Додаткову інформацію можна знайти у документації до Антивірусу.",
    "Greetings {user}," : "Вітаю, {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Перепрошую, але у файлі, який ви намагаєтесь завантажити, знайдено шкідливий код. Файл потрібно вилучити.",
    "This email is a notification from {host}. Please, do not reply." : "Цей електронний лист є сповіщенням від {host}. Будь-ласка не відповідайте.",
    "File uploaded: {file}" : "Файл завантажено: {file}",
    "Antivirus for Files" : "Антивірус для Файлів",
    "Mode" : "Режим",
    "Executable" : "Виконуваний файл",
    "Daemon" : "Демон",
    "Daemon (Socket)" : "Демон (сокет)",
    "Socket" : "Сокет",
    "Clamav Socket." : "Сокет Clamav.",
    "Not required in Executable Mode." : "Не обов'язково у режимі Виконуваного файлу",
    "Host" : "Хост",
    "Address of Antivirus Host." : "Адреса хоста Антивіруса.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Номер порту хоста Антивіруса.",
    "Stream Length" : "Довжина потоку",
    "ClamAV StreamMaxLength value in bytes." : "Значення ClamAV StreamMaxLength у байтах.",
    "bytes" : "байтів",
    "Path to clamscan" : "Шлях до clamscan",
    "Path to clamscan executable." : "Шлях до Виконуваного файлу clamscan.",
    "Not required in Daemon Mode." : "Не обов'язково у режимі Демона.",
    "Extra command line options (comma-separated)" : "Додаткові опції командного рядка (через коми)",
    "File size limit, -1 means no limit" : "Обмеження розміру файла, -1 означає відсутність обмежень",
    "Background scan file size limit in bytes, -1 means no limit" : "Обмеження розміру файла при фоновому скануванні, -1 означає відсутність обмежень",
    "When infected files are found during a background scan" : "Якщо інфікований файл знайдено під час фонового сканування",
    "Only log" : "Тільки записати до журналу",
    "Delete file" : "Вилучити файл",
    "Save" : "Зберегти",
    "Advanced" : "Додатково",
    "Rules" : "Правила",
    "Clear All" : "Очистити Все",
    "Reset to defaults" : "Скинути налаштування до стандартних",
    "Match by" : "Збіг за",
    "Scanner exit status or signature to search" : "Статус завершення сканування або сінгатура для пошуку",
    "Description" : "Опис",
    "Mark as" : "Позначити як",
    "Add a rule" : "Додати правило"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
