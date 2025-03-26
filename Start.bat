@echo off
SETLOCAL

REM Vérifie si le dossier node_modules existe
IF NOT EXIST "node_modules" (
    echo 🧩 Dépendances manquantes. Installation avec npm install...
    npm install

    IF %ERRORLEVEL% NEQ 0 (
        echo ❌ Échec de npm install. Vérifiez vos erreurs.
        EXIT /B 1
    )
) ELSE (
    echo ✅ Dépendances déjà installées.
)

echo 🚀 Démarrage de l'application avec npm start...
npm start
