# Gogh Studio 網站

## 聯繫表單設置

### 數據存儲
聯繫表單數據將存儲在本地JSON文件中：
- 數據將保存在項目根目錄下的`data/contact-submissions.json`文件中
- 該文件會自動創建，無需額外設置
- 在生產環境中，可以考慮將此方案升級為資料庫存儲

### 電子郵件通知設置

當有人提交聯繫表單時，系統會發送電子郵件通知。請按照以下步驟設置：

1. 更新`.env`文件中的電子郵件設置：
   - `EMAIL_SERVER`: SMTP服務器地址 (默認值: smtp.gmail.com)
   - `EMAIL_PORT`: SMTP端口 (默認值: 587)
   - `EMAIL_SECURE`: 是否使用SSL/TLS (true/false)
   - `EMAIL_USER`: 您的電子郵件地址
   - `EMAIL_PASSWORD`: 您的電子郵件密碼或應用密碼

   如果使用Gmail，建議創建"應用密碼"而不是使用您的主密碼：
   - 前往 https://myaccount.google.com/
   - 選擇「安全性」
   - 在「登入Google」部分，選擇「應用程式密碼」
   - 選擇應用和設備，然後生成新的應用密碼
   - 複製該密碼並將其填入`EMAIL_PASSWORD`

2. 設置接收通知的電子郵件地址：
   - `NOTIFICATION_EMAIL`: 您希望接收表單提交通知的電子郵件地址

## 開發

```bash
# 安裝依賴
npm install

# 開發模式運行
npm run dev

# 生產環境構建
npm run build

# 運行生產環境版本
npm start
``` 