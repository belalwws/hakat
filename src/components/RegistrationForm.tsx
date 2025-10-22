import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { toast } from 'sonner@2.0.3';
import { UserPlus, Mail, Phone, CreditCard, Briefcase, Award, MessageSquare, Rocket, Users } from 'lucide-react';

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationForm({ open, onOpenChange }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    bio: '',
    email: '',
    phone: '',
    currentStatus: '',
    previousHackathon: '',
    workplace: '',
    role: '',
    path: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من المدخلات
    if (!formData.fullName || !formData.nationalId || !formData.email || !formData.phone || !formData.currentStatus || !formData.previousHackathon || !formData.role || !formData.path) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);

    try {
      // تحضير البيانات للإرسال
      const requestBody = {
        hackathonId: "cmh1dpgrt0000id0s8dojzncc",
        name: formData.fullName,
        field_1761100546068: formData.nationalId,
        field_1761100546459: formData.bio,
        field_1761100546996: formData.currentStatus === 'student' ? 'طالب' : formData.currentStatus === 'employee' ? 'موظف' : 'أخرى',
        field_1761100547652: formData.previousHackathon === 'yes' ? 'نعم' : 'لا',
        field_1761100548180: formData.workplace,
        field_1761100549548: formData.role === 'designer' ? 'مصمم UI/UX' : formData.role === 'developer' ? 'مطور برمجيات' : formData.role === 'data-analyst' ? 'محلل بيانات' : formData.role === 'project-manager' ? 'مدير مشروع' : formData.role === 'business-analyst' ? 'محلل أعمال' : 'دور آخر',
        field_1761100549971: formData.path === 'passports' ? 'مسار الجوازات' : formData.path === 'civil-defense' ? 'مسار الدفاع المدني' : 'مسار إمارة الباحة',
        email: formData.email,
        phone: formData.phone,
      };

      console.log('📤 إرسال البيانات إلى API...');
      console.log('Request Body:', requestBody);

      const response = await fetch('https://clownfish-app-px9sc.ondigitalocean.app/api/external/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'hackathon-api-key-2025',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('📊 Response Status:', response.status);
      console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('✅ Response Data:', data);

      if (response.ok && data.success) {
        toast.success('تم التسجيل بنجاح! سنتواصل معك قريباً', {
          description: 'شكراً لمشاركتك في هاكاثون الابتكار الحكومي',
          duration: 5000,
        });

        // إعادة تعيين النموذج
        setFormData({
          fullName: '',
          nationalId: '',
          bio: '',
          email: '',
          phone: '',
          currentStatus: '',
          previousHackathon: '',
          workplace: '',
          role: '',
          path: '',
        });

        onOpenChange(false);
      } else {
        console.error('❌ خطأ في التسجيل:', data);
        toast.error(data.message || 'حدث خطأ أثناء التسجيل');
      }
    } catch (error) {
      console.error('❌ خطأ في الاتصال بـ API:', error);
      toast.error('حدث خطأ في الاتصال بالخادم. يرجى المحاولة لاحقاً');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] sm:max-w-[850px] lg:max-w-[1000px] xl:max-w-[1100px] p-0 gap-0 h-[85vh] max-h-[800px] overflow-hidden rounded-3xl" dir="rtl">
        <div className="flex flex-col h-full">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-8 py-5 text-white shadow-lg flex-shrink-0 rounded-t-3xl">
            <DialogHeader className="text-center">
              <DialogTitle className="text-3xl flex items-center justify-center gap-3 text-white mb-2">
                <Rocket size={36} className="text-emerald-100" />
                <span>نموذج التسجيل في الهاكاثون</span>
                <Rocket size={36} className="text-emerald-100" />
              </DialogTitle>
              <DialogDescription className="text-lg text-center text-emerald-50 leading-relaxed">
                املأ البيانات التالية للانضمام إلى هاكاثون الابتكار الحكومي
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form content with scroll - Fixed height with clear scrolling */}
          <div 
            className="flex-1 overflow-y-auto px-8 py-6 bg-slate-50 custom-scrollbar" 
            style={{ 
              minHeight: '400px',
              maxHeight: 'calc(85vh - 140px)'
            }}
          >
            <style>{`
              .custom-scrollbar {
                scroll-behavior: smooth;
                overflow-y: scroll;
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 16px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #cbd5e1;
                border-radius: 10px;
                margin: 8px 0;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #059669 0%, #047857 100%);
                border-radius: 10px;
                border: 3px solid #cbd5e1;
                min-height: 40px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #047857 0%, #065f46 100%);
                border: 2px solid #cbd5e1;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:active {
                background: #065f46;
              }
              /* Firefox scrollbar */
              .custom-scrollbar {
                scrollbar-width: auto;
                scrollbar-color: #059669 #cbd5e1;
              }
            `}</style>
            <form onSubmit={handleSubmit} className="space-y-4 pb-4">
              {/* الاسم الثلاثي */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="fullName" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>الاسم الثلاثي</span>
                  <UserPlus size={20} className="text-emerald-600" />
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="أدخل اسمك الثلاثي"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* رقم الهوية */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="nationalId" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>رقم الهوية</span>
                  <CreditCard size={20} className="text-emerald-600" />
                </Label>
                <Input
                  id="nationalId"
                  type="text"
                  placeholder="أدخل رقم الهوية الوطنية"
                  value={formData.nationalId}
                  onChange={(e) => handleInputChange('nationalId', e.target.value)}
                  required
                  className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* نبذة عن المشارك */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="bio" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span>نبذة عن المشارك</span>
                  <MessageSquare size={20} className="text-emerald-600" />
                </Label>
                <Textarea
                  id="bio"
                  placeholder="أخبرنا عن نفسك وخبراتك..."
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="text-base min-h-20 text-right resize-none border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="email" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>البريد الإلكتروني</span>
                  <Mail size={20} className="text-emerald-600" />
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* رقم الهاتف */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="phone" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>رقم الهاتف</span>
                  <Phone size={20} className="text-emerald-600" />
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="05xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* الوضع الحالي */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="currentStatus" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>الوضع الحالي</span>
                  <Briefcase size={20} className="text-emerald-600" />
                </Label>
                <Select value={formData.currentStatus} onValueChange={(value) => handleInputChange('currentStatus', value)} required dir="rtl">
                  <SelectTrigger className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2" dir="rtl">
                    <SelectValue placeholder="اختر وضعك الحالي" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="student" className="text-base text-right">طالب</SelectItem>
                    <SelectItem value="employee" className="text-base text-right">موظف</SelectItem>
                    <SelectItem value="other" className="text-base text-right">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* هل شاركت في هاكاثون من قبل */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>هل شاركت في هاكاثون من قبل؟</span>
                  <Award size={20} className="text-emerald-600" />
                </Label>
                <RadioGroup 
                  value={formData.previousHackathon} 
                  onValueChange={(value) => handleInputChange('previousHackathon', value)}
                  className="flex gap-8 justify-end bg-slate-50 p-3 rounded-lg border border-slate-200"
                  dir="rtl"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Label htmlFor="hackathon-yes" className="text-base cursor-pointer">نعم</Label>
                    <RadioGroupItem value="yes" id="hackathon-yes" className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Label htmlFor="hackathon-no" className="text-base cursor-pointer">لا</Label>
                    <RadioGroupItem value="no" id="hackathon-no" className="w-5 h-5" />
                  </div>
                </RadioGroup>
              </div>

              {/* جهة العمل */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="workplace" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span>جهة العمل</span>
                  <Briefcase size={20} className="text-emerald-600" />
                </Label>
                <Input
                  id="workplace"
                  type="text"
                  placeholder="أدخل جهة العمل (إن وجدت)"
                  value={formData.workplace}
                  onChange={(e) => handleInputChange('workplace', e.target.value)}
                  className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2"
                  dir="rtl"
                />
              </div>

              {/* الدور الذي تريد أن تلعبه */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="role" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>الدور الذي تريد أن تلعبه</span>
                  <Users size={20} className="text-emerald-600" />
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)} required dir="rtl">
                  <SelectTrigger className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2" dir="rtl">
                    <SelectValue placeholder="اختر الدور المناسب لك" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="developer" className="text-base text-right">مطور برمجيات</SelectItem>
                    <SelectItem value="designer" className="text-base text-right">مصمم UI/UX</SelectItem>
                    <SelectItem value="data-analyst" className="text-base text-right">محلل بيانات</SelectItem>
                    <SelectItem value="project-manager" className="text-base text-right">مدير مشروع</SelectItem>
                    <SelectItem value="business-analyst" className="text-base text-right">محلل أعمال</SelectItem>
                    <SelectItem value="other" className="text-base text-right">دور آخر</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* اختر المسار */}
              <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Label htmlFor="path" className="text-lg flex items-center gap-2 justify-end" style={{ color: '#1e3a5f' }}>
                  <span className="text-red-500 text-xl">*</span>
                  <span>اختر المسار</span>
                  <Award size={20} className="text-emerald-600" />
                </Label>
                <Select value={formData.path} onValueChange={(value) => handleInputChange('path', value)} required dir="rtl">
                  <SelectTrigger className="text-base h-11 text-right border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2" dir="rtl">
                    <SelectValue placeholder="اختر المسار المناسب لك" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectItem value="passports" className="text-base text-right">مسار الجوازات</SelectItem>
                    <SelectItem value="civil-defense" className="text-base text-right">مسار الدفاع المدني</SelectItem>
                    <SelectItem value="baha" className="text-base text-right">مسار إمارة الباحة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Action buttons at the end of form */}
              <div className="pt-6 pb-2">
                <div className="flex gap-4 justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                    className="text-base px-10 py-4 h-auto border-2 border-slate-300 hover:bg-slate-100 hover:border-slate-400 transition-all rounded-xl"
                    disabled={isSubmitting}
                  >
                    إلغاء
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white text-base px-12 py-4 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin text-lg">⏳</span>
                        <span>جاري التسجيل...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>تسجيل المشاركة</span>
                        <Rocket size={18} />
                      </span>
                    )}
                  </Button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}