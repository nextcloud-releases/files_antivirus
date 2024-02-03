OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Temiz",
    "Infected" : "Enfekte",
    "Unchecked" : "Denetlenmemiş",
    "Scanner exit status" : "Tarayıcı çıkış durumu",
    "Scanner output" : "Tarayıcı çıktısı",
    "Saving…" : "Kaydediliyor…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "{file} dosyasına {virus} virusu bulaşmış",
    "The file has been removed" : "Dosya silindi",
    "File containing {virus} detected" : "Dosyada {virus} virusu algılandı",
    "Antivirus detected a virus" : "Antivirus bir virus algıladı",
    "Virus %s is detected in the file. Upload cannot be completed." : "Dosyada %s virusu bulundu. Yükleme tamamlanamadı.",
    "Saved" : "Kaydedildi",
    "Antivirus for files" : "Dosyalar için antivirus",
    "An antivirus app for Nextcloud" : "Nextcloud antivirus uygulaması",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Dosyaları için antivirus, Nexctloud antivirus uygulamasıdır.\n\n* 🕵️‍♂️ Kullanıcıların yüklediği dosyaları denetler\n* ☢️ Yüklenmiş virüslü dosyaları siler ve bir bildirimi görüntüler ya da e-posta ile gönderir\n* 🔎 Arka planda tüm dosyaları tarayan bir görev çalıştırır\n* ❓ ClamAV (açık kaynaklı), Kaspersky tarama sistemi ya da ICAP uyumlu bir tarayıcı kullanır\n\nBu uygulama Nextcloud üzerine yüklenen dosyaları Nextcloud depolaması üzerine kaydetmeden önce virüslere karşı tarar. Bir dosyada virüs bulunursa, günlüğe kaydedilir ya da sunucuya yüklenmez. Bu uygulama Nextcloud yapılandırması sırasında yönetici tarafından belirtilen ClamAV virus tarama uygulamasını kullanır. Alternatif olarak, ayrı bir sunucuda çalıştırılması gereken Kaspersky Tarama sistemi yapılandırılabilir\nBu uygulamanın etkili olması için ClamAV virus tanımlarının güncel olması gerekir. Ayrıca bu uygulama devreye alındığında, yüklenecek her dosya için ek işlemler yapılması nedeniyle sistem başarımı olumsuz etkilenebilir. Ayrıntılı bilgi almak için Antivirus uygulamasının belgelerine bakabilirsiniz",
    "Greetings {user}," : "Merhaba {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Ne yazık ki yüklemeye çalıştığınız dosyada zararlı bir malware yazılımı bulunduğu algılandığından silindi.",
    "This email is a notification from {host}. Please, do not reply." : "Bu ileti {host} tarafından otomatik olarak gönderildiğinden lütfen yanıtlamayın.",
    "File uploaded: {file}" : "Dosya yüklendi: {file}",
    "Antivirus for Files" : "Dosyalar için Antivirus",
    "Mode" : "Kip",
    "ClamAV Executable" : "ClamAV çalıştırılabilir dosyası",
    "ClamAV Daemon" : "ClamAV arka plan işlemi",
    "ClamAV Daemon (Socket)" : "ClamAV arka plan işlemi (soket)",
    "Kaspersky Daemon" : "Kaspersky arka plan işlemi",
    "ICAP server" : "ICAP sunucusu",
    "Socket" : "Soket",
    "ClamAV Socket." : "ClamAV soketi.",
    "Not required in Executable Mode." : "Çalıştırılabilir kipte gerekli değildir.",
    "Host" : "Sunucu",
    "Address of Antivirus Host." : "Antivirus sunucusunun adresi",
    "Port" : "Bağlantı noktası",
    "Port number of Antivirus Host." : "Antivirus sunucusunun bağlantı noktası.",
    "TLS" : "TLS",
    "Use TLS encryption." : "TLS şifrelemesi kullanılır.",
    "ICAP preset" : "ICAP hazır ayarı",
    "Select" : "Seçin",
    "ICAP mode" : "ICAP kipi",
    "REQMOD" : "REQMOD",
    "RESPMOD" : "RESPMOD",
    "ICAP service" : "ICAP hizmeti",
    "ICAP virus response header" : "ICAP virus yanıtı üst bilgisi",
    "Stream Length" : "Akış uzunluğu",
    "ClamAV StreamMaxLength value in bytes." : "Bayt cinsinden ClamAV StreamMaxLenght değeri.",
    "bytes" : "bayt",
    "Path to clamscan" : "Clamscan yolu",
    "Path to clamscan executable." : "Clamscan dosyasının yolu.",
    "Not required in Daemon Mode." : "Arka plan işlemi kipinde gerekli değildir.",
    "Extra command line options (comma-separated)" : "Ek komut satırı seçenekleri (virgül ile ayırarak yazın)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Düzenli arka plan taramaları ve parçalı yüklemeler için dosya boyutu sınırı. -1 sınır olmadığı anlamına gelir",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Bayt cinsinden arka planda dosya tarama ve parçalı yükleme boyutu. -1 sınır olmadığı anlamına gelir",
    "Check only first bytes of the file, -1 means no limit" : "Dosyanın yalnızca ilk baytını denetler. -1 yazılırsa sınırlama uygulanmaz",
    "When infected files are found during a background scan" : "Arka plan taraması sırasında virus bulaşmış dosyalar bulunduğunda",
    "Only log" : "Yalnızca günlük kaydı tutulsun",
    "Delete file" : "Dosya silinsin",
    "Save" : "Kaydet",
    "Advanced" : "Gelişmiş",
    "Rules" : "Kurallar",
    "Clear All" : "Tümünü temizle",
    "Reset to defaults" : "Varsayılanlara dön",
    "Match by" : "Şununla eşleşen",
    "Scanner exit status or signature to search" : "Tarayıcı çıkış durumu ya da arama imzası",
    "Description" : "Açıklama",
    "Mark as" : "Şu olarak işaretlensin",
    "Add a rule" : "Kural ekle"
},
"nplurals=2; plural=(n > 1);");
