# 🔗 إعدادات API - Areeb Frontend

## ✅ تم تكوين جميع الصفحات لاستخدام الباك إند على Replit

### 🔗 رابط الباك إند المستخدم:
```
https://e650d764-c4e9-42b9-91b6-5f59c4d0bc8b-00-184uinw57mbzk.worf.replit.dev
```

### 📁 الملفات المكونة:

#### 1. إعدادات Axios الأساسية:
- **`src/index.js`** - إعدادات axios الأساسية والـ interceptors
- **`src/context/AuthContext.js`** - إعدادات API للـ context

#### 2. الصفحات التي تستخدم API:

##### 🏠 الصفحات الرئيسية:
- **`src/pages/Home.js`** - الصفحة الرئيسية (جلب الكورسات المعتمدة)
- **`src/pages/Courses.js`** - صفحة الكورسات (جلب الكورسات المعتمدة)
- **`src/pages/CourseDetails.js`** - تفاصيل الكورس (جلب الكورس، الكويزات، التسجيل)

##### 👤 صفحات المصادقة:
- **`src/pages/auth/Login.js`** - تسجيل الدخول
- **`src/pages/auth/Register.js`** - إنشاء حساب جديد (تحقق من رقم الطالب)

##### 🎓 صفحات المعلم:
- **`src/pages/teacher/CreateCourse.js`** - إنشاء كورس جديد
- **`src/pages/teacher/EditCourse.js`** - تعديل الكورس
- **`src/pages/teacher/UploadVideo.js`** - رفع فيديو
- **`src/pages/teacher/CreateQuiz.js`** - إنشاء كويز

##### 👨‍🎓 صفحات الطالب:
- **`src/pages/dashboards/StudentDashboard.js`** - لوحة تحكم الطالب
- **`src/pages/QuizPage.js`** - صفحة الكويز
- **`src/pages/VideoPlayer.js`** - مشغل الفيديو

##### 👨‍👩‍👧‍👦 صفحات الوالدين:
- **`src/pages/dashboards/ParentDashboard.js`** - لوحة تحكم الوالدين
- **`src/pages/parent/StudentStats.js`** - إحصائيات الطالب

##### 👨‍🏫 صفحات المعلم (لوحة التحكم):
- **`src/pages/dashboards/TeacherDashboard.js`** - لوحة تحكم المعلم

##### 👨‍💼 صفحات المدير:
- **`src/pages/admin/AdminLogin.js`** - تسجيل دخول المدير
- **`src/pages/admin/AdminDashboard.js`** - لوحة تحكم المدير
- **`src/pages/admin/CourseRequests.js`** - طلبات الكورسات
- **`src/pages/admin/EditCourse.js`** - تعديل الكورسات (المدير)
- **`src/pages/admin/EnrollmentsManagement.js`** - إدارة التسجيلات
- **`src/pages/admin/PerformanceManagement.js`** - إدارة الأداء

### 🔧 كيفية عمل الإعدادات:

1. **إعداد Axios الأساسي** في `src/index.js`:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || 'https://e650d764-c4e9-42b9-91b6-5f59c4d0bc8b-00-184uinw57mbzk.worf.replit.dev';
   axios.defaults.baseURL = API_URL;
   ```

2. **جميع الصفحات تستخدم المسارات النسبية**:
   ```javascript
   // مثال: بدلاً من استخدام الرابط الكامل
   // axios.get('https://e650d764-c4e9-42b9-91b6-5f59c4d0bc8b-00-184uinw57mbzk.worf.replit.dev/api/courses/approved')
   
   // تستخدم المسار النسبي
   axios.get('/api/courses/approved')
   ```

3. **إعدادات CORS** في الباك إند تدعم:
   - `localhost:3000` (للتنمية المحلية)
   - `*.vercel.app` (للرفع على Vercel)

### ✅ اختبار الاتصال:
تم اختبار الاتصال بالباك إند بنجاح:
```bash
Status: 200 OK
Response: {"success":true,"courses":[...]}
```

### 🚀 جاهز للرفع:
جميع الصفحات الآن جاهزة للرفع على Vercel وستتصل بالباك إند على Replit تلقائياً!

---
**آخر تحديث**: تم تكوين جميع الصفحات لاستخدام الباك إند على Replit 