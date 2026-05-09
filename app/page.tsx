'use client';

import { useState, useRef } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Heart, Calendar, Award, Users, School, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'ಮುಖಪುಟ', id: 'home' },
    { label: 'ನಮ್ಮ ಬಗ್ಗೆ', id: 'about' },
    { label: 'ಪುರಸ್ಕಾರಗಳು', id: 'awards' },
    { label: 'ಗ್ಯಾಲರಿ', id: 'gallery' },
    { label: 'ಸಂಪರ್ಕ', id: 'contact' },
  ];

  const galleryImages = [
    '/trust/WhatsApp Image 2026-04-29 at 5.22.08 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.22.08 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.22.08 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.22.09 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.22.09 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.22.10 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.48 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.49 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.49 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.49 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.50 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.50 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.50 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.24.51 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.28.05 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.28.05 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.28.06 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 5.28.06 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.01.09 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.01.10 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.01.10 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.01.10 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.02 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.02 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.03 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.03 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.05 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.06 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.07 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.07 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.07 PM (3).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.07 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.08 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.08 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.09 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.09 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.10 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.10 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.11 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.11 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.11 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.12 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.03.12 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.07.33 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.07.33 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.07.33 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.07.34 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.16.58 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.16.58 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.16.59 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.16.59 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.17.00 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.17.00 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-29 at 7.17.01 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 2.15.05 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 2.42.07 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.32.23 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.38.32 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.45.11 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.45.11 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.48.21 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 3.59.29 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.08.33 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.11.00 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.19.45 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.46 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.46 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.47 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.47 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.48 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.20.49 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.22.44 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.22.44 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.22.44 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.22.45 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.24.40 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.24.42 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.24.45 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.24.48 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.24.54 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.06 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.11 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.11 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.14 PM (1).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.14 PM (2).jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.14 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.25.15 PM.jpeg',
    '/trust/WhatsApp Image 2026-04-30 at 4.26.11 PM.jpeg',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-primary">ಶ್ರೀ ಬಿ.ಜಿ</p>
                <p className="text-xs text-muted-foreground">ಅಣ್ಣಿಗೇರಿ</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-sm font-medium text-primary">ಮುಖಪುಟ</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">ನಮ್ಮ ಬಗ್ಗೆ</Link>
              <Link href="/awards" className="text-sm font-medium text-muted-foreground hover:text-primary">ಪುರಸ್ಕಾರಗಳು</Link>
              <Link href="/gallery" className="text-sm font-medium text-muted-foreground hover:text-primary">ಗ್ಯಾಲರಿ</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">ಸಂಪರ್ಕ</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-secondary/50">ಮುಖಪುಟ</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50">ನಮ್ಮ ಬಗ್ಗೆ</Link>
              <Link href="/awards" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50">ಪುರಸ್ಕಾರಗಳು</Link>
              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50">ಗ್ಯಾಲರಿ</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50">ಸಂಪರ್ಕ</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Summer Classes Announcement */}
      <div className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-4">
              <Calendar className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">ಬೇಸಿಗೆ ತರಗತಿಗಳು ಪ್ರಾರಂಭ!</h3>
                <p className="text-lg">ಏಪ್ರಿಲ್ 1 ರಿಂದ ಬೆಳಗ್ಗೆ 7:00 - 10:00 | 8ನೇ, 9ನೇ ಮತ್ತು 10ನೇ ತರಗತಿ</p>
                <p className="text-sm mt-2 opacity-90">ಎಲ್ಲಾ ಸದಸ್ಯರು ಶಿಕ್ಷಕರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸ್ವಾಗತಿಸಲು ಬೆಳಗ್ಗೆ 7 ಗಂಟೆಗೆ ಆಗಮಿಸಿ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="pt-20 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
                ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                ಗದಗ ಜಿಲ್ಲೆಯ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಗುರುತಿಸಿ ಸನ್ಮಾನಿಸುವ ಪ್ರತಿಷ್ಠಾನ. ನಾವು ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ ಮತ್ತು ಅಧ್ಯಯನವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ.
              </p>
              <button
                onClick={() => scrollToSection('awards')}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                ಪುರಸ್ಕಾರಗಳನ್ನು ನೋಡಿ
              </button>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-29 at 5.22.10 PM.jpeg"
                alt="ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಬಗ್ಗೆ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <p className="text-muted-foreground leading-relaxed mb-4">
              ಶ್ರೀ ಬಸವಂತಪ್ಪ ಗುರುಪ್ಪ ಅಣ್ಣಿಗೇರಿ ಇವರು 1954 ರಲ್ಲಿ ಗದಗದ ಮಾಡೇಲ್ ಹೈಸ್ಕೂಲ್ (ಶ್ರೀ ಬಿ. ಎಸ್. ಪಾಟೀಲ ಬಾಲಕರ (ಪ್ರೌಢಶಾಲೆ)) ನಲ್ಲಿ ಸಹ ಶಿಕ್ಷಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಾ ವಾರದ ಸಂಕಲ್ಪ ರೂಮಿನಲ್ಲಿ ಮೂರು ಜನ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ವಾಸವ ಹೊರಡಿದರು.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ಹಳೆಯ ಮಕ್ಕಳ ಸಲುವಾಗಿ ಸೇವೆ ವಾಡುವುದಕ್ಕೋಸ್ಕರ ಬ್ರಹ್ಮಚಾರಿಗಳಾಗಿ ಮಕ್ಕಳಿಗೆ ಕೋಲಿನಲ್ಲಿ ಪಾಠ ಪ್ರವಚನ ಹೇಳುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಹೀಗೆ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚುತ್ತಾ ಬಂದಿತು. 1963 ರಲ್ಲಿ ಕುವಾರ ವಲೇಕಾದರ್ದ ಬೇತೂರ ಅವರು ಕರ್ನಾಟಕ ರಾಜ್ಯಕ್ಕೆ ಎಸ್.ಎಸ್.ಬಿ. ಪರೀಕ್ಷೆಯಲ್ಲಿ ರಾಂಕ್ ಪಡೆದರು.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ಗುರುಗಳು ತಮ್ಮ ಅನೇಕ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ವೈಯಕ್ತಿಕ ವೇತನವನ್ನು ವೈಯ ವಾಡಿತ್ತಿದ್ದರು. ಯಾವುದೇ ಜಾತಿ-ಮತ-ಭೇದವಿಲ್ಲದೇ ಎಲ್ಲರನ್ನೂ ಸಮಾನವಾಗಿ ಪರಿಗಣಿಸಿದರು ಮತ್ತು ಅವರಿಗೆ ಬೇಕಾದ ಸಹಾಯ-ಸಹಕಾರವನ್ನು ವಾಡಿದರು. 2019 ರಲ್ಲಿ ತಮ್ಮ 89 ನೇ ವಯಸ್ಸಿನಲ್ಲಿ ಸೆಪ್ಟೆಂಬರ್ 5 ರಂದು ಲಿಂಗೈಕ್ಯರಾದರು.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">ನಮ್ಮ ಮಿಷನ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ಗುರುತಿಸುವುದು</h3>
              <p className="text-muted-foreground">
                ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆಗಳಲ್ಲಿ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಗುರುತಿಸಿ ಅವರ ಅಧ್ಯಯನವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ಪುರಸ್ಕಾರ</h3>
              <p className="text-muted-foreground">
                ಪ್ರತಿ ಶೈಕ್ಷಣಿಕ ವರ್ಷದಲ್ಲಿ ಶ್ರೇಷ್ಠ ಸಾಧನೆ ಮಾಡಿದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನಗದು ಪುರಸ್ಕಾರ, ಕಾಲೇಜ್ ಬ್ಯಾಗ್ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರ ನೀಡುವುದು.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ಪ್ರೇರಣೆ</h3>
              <p className="text-muted-foreground">
                ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಅಧ್ಯಯನ, ಕ್ರೀಡೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಪ್ರೇರಿತ ಮಾಡುವುದು.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Award Winners Section */}
      <section
        ref={sectionRefs.awards}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ಮಾರುಕಾಮೆ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                date: 'ಜುಲೈ 3, 2025',
                day: 'ಗುರುವಾರ',
                school: 'ಅಂತೂರು ಬೆಂತೂರ್ ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ಹಾಗೂ ಹುಲಕೋಟೆಯ ಸರ್ಕಾರಿ ಬಾಲಕಿಯರ ಪ್ರೌಢ ಶಾಲೆ',
                winners: 5,
                guests: 'ಶ್ರೀ ಮುಕುಂದ ಪೋತ್ನಿಸ್ (ತೆರಿಗೆ ಸಲಹೆಗಾರ)'
              },
              {
                date: 'ಜುಲೈ 4, 2025',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ಸೊರಟೂರ್, ಎಲಿಸೂರು ಮತ್ತು ಶಿರೂಂಜ ಪ್ರೌಢಶಾಲೆ',
                winners: 15,
                guests: 'ಟ್ರಸ್ಟಿ ಪದಾಧಿಕಾರಿಗಳು'
              },
              {
                date: 'ಜುಲೈ 4, 2025',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ನಾಗಾವಿ',
                winners: 5,
                guests: 'ಡಾ. ಧನುಷ್ ದೇಸಾಯಿ (ಸ್ಪರ್ಶ ಹಾಸ್ಪಿಟಲ್)'
              },
              {
                date: 'ಜುಲೈ 4, 2025',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ಅಡವಿ ಸೋಂಪುರ್',
                winners: 5,
                guests: 'ಡಾಕ್ಟರ್ ಅರವಿಂದ್ ಕೆ'
              },
              {
                date: 'ಜುಲೈ 4, 2025',
                school: 'ಸರ್ಕಾರಿ ರಾಣಿ ಚೆನ್ನಮ್ಮ ಹೆಣ್ಣು ಮಕ್ಕಳ ಪ್ರೌಢಶಾಲೆ ಲಕ್ಕುಂಡಿ',
                winners: 5,
                guests: 'ಟ್ರಸ್ಟಿ ಪದಾಧಿಕಾರಿಗಳು'
              },
              {
                date: 'ಜುಲೈ 4, 2025',
                school: 'ಸರ್ಕಾರಿ ಬಾಲಕಿಯರ ಪ್ರೌಢಶಾಲೆ ಲಕ್ಕುಂಡಿ',
                winners: 5,
                guests: 'ಡಾ. ಜಿ ಬಿ ಬೇಡ್ನಾಳ್ ದಂಪತಿಗಳು'
              },
              {
                date: 'ಮೇ 9, 2025',
                day: 'ಬುಧವಾರ',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ರಾಜೀವ್ ಗಾಂಧಿನಗರ ಗದಗ',
                winners: 5,
                guests: 'ಡಾ. ಜಗದೀಶ್ ಶಿರೋಳ್ ಮತ್ತು ಶ್ರೀ ರವಿ ಶೆಟ್ಟಪ್ಪನವರ್'
              },
              {
                date: 'ಮೇ 9, 2025',
                day: 'ಬುಧವಾರ',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ಎಸ್.ಎಂ ಕೃಷ್ಣ ನಗರ, ಗದಗ',
                winners: 5,
                guests: 'ಡಾ. ಪವಾಡ ಶೆಟ್ಟರ್'
              },
              {
                date: 'ಮೇ 9, 2025',
                day: 'ಬುಧವಾರ',
                school: 'ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆ ಗಾಂಧಿನಗರ್, ಗದಗ',
                winners: 3,
                guests: 'ಟ್ರಸ್ಟಿ ಪದಾಧಿಕಾರಿಗಳು'
              },
              {
                date: 'ಆಗಸ್ಟ್ 11, 2024',
                day: 'ರವಿವಾರ',
                school: 'ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ ಆಶ್ರಮ - SSLC ಪರೀಕ್ಷೆ',
                winners: 15,
                guests: 'ಶ್ರೀ ಬ್ಯಾರಿ ಮತ್ತು ಸಾಯಿ ಕುಮಾರ್ ಸರ್'
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">{event.date} {event.day && `(${event.day})`}</p>
                    <h3 className="text-lg font-bold text-foreground mt-2">{event.school}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent">{event.winners}</div>
                    <p className="text-xs text-muted-foreground">ವಿದ್ಯಾರ್ಥಿಗಳು</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">ಮುಖ್ಯ ಅತಿಥಿಗಳು:</span> {event.guests}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section
        ref={sectionRefs.gallery}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಗ್ಯಾಲರಿ</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            ವಿವಿಧ ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆಗಳಲ್ಲಿ ನಡೆದ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ವಿತರಣೆ ಕಾರ್ಯಕ್ರಮಗಳ ಸ್ಮರಣೀಯ ಕ್ಷಣಗಳು
          </p>

          {/* Event Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳು</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">ಶಾಲೆಗಳು</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">ಕಾರ್ಯಕ್ರಮಗಳು</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Award Ceremony */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ವಿತರಣೆ</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ಪ್ರತಿ ವರ್ಷ ನಾವು ಗದಗ ಜಿಲ್ಲೆಯ ವಿವಿಧ ಸರ್ಕಾರಿ ಪ್ರೌಢಶಾಲೆಗಳಲ್ಲಿ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ವಿತರಣೆ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸುತ್ತೇವೆ. ಈ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಶೈಕ್ಷಣಿಕವಾಗಿ ಅತ್ಯುತ್ತಮ ಸಾಧನೆ ಮಾಡಿದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನಗದು ಪುರಸ್ಕಾರ, ಕಾಲೇಜ್ ಬ್ಯಾಗ್ ಮತ್ತು ಪ್ರಶಸ್ತಿ ಪತ್ರಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ಪ್ರಖ್ಯಾತ ವೈದ್ಯರು, ಶಿಕ್ಷಣಾಧಿಕಾರಿಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವಕರು ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಭಾಗವಹಿಸಿ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತಾರೆ.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-29 at 5.22.08 PM (1).jpeg"
                alt="ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ವಿತರಣೆ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Student Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/trust/WhatsApp Image 2026-04-29 at 5.24.49 PM.jpeg"
                alt="ವಿದ್ಯಾರ್ಥಿ ಸನ್ಮಾನ"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-primary mb-6">ವಿದ್ಯಾರ್ಥಿಗಳ ಸನ್ಮಾನ</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ವೇದಿಕೆಯ ಮೇಲೆ ಕರೆದು ಅವರ ಸಾಧನೆಗಳನ್ನು ಗೌರವಿಸಲಾಗುತ್ತದೆ. ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ವೈಯಕ್ತಿಕವಾಗಿ ಪ್ರಶಸ್ತಿ ನೀಡಿ ಅವರ ಪ್ರಯತ್ನವನ್ನು ಮೆಚ್ಚುಗೆ ಮಾಡಲಾಗುತ್ತದೆ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ಈ ಸನ್ಮಾನವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮುಂದಿನ ಶೈಕ್ಷಣಿಕ ಜೀವನದಲ್ಲಿ ಇನ್ನಷ್ಟು ಉತ್ತಮವಾಗಿ ಸಾಧನೆ ಮಾಡಲು ಪ್ರೇರಣೆ ನೀಡುತ್ತದೆ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Chief Guests */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">ಗಣ್ಯ ಅತಿಥಿಗಳ ಭಾಗವಹಿಸುವಿಕೆ</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಗದಗ ನಗರದ ಪ್ರಖ್ಯಾತ ವೈದ್ಯರು, ಶಿಕ್ಷಣಾಧಿಕಾರಿಗಳು, ತೆರಿಗೆ ಸಲಹೆಗಾರರು ಮತ್ತು ಸಮಾಜ ಸೇವಕರು ಮುಖ್ಯ ಅತಿಥಿಗಳಾಗಿ ಭಾಗವಹಿಸುತ್ತಾರೆ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ಅವರು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜೀವನ ಮತ್ತು ವೃತ್ತಿ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ ಮತ್ತು ಅವರ ಅನುಭವಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-29 at 7.03.07 PM (1).jpeg"
                alt="ಗಣ್ಯ ಅತಿಥಿಗಳು"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: School Visits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/trust/WhatsApp Image 2026-04-30 at 4.20.47 PM.jpeg"
                alt="ಶಾಲಾ ಭೇಟಿಗಳು"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-primary mb-6">ಶಾಲಾ ಭೇಟಿಗಳು</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ನಾವು ಗದಗ ಜಿಲ್ಲೆಯ ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಪ್ರದೇಶಗಳ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಿಗೆ ಭೇಟಿ ನೀಡುತ್ತೇವೆ. ಅಂತೂರು, ಹುಲಕೋಟೆ, ಸೊರಟೂರ್, ಎಲಿಸೂರು, ಶಿರೂಂಜ, ನಾಗಾವಿ, ಲಕ್ಕುಂಡಿ ಮುಂತಾದ ಸ್ಥಳಗಳಲ್ಲಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಿದ್ದೇವೆ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ಪ್ರತಿ ಶಾಲೆಯಲ್ಲಿ ಶಿಕ್ಷಕರು, ಪಾಲಕರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು ಉತ್ಸಾಹದಿಂದ ನಮ್ಮನ್ನು ಸ್ವಾಗತಿಸುತ್ತಾರೆ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Group Photos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">ಸಾಮೂಹಿಕ ಸ್ಮರಣೆಗಳು</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮದ ಕೊನೆಯಲ್ಲಿ ಎಲ್ಲಾ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳು, ಮುಖ್ಯ ಅತಿಥಿಗಳು, ಶಿಕ್ಷಕರು ಮತ್ತು ಟ್ರಸ್ಟಿನ ಸದಸ್ಯರು ಒಟ್ಟಿಗೆ ಸಾಮೂಹಿಕ ಛಾಯಾಚಿತ್ರ ತೆಗೆಸಿಕೊಳ್ಳುತ್ತಾರೆ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ಈ ಕ್ಷಣಗಳು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜೀವನಪರ್ಯಂತ ಸ್ಮರಣೀಯವಾಗಿ ಉಳಿಯುತ್ತವೆ ಮತ್ತು ಅವರ ಸಾಧನೆಯ ಸಾಕ್ಷಿಯಾಗಿ ನಿಲ್ಲುತ್ತವೆ.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-30 at 4.25.14 PM (1).jpeg"
                alt="ಸಾಮೂಹಿಕ ಛಾಯಾಚಿತ್ರ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳ ಛಾಯಾಚಿತ್ರಗಳು</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300">
                <Image
                  src={img}
                  alt={`ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರ ಕಾರ್ಯಕ್ರಮ ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ನಮ್ಮನ್ನು ಸಂಪರ್ಕ ಮಾಡಿ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">ಸಂಪರ್ಕ ವಿವರಣೆ</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">ವಿಳಾಸ</p>
                    <p className="text-muted-foreground">
                      ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ<br />
                      ಹಳೆಯ ಬಸ್ಸ್ಟ್ಯಾಂಡ್ ಬಳಿ<br />
                      ಬೊಮಾರದ್ದಿ ವೃತ್ತ ಬಳಿ<br />
                      ಗದಗ ಜಿಲ್ಲೆ
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">ಫೋನ್</p>
                    <p className="text-muted-foreground">
                      9902652860<br />
                      9480555766
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">ಇಮೇಲ್</p>
                    <p className="text-muted-foreground">bgannigeri@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Instagram className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ</p>
                    <p className="text-muted-foreground">@B.G.ANNIGERI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">ನಮ್ಮನ್ನು ಸಂದೇಶ ಕಳುಹಿಸಿ</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="ನಿಮ್ಮ ಹೆಸರು"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="ನಿಮ್ಮ ಇಮೇಲ್"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="ನಿಮ್ಮ ಸಂದೇಶ"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  ಕಳುಹಿಸಿ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="font-bold">ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</span>
              </div>
              <p className="text-white/80 text-sm">
                ಗದಗ, ಕರ್ನಾಟಕದಲ್ಲಿ ಪ್ರತಿಭೆ ಸ್ವೀಕೃತಿ ಮತ್ತು ಆಚರಣೆ.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition">ನೆರೆತನ</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">ನಮ್ಮ ಬಗ್ಗೆ</button></li>
                <li><button onClick={() => scrollToSection('awards')} className="hover:text-white transition">ಪುರಸ್ಕಾರ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">ಸಂಪರ್ಕ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2025 ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಸಂರಕ್ಷಿತ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
