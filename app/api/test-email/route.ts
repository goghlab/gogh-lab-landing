import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('開始測試電子郵件發送...');
    
    // 檢查環境變數
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.NOTIFICATION_EMAIL) {
      console.error('缺少郵件配置:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
        NOTIFICATION_EMAIL: !!process.env.NOTIFICATION_EMAIL
      });
      
      return NextResponse.json({
        success: false,
        message: '郵件配置缺失，請檢查.env文件',
        missingConfig: {
          EMAIL_USER: !process.env.EMAIL_USER,
          EMAIL_PASSWORD: !process.env.EMAIL_PASSWORD,
          NOTIFICATION_EMAIL: !process.env.NOTIFICATION_EMAIL
        }
      }, { status: 500 });
    }
    
    // 創建郵件傳輸器
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 587),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    console.log('郵件傳輸器配置:', {
      host: process.env.EMAIL_SERVER,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: '******' // 隱藏密碼
      }
    });
    
    // 發送測試郵件
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'Gogh Studio 網站 - 測試郵件',
      html: `
        <h1>這是一封測試郵件</h1>
        <p>如果您收到了這封郵件，說明郵件發送功能正常運作。</p>
        <p>發送時間: ${new Date().toLocaleString('zh-TW')}</p>
      `,
    });
    
    console.log('測試郵件發送成功:', info);
    
    return NextResponse.json({
      success: true,
      message: '測試郵件發送成功',
      emailInfo: {
        messageId: info.messageId,
        envelope: info.envelope,
        response: info.response
      }
    });
  } catch (error) {
    console.error('測試郵件發送失敗:', error);
    
    return NextResponse.json({
      success: false,
      message: '測試郵件發送失敗',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 