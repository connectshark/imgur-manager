# Imgur Manager (圖片管理器)

> **⚠️ 注意：此專案已不再維護。**
>
> 原始碼僅為存檔目的而保留，請注意其中可能包含過時的依賴套件或安全漏洞。歡迎您 fork 此專案並自行更新使用。

[![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/imgur-manager.svg?style=flat)](https://github.com/connectshark/imgur-manager)
![GitHub stars](https://img.shields.io/github/stars/connectshark/imgur-manager.svg?style=social&label=Stars&style=plastic)

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-35495E?style=for-the-badge&logo=tailwindcss&logoColor=38BCF8)

Imgur Manager 是一個前端應用程式，旨在為您的 Imgur 圖片和相簿提供一個易於使用的管理介面。

## 目錄

- [專案截圖](#專案截圖)
- [主要功能](#主要功能)
- [使用技術](#使用技術)
- [開始使用](#開始使用)
  - [環境需求](#環境需求)
  - [安裝與設定](#安裝與設定)
  - [可用腳本](#可用腳本)
- [授權](#授權)
- [貢獻](#貢獻)

## 線上預覽 
[![stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/connectshark/imgur-manager)

## 專案截圖

![](/readme/cover.png)

## 主要功能

-   透過 Imgur OAuth2 進行使用者身份驗證。
-   查看您帳戶中的所有圖片。
-   上傳新圖片。
-   建立、查看和管理相簿。

## 使用技術

-   [Vite](https://vitejs.dev/) - 新一代前端建置工具。
-   [Vue 3](https://vuejs.org/) - 漸進式 JavaScript 框架。
-   [Vue Router 4](https://router.vuejs.org/) - Vue.js 的官方路由管理器。
-   [Pinia](https://pinia.vuejs.org/) - Vue 的官方狀態管理庫。
-   [Tailwind CSS](https://tailwindcss.com/) - 一個功能優先的 CSS 框架。

## 開始使用

請依照以下說明在您的本機電腦上設定並執行此專案。

### 環境需求

-   [Node.js](https://nodejs.org/) (建議使用 v18 或更新版本)
-   [pnpm](https://pnpm.io/) (或 npm / yarn)

### 安裝與設定

1.  **複製專案倉庫：**
    ```sh
    git clone https://github.com/connectshark/imgur-manager.git
    cd imgur-manager
    ```

2.  **安裝依賴套件：**
    ```sh
    npm install
    ```

3.  **設定環境變數：**
    將 `.env.example` 檔案重新命名為 `.env`，並填寫所需的值。您需要在 Imgur 上註冊一個應用程式以取得您的 `CLIENT_ID`。

    ```ini
    # .env
    VITE_API_DOMAIN=https://api.imgur.com
    VITE_REDIRECT_URI=http://localhost:5173/callback
    VITE_CLIENT_ID=YOUR_IMGUR_CLIENT_ID
    ```
    *請注意：`VITE_REDIRECT_URI` 必須與您在 Imgur 應用程式設定中設定的回呼 URL 相符。*

### 可用腳本

-   **開發模式下執行：**
    ```sh
    npm run dev
    ```

-   **建置生產版本：**
    ```sh
    npm run build
    ```

-   **預覽生產版本：**
    ```sh
    npm run preview
    ```

## 授權

此專案採用 MIT 授權 - 詳情請參閱 [LICENSE](LICENSE) 檔案。

## 貢獻

由於此專案已不再維護，目前不接受任何貢獻。