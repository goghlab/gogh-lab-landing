import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    
    console.log('表单已保存');

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