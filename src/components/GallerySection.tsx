import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import Figma assets
import galleryImg1 from 'figma:asset/f5f0d4eb8c695ef556262b87f928a84719f67d6d.png'; // صورة المدينة الذكية ثلاثية الأبعاد
import galleryImg2 from 'figma:asset/05288717604ebe89c7d474b3953d66c42199458a.png';
import galleryImg3 from 'figma:asset/fd3893457c64529462e1adeb687442d659ff0e02.png'; // صورة المرأة السعودية على Zoom
import galleryImg4 from 'figma:asset/a6382663bb1785cf1a5d1a0d8fc9088f7c5380f8.png'; // صورة الشخص السعودي يعمل على اللابتوب
import galleryImg5 from 'figma:asset/e27e9a53a01b79ae301b440aadcaade57477ce05.png'; // صورة خريطة المسار ثلاثية الأبعاد
import galleryImg6 from 'figma:asset/971ce140713faad3b45c1210a049603361de0158.png'; // صورة الفائزة السعيدة
import galleryImg7 from 'figma:asset/abd102f599b15db33304a125056e06e5979d993b.png';
import galleryImg8 from 'figma:asset/9e3c4c43669e726ed39d4a2ad19293b9673fa30c.png';
import galleryImg9 from 'figma:asset/13941fa8c98ea99449d37105b04fe7a9ee4daa8f.png';
import galleryImg10 from 'figma:asset/6942c5b0919ac37cd291a64b6fbd4b9d41c301ce.png';
import galleryImg11 from 'figma:asset/9a2301cad445bfff4b1316c8d0d6b40d3c4b8e1e.png';
import galleryImg12 from 'figma:asset/61fb67a96cf2c31bd8a1cd92424bd946fb873f52.png';

// الصور الجديدة المطلوبة
import newDevImage from 'figma:asset/d379a0fa16d7ce7e041342ab53b1cd0d4e613ae6.png'; // صورة المرأة السعودية تعمل على Zoom
import newProjectsImage from 'figma:asset/cb28510f3b383f4ce2da861c2019d645b6514a36.png'; // صورة واجهة العصف الذهني
import newBahaImage from 'figma:asset/540c2adcd0269eacb9e9b40f041ff40d8a3cb588.png'; // صورة المدينة الذكية مع النقاط

// Individual Image Components for independent handling
function GalleryImage1() {
  const imageUrl = galleryImg1; // صورة المدينة الذكية ثلاثية الأبعاد
  const title = "المدن الذكية المبتكرة";
  
  return (
    <div className="group relative" id="gallery-image-1">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage2() {
  const imageUrl = newProjectsImage; // صورة واجهة العصف الذهني
  const title = "نماذج المشاريع الإبداعية";
  
  return (
    <div className="group relative" id="gallery-image-2">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage3() {
  const imageUrl = galleryImg3; // صورة المرأة السعودية على Zoom
  const title = "التواصل الإبداعي";
  
  return (
    <div className="group relative" id="gallery-image-3">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage4() {
  const imageUrl = galleryImg4; // صورة الشخص السعودي يعمل على اللابتوب
  const title = "العمل عن بُعد";
  
  return (
    <div className="group relative" id="gallery-image-4">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage5() {
  const imageUrl = galleryImg5; // صورة خريطة المسار ثلاثية الأبعاد
  const title = "رحلة الابتكار";
  
  return (
    <div className="group relative" id="gallery-image-5">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage6() {
  const imageUrl = galleryImg6; // صورة الفائزة السعيدة
  const title = "لحظات الفوز";
  
  return (
    <div className="group relative" id="gallery-image-6">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

// Second Set of Gallery Images
function GalleryImage7() {
  const imageUrl = galleryImg7; // Conference hall with stage and presentation
  const title = "قاعة المؤتمرات";
  
  return (
    <div className="group relative" id="gallery-image-7">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage8() {
  const imageUrl = galleryImg8; // Collaborative workspace with teams
  const title = "فضاء التعاون";
  
  return (
    <div className="group relative" id="gallery-image-8">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage9() {
  const imageUrl = galleryImg9; // Brainstorming session with sticky notes
  const title = "جلسات العصف الذهني";
  
  return (
    <div className="group relative" id="gallery-image-9">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage10() {
  const imageUrl = galleryImg10; // Training completion gift box
  const title = "جوائز التميز";
  
  return (
    <div className="group relative" id="gallery-image-10">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage11() {
  const imageUrl = galleryImg11; // Conference hall aerial view
  const title = "القاعات الرئيسية";
  
  return (
    <div className="group relative" id="gallery-image-11">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

function GalleryImage12() {
  const imageUrl = galleryImg12; // Saudi city 3D map with landmarks
  const title = "خريطة بنك التنمية";
  
  return (
    <div className="group relative" id="gallery-image-12">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100"
             style={{
               background: `linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2), rgba(30, 58, 95, 0.3))`,
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
             }}>
        </div>
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <ImageWithFallback src={imageUrl} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                <p className="text-slate-500 text-lg" dir="rtl">يرجى إدراج الصورة</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-2xl text-right leading-tight" style={{ fontWeight: 600 }} dir="rtl">{title}</h3>
          </div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
      </div>
      <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
           style={{ background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.2), transparent 70%)' }}>
      </div>
    </div>
  );
}

export function GallerySection() {
  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % 2); // Only 2 sets now
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + 2) % 2); // Only 2 sets now
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* شبكة خفيفة */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              background: `
                linear-gradient(90deg, #1e3a5f 1px, transparent 1px),
                linear-gradient(#1e3a5f 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        
        {/* دوائر زخرفية */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-emerald-50/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          
          {/* عنوان القسم */}
          <div className="text-center mb-20" dir="rtl">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-10 py-6 rounded-full border-2 border-slate-200/50 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
              <Sparkles className="text-emerald-600 animate-pulse" size={32} />
              <span className="text-2xl" style={{ color: '#1e3a5f', fontWeight: 600 }}>
                معرض صور الهاكاثون
              </span>
              <Sparkles className="text-blue-600 animate-pulse" size={32} />
            </div>
            
            <h2 className="text-6xl lg:text-7xl mb-6" style={{ color: '#1e3a5f', fontWeight: 700 }}>
              لحظات من الإبداع
            </h2>
            <p className="text-3xl text-[rgba(0,96,69,1)] max-w-3xl mx-auto">
              استكشف أجواء الهاكاثون ولحظات الابتكار والتعاون
            </p>
          </div>

          {/* Gallery Container with Navigation */}
          <div className="relative">
            
            {/* زر السهم الأيسر - تصميم عصري */}
            <button 
              onClick={prevSet}
              className="absolute -left-4 lg:-left-24 top-1/2 transform -translate-y-1/2 z-30 group transition-all duration-500 hover:scale-105"
              aria-label="Previous images"
            >
              <div className="relative">
                {/* الدائرة الخارجية المتوهجة */}
                <div 
                  className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(34, 197, 94, 0.3))',
                  }}
                ></div>
                
                {/* الدائرة الرئيسية */}
                <div 
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'rgba(30, 58, 95, 0.95)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* خط عمودي زخرفي */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* أيقونة السهم */}
                  <div className="relative z-10 flex items-center justify-center">
                    <ChevronLeft 
                      className="text-white transition-all duration-500 group-hover:translate-x-[-4px]" 
                      size={40} 
                      strokeWidth={2.5}
                    />
                  </div>
                  
                  {/* تأثير الإضاءة الداخلية */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15), transparent 70%)',
                    }}
                  ></div>
                  
                  {/* حواف لامعة */}
                  <div 
                    className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-400/30 transition-all duration-500"
                  ></div>
                </div>
                
                {/* دائرة خارجية متحركة */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-emerald-400/0 group-hover:border-emerald-400/40 transition-all duration-500 group-hover:scale-110"
                  style={{ borderStyle: 'dashed' }}
                ></div>
              </div>
            </button>
            
            {/* زر السهم الأيمن - تصميم عصري */}
            <button 
              onClick={nextSet}
              className="absolute -right-4 lg:-right-24 top-1/2 transform -translate-y-1/2 z-30 group transition-all duration-500 hover:scale-105"
              aria-label="Next images"
            >
              <div className="relative">
                {/* الدائرة الخارجية المتوهجة */}
                <div 
                  className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(34, 197, 94, 0.3))',
                  }}
                ></div>
                
                {/* الدائرة الرئيسية */}
                <div 
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'rgba(30, 58, 95, 0.95)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* خط عمودي زخرفي */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* أيقونة السهم */}
                  <div className="relative z-10 flex items-center justify-center">
                    <ChevronRight 
                      className="text-white transition-all duration-500 group-hover:translate-x-[4px]" 
                      size={40} 
                      strokeWidth={2.5}
                    />
                  </div>
                  
                  {/* تأثير الإضاءة الداخلية */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15), transparent 70%)',
                    }}
                  ></div>
                  
                  {/* حواف لامعة */}
                  <div 
                    className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-400/30 transition-all duration-500"
                  ></div>
                </div>
                
                {/* دائرة خارجية متحركة */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-emerald-400/0 group-hover:border-emerald-400/40 transition-all duration-500 group-hover:scale-110"
                  style={{ borderStyle: 'dashed' }}
                ></div>
              </div>
            </button>

            {/* Grid الصور - مكونات منفصلة مع التنقل */}
            <div className="px-4 lg:px-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentSet === 0 ? (
                  // المجموعة الأولى (1-6)
                  <>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0s both` }}>
                      <GalleryImage1 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.1s both` }}>
                      <GalleryImage2 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.2s both` }}>
                      <GalleryImage3 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.3s both` }}>
                      <GalleryImage4 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.4s both` }}>
                      <GalleryImage5 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.5s both` }}>
                      <GalleryImage6 />
                    </div>
                  </>
                ) : (
                  // المجموعة الثانية (7-12)
                  <>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0s both` }}>
                      <GalleryImage7 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.1s both` }}>
                      <GalleryImage8 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.2s both` }}>
                      <GalleryImage9 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.3s both` }}>
                      <GalleryImage10 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.4s both` }}>
                      <GalleryImage11 />
                    </div>
                    <div style={{ animation: `galleryFadeIn 0.6s ease-out 0.5s both` }}>
                      <GalleryImage12 />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* مؤشرات التنقل */}
            <div className="flex justify-center gap-3 mt-16">
              <button
                onClick={() => setCurrentSet(0)}
                className={`transition-all duration-300 rounded-full ${
                  currentSet === 0
                    ? 'w-16 h-4 bg-emerald-600'
                    : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Go to set 1"
              />
              <button
                onClick={() => setCurrentSet(1)}
                className={`transition-all duration-300 rounded-full ${
                  currentSet === 1
                    ? 'w-16 h-4 bg-emerald-600'
                    : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label="Go to set 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes galleryFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}