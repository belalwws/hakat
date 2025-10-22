import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { RegistrationForm } from './RegistrationForm';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hackathonLogo from 'figma:asset/6e1265e8e1bd562b2931a18ba35d510d535d3233.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-3d-sm">
      <div className="container mx-auto px-4 py-4 perspective-1000">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden bg-white border border-gray-100 relative group transition-all duration-300 hover:shadow-lg">
              {/* Clean background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              
              {/* Logo - fills most of the container */}
              <ImageWithFallback 
                src={hackathonLogo}
                alt="شعار هاكاثون الابتكار الحكومي"
                className="w-11 h-11 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
            
            <div>
              <h1 className="text-lg text-gray-900">هاكاثون الابتكار الحكومي</h1>
              <p className="text-sm text-gray-600">المملكة العربية السعودية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              عن الهاكاثون
            </a>
            <a href="#paths" className="text-gray-700 hover:text-green-600 transition-colors">
              المسارات
            </a>
            <a href="#objectives" className="text-gray-700 hover:text-green-600 transition-colors">
              الأهداف
            </a>
            <a href="#journey" className="text-gray-700 hover:text-green-600 transition-colors">
              الرحلة
            </a>
            <a href="#prizes" className="text-gray-700 hover:text-green-600 transition-colors">
              الجوائز
            </a>
            <Button 
              className="bg-emerald-800 hover:bg-emerald-900 text-white hover-lift-3d shadow-3d-sm"
              onClick={() => setIsFormOpen(true)}
            >
              سجل الآن
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-700 hover:text-green-600">
                عن الهاكاثون
              </a>
              <a href="#paths" className="text-gray-700 hover:text-green-600">
                المسارات
              </a>
              <a href="#objectives" className="text-gray-700 hover:text-green-600">
                الأهداف
              </a>
              <a href="#journey" className="text-gray-700 hover:text-green-600">
                الرحلة
              </a>
              <a href="#prizes" className="text-gray-700 hover:text-green-600">
                الجوائز
              </a>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() => {
                  setIsFormOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                سجل الآن
              </Button>
            </div>
          </nav>
        )}
      </div>

      {/* Registration Form */}
      <RegistrationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </header>
  );
}