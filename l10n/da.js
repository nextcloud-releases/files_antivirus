OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Ren",
    "Infected" : "Inficeret",
    "Unchecked" : "Ukontrolleret",
    "Scanner exit status" : "Scannerens afslutningsstatus",
    "Scanner output" : "Scanner output",
    "Saving…" : "Gemmer...",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Filen {file} er inficeret med {virus}",
    "The file has been removed" : "Filen er blevet fjernet",
    "File containing {virus} detected" : "Fil, der indeholder {virus}, er fundet",
    "Antivirus detected a virus" : "Antivirus har fundet en virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Virus %ser fundet i fil. Upload kan ikke fortsætte.",
    "Saved" : "Gemt",
    "Antivirus for files" : "Antivirus til filer",
    "An antivirus app for Nextcloud" : "En antivirus-app til Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus til filer er en antivirus-app til Nextcloud.\n\n* 🕵️‍♂️ Når brugeren uploader en fil, bliver den kontrolleret\n* ☢️ Uploadede og inficerede filer vil blive slettet, og en meddelelse vil blive vist og/eller sendt via e-mail\n* 🔎 Baggrundsjob vil scanne alle filer\n* ❓ Brug ClamAV (open source) eller Kaspersky Scan Engine or an ICAP kompertibel scanner\n\nDenne applikation inspicerer filer, der er uploadet til Nextcloud, for virus, før de skrives til Nextcloud-lageret. Hvis en fil identificeres som en virus, bliver den enten logget eller ikke uploadet til serveren. Applikationen er afhængig af den underliggende ClamAV-virusscanningsmotor, som administratoren peger Nextcloud til, når applikationen konfigureres. Alternativt kan en Kaspersky Scan Engine konfigureres, som skal køre på en separat server.\nFor at denne app skal være effektiv, skal ClamAV-virusdefinitionerne holdes ajour. Bemærk også, at aktivering af denne app vil påvirke systemets ydeevne, da der kræves yderligere behandling for hver upload. Flere oplysninger findes i Antivirus-dokumentationen.",
    "Greetings {user}," : "Velkommen {bruger},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Beklager, men der blev fundet malware i en fil du forsøgte at uploade, og den blev slettet.",
    "This email is a notification from {host}. Please, do not reply." : "Denne e-mail er en notifikation fra {host}. Venligst, lad være med at svare.",
    "File uploaded: {file}" : "Fil uploadet: {file}",
    "Antivirus for Files" : "Antivirus til filer",
    "Mode" : "Mode",
    "ClamAV Executable" : "ClamAV eksekverbar",
    "ClamAV Daemon" : "ClamAV Daemon",
    "ClamAV Daemon (Socket)" : "ClamAV Daemon (Socket)",
    "Kaspersky Daemon" : "Kaspersky Daemon",
    "ICAP server" : "ICAP server",
    "Socket" : "Socket",
    "ClamAV Socket." : "ClamAV Socket.",
    "Not required in Executable Mode." : "Ikke påkrævet i eksekverbar tilstand.",
    "Host" : "Vært",
    "Address of Antivirus Host." : "Adresse på antivirusvært.",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Portnummer på Antivirus Host.",
    "TLS" : "TLS",
    "Use TLS encryption." : "Aktivér TLS-kryptering.",
    "ICAP preset" : "ICAP forudindstillet",
    "Select" : "Vælg",
    "ICAP mode" : "ICAP-tilstand",
    "ICAP service" : "ICAP service",
    "ICAP virus response header" : "ICAP virus response header",
    "Stream Length" : "Stream Length",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength værdi i bytes.",
    "bytes" : "bytes",
    "Path to clamscan" : "Sti til clamscan",
    "Path to clamscan executable." : "Sti til clamscan eksekverbar.",
    "Not required in Daemon Mode." : "Ikke påkrævet i Daemon Mode.",
    "Extra command line options (comma-separated)" : "Ekstra kommandolinjeindstillinger (kommasepareret)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Filstørrelsesgrænse for periodiske baggrundsscanninger og chunked uploads, -1 betyder ingen grænse",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Baggrundsscanning og chunked upload fil størrelse grænse i bytes, -1 betyder ingen grænse",
    "Check only first bytes of the file, -1 means no limit" : "Kontroller kun de første bytes af filen, -1 betyder ingen grænse",
    "When infected files are found during a background scan" : "Når inficerede filer findes under en baggrundsscanning",
    "Only log" : "Kun Log",
    "Delete file" : "Slet fil",
    "Save" : "Gem",
    "Advanced" : "Avanceret",
    "Rules" : "Regler",
    "Clear All" : "Ryd alt",
    "Reset to defaults" : "Nulstil til standardindstillinger ",
    "Match by" : "Match med",
    "Scanner exit status or signature to search" : "Scannerens udgangsstatus eller signatur for at søge",
    "Description" : "Beskrivelse",
    "Mark as" : "Marker som",
    "Add a rule" : "Tilføj regel"
},
"nplurals=2; plural=(n != 1);");
