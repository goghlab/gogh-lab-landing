import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// 確保數據目錄存在
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 設置聯繫表單數據文件路徑
const submissionsFile = path.join(dataDir, 'contact-submissions.json');

// 如果文件不存在，創建空的JSON數組
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, JSON.stringify([], null, 2), 'utf8');
}

// 创建邮件传输器
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // 使用TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

export async function POST(request: NextRequest) {
  try {
    // 解析請求數據
    const data = await request.json();
    const { name, email, company, message } = data;

    // 基本驗證
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: '姓名、電子郵件和訊息為必填欄位'
      }, { status: 400 });
    }

    // 創建新提交記錄
    const newSubmission = {
      id: Date.now(),
      name,
      email,
      company: company || '',
      message,
      createdAt: new Date().toISOString()
    };

    // 讀取現有數據
    let submissions = [];
    try {
      const fileContent = fs.readFileSync(submissionsFile, 'utf8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // 如果文件讀取失敗，使用空數組
      submissions = [];
    }

    // 添加新提交並保存
    submissions.push(newSubmission);
    fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2), 'utf8');

    // 發送電子郵件通知
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && process.env.NOTIFICATION_EMAIL) {
      try {
        console.log('正在嘗試發送電子郵件通知...');
        console.log('郵件設定:', {
          from: process.env.EMAIL_USER,
          to: process.env.NOTIFICATION_EMAIL,
          subject: '新的聯繫表單提交 - Gogh Studio',
        });
        
        const transporter = createTransporter();
        
        const mailOptions = {
          from: `"Gogh Studio" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL,
          subject: '新的聯繫表單提交 - Gogh Studio',
          html: `
            <h1>收到新的聯繫表單提交</h1>
            <p><strong>姓名:</strong> ${name}</p>
            <p><strong>電子郵件:</strong> ${email}</p>
            <p><strong>公司:</strong> ${company || '未提供'}</p>
            <p><strong>訊息:</strong> ${message}</p>
            <p><strong>提交時間:</strong> ${new Date().toLocaleString('zh-TW')}</p>
          `,
        };
        
        const info = await transporter.sendMail(mailOptions);
        console.log('電子郵件發送成功!');
        console.log('郵件ID:', info.messageId);
      } catch (emailError: any) {
        console.error('發送電子郵件通知失敗:', emailError);
        // 即使郵件發送失敗，繼續處理表單提交
      }
    } else {
      console.log('未配置電子郵件發送器或接收郵箱，跳過發送通知');
      console.log('EMAIL_USER:', process.env.EMAIL_USER ? '已設置' : '未設置');
      console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '已設置' : '未設置');
      console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL ? '已設置' : '未設置');
    }

    // 返回成功響應
    return NextResponse.json({
      success: true,
      message: '您的訊息已成功提交，我們會盡快與您聯繫。',
      id: newSubmission.id
    });
  } catch (error: any) {
    console.error('處理聯繫表單時出錯:', error);
    return NextResponse.json({
      success: false,
      message: '服務器錯誤，請稍後再試',
      error: error.message
    }, { status: 500 });
  }
}