# rss-dashboard
Разработка ведётся в папке src:
index.html
index.js
style.css

Собирается вебпак-проект в корневую папку!

__________________________________________________

Для установки всех пакетов, необходимо забрать проект с гита и написать в GitBash корневой папки:

npm install
__________________________________________________

После установки всего
режим разработки для js файла

npm run dev

режим продакшн(минифицированные файлы) для js файла

npm run build

следить за изменениями всего проекта, автоматическая сборка после сейва изменений(рекомендуемое)

npm run watch

__________________________________________________
Настройка Web-pack и Eslint самостоятельно, если сложности с установкой!

npm init

npm install -D webpack webpack-cli

npm install -D clean-webpack-plugin

npm install -D html-webpack-plugin

npm install --save-dev postcss-loader postcss-preset-env

npm install style-loader css-loader sass-loader node-sass extract-text-webpack-plugin -D

установка babel
npm install -D babel-loader @babel/core @babel/preset-env webpack

установка eslint-config-airbnb-base
npx install-peerdeps --dev eslint-config-airbnb

