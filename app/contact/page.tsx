'use client';

import { Heart, ArrowLeft, MapPin, Phone, Mail, Instagram, Menu } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
              <Link href="/gallery" className="text-sm font-medium text-muted-foreground hover:text-primary">ಗ್ಯಾಲರಿ</Link>
              <Link href="/contact" className="text-sm font-medium text-primary">ಸಂಪರ್ಕ</Link>
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
          <h1 className="text-5xl font-bold text-primary mb-6">ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಸಲಹೆಗಳಿಗಾಗಿ ನಾವು ಇಲ್ಲಿದ್ದೇವೆ
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">ಸಂಪರ್ಕ ವಿವರಗಳು</h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">ವಿಳಾಸ</p>
                    <p className="text-muted-foreground">
                      ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ<br />
                      ಹಳೆಯ ಬಸ್ಸ್ಟ್ಯಾಂಡ್ ಹಿಂದೆ<br />
                      ಬೊಮಾರದ್ದಿ ವೃತ್ತ ಬಳಿ<br />
                      ಗದಗ, ಕರ್ನಾಟಕ
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">ಫೋನ್</p>
                    <p className="text-muted-foreground">
                      <a href="tel:9902652860" className="hover:text-primary">9902652860</a><br />
                      <a href="tel:9480555766" className="hover:text-primary">9480555766</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">ಇಮೇಲ್</p>
                    <p className="text-muted-foreground">
                      <a href="mailto:bgannigeri@gmail.com" className="hover:text-primary">bgannigeri@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <Instagram className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ</p>
                    <p className="text-muted-foreground">@B.G.ANNIGERI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">ಸಂದೇಶ ಕಳುಹಿಸಿ</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ನಿಮ್ಮ ಹೆಸರು</label>
                  <input
                    type="text"
                    placeholder="ಹೆಸರು ನಮೂದಿಸಿ"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ಇಮೇಲ್</label>
                  <input
                    type="email"
                    placeholder="ಇಮೇಲ್ ನಮೂದಿಸಿ"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ಫೋನ್ ಸಂಖ್ಯೆ</label>
                  <input
                    type="tel"
                    placeholder="ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ನಿಮ್ಮ ಸಂದೇಶ</label>
                  <textarea
                    placeholder="ಸಂದೇಶ ಬರೆಯಿರಿ"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
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
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/80">&copy; 2025 ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</p>
        </div>
      </footer>
    </div>
  );
}
