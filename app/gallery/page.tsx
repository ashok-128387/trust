'use client';

import { Heart, ArrowLeft, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
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
              <ArrowLeft className="w-5 h-5 text-primary" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-primary">ಶ್ರೀ ಬಿ.ಜಿ</p>
                  <p className="text-xs text-muted-foreground">ಅಣ್ಣಿಗೇರಿ</p>
                </div>
              </div>
            </Link>
            <div className="hidden md:flex gap-4 lg:gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">ಮುಖಪುಟ</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">ನಮ್ಮ ಬಗ್ಗೆ</Link>
              <Link href="/awards" className="text-sm font-medium text-muted-foreground hover:text-primary">ಪುರಸ್ಕಾರಗಳು</Link>
              <Link href="/gallery" className="text-sm font-medium text-primary">ಗ್ಯಾಲರಿ</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">ಸಂಪರ್ಕ</Link>
            </div>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">ಫೋಟೋ ಗ್ಯಾಲರಿ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಸ್ಮರಣೀಯ ಕ್ಷಣಗಳು
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/80">&copy; 2025 ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</p>
        </div>
      </footer>
    </div>
  );
}
