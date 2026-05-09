'use client';

import { useState } from 'react';
import { Menu, X, Heart, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <Link href="/about" className="text-sm font-medium text-primary">ನಮ್ಮ ಬಗ್ಗೆ</Link>
              <Link href="/awards" className="text-sm font-medium text-muted-foreground hover:text-primary">ಪುರಸ್ಕಾರಗಳು</Link>
              <Link href="/gallery" className="text-sm font-medium text-muted-foreground hover:text-primary">ಗ್ಯಾಲರಿ</Link>
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
          <h1 className="text-5xl font-bold text-primary mb-6">ನಮ್ಮ ಬಗ್ಗೆ</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ - ಶಿಕ್ಷಣದ ಮೂಲಕ ಜೀವನ ಬದಲಾವಣೆ
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-29 at 5.22.08 PM (2).jpeg"
                alt="ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳು"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">ಸಂಸ್ಥಾಪಕರು</h2>
              <h3 className="text-2xl font-semibold text-foreground mb-4">ಶ್ರೀ ಬಸವಂತಪ್ಪ ಗುರುಪ್ಪ ಅಣ್ಣಿಗೇರಿ</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ಶ್ರೀ ಬಸವಂತಪ್ಪ ಗುರುಪ್ಪ ಅಣ್ಣಿಗೇರಿ ಇವರು 1954 ರಲ್ಲಿ ಗದಗದ ಮಾಡೇಲ್ ಹೈಸ್ಕೂಲ್ (ಶ್ರೀ ಬಿ. ಎಸ್. ಪಾಟೀಲ್ ಬಾಲಕರ ಪ್ರೌಢಶಾಲೆ) ನಲ್ಲಿ ಸಹಾಯಕ ಶಿಕ್ಷಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಾ ವಾರದ ಸಂಕಲ್ಪ ಕೊದಲ್ಲಿ ಮೂರು ಜನ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ವಸತಿ ಮಾಡಿದರು.
                </p>
                <p>
                  ಹಳೆಯ ಮಕ್ಕಳ ಸಲುವಾಗಿ ಸೇವೆ ಮಾಡುವುದಕ್ಕಾಗಿ ಬ್ರಹ್ಮಚಾರಿಗಳಾಗಿ ಮಕ್ಕಳಿಗೆ ಕೋಲಿನಲ್ಲಿ ಪಾಠ ಪ್ರವಚನ ಹೇಳುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿದರು. ಹೀಗೆ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚುತ್ತಾ ಬಂದಿತು.
                </p>
                <p>
                  1963 ರಲ್ಲಿ ಕುಮಾರ ವಲೇಕಾದರ್ದ ಬೇತೂರ ಅವರು ಕರ್ನಾಟಕ ರಾಜ್ಯಕ್ಕೆ ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ. ಪರೀಕ್ಷೆಯಲ್ಲಿ ರ್ಯಾಂಕ್ ಪಡೆದರು. ಇದರಿಂದ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಕೋತಿಯ ಮನೆ ಪಾಠ ಪ್ರಸಿದ್ಧಿ ಪಡೆಯಿತು.
                </p>
                <p className="font-semibold text-foreground">
                  2019 ರಲ್ಲಿ ತಮ್ಮ 89 ನೇ ವಯಸ್ಸಿನಲ್ಲಿ ಸೆಪ್ಟೆಂಬರ್ 5 ರಂದು ಲಿಂಗೈಕ್ಯರಾದರು.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ಪ್ರತಿಷ್ಠಾನದ ಕಥೆ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/trust/WhatsApp Image 2026-04-30 at 4.19.45 PM.jpeg"
                alt="ಪ್ರತಿಷ್ಠಾನದ ಚಟುವಟಿಕೆಗಳು"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ಗುರುಗಳು ತಮ್ಮ ಅನೇಕ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ವೈಯಕ್ತಿಕ ವೇತನವನ್ನು ವಯ ಮಾಡಿದ್ದರು. ಯಾವುದೇ ಜಾತಿ-ಮತ-ಭೇದವಿಲ್ಲದೇ ಎಲ್ಲರನ್ನೂ ಸಮಾನವಾಗಿ ಪರಿಗಣಿಸಿ ಅವರಿಗೆ ಬೇಕಾದ ಸಹಾಯ-ಸಹಕಾರವನ್ನು ಮಾಡಿದರು.
              </p>
              <p>
                ಗುರುಗಳ ನಿಸ್ವಾರ್ಥ ಸೇವೆ, ತ್ಯಾಗ ಮತ್ತು ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉತ್ತಮ ಪಾಠ ಪ್ರವಚನ ಹೇಳುವುದರಿಂದ ಅನೇಕ ವಿದ್ಯಾರ್ಥಿಗಳು ಕರ್ನಾಟಕ ರಾಜ್ಯಕ್ಕೆ ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ. ಪರೀಕ್ಷೆಯಲ್ಲಿ ರ್ಯಾಂಕ್ ಪಡೆದರು.
              </p>
              <p>
                ಗುರುಗಳ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಇಂದು ವೈದ್ಯರು, ಇಂಜಿನಿಯರ್ಗಳು, ಶಿಕ್ಷಕರು, ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ.
              </p>
              <div className="bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
                <p className="font-semibold text-foreground text-lg italic">
                  "ಶರಣ ಜೀವನ ಮರಣದಲ್ಲಿ ಕಾತು" - ಗುರುಗಳ ಅಂತಿಮ ಸಂಸ್ಕಾರ ಅಭೂತಪೂರ್ವ ವೇರಗತಿಗೊಂದಿಗೆ ಗದಗ ನಗರಸಭೆಯವರು ನಿರ್ವಹಿಸಿದ ಉದ್ಯಾನವನದಲ್ಲಿ ಅಂತ್ಯಕ್ರಿಯೆ ನೆರವೇರಿತು.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ಪ್ರಸ್ತುತ ನಾಯಕತ್ವ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">ಶ್ರೀ ಶಿವಕುಮಾರ ಪಾಟೀಲ</h3>
              <p className="text-primary font-semibold">ಅಧ್ಯಕ್ಷರು, ಶ್ರೀ ಬಿ ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ಇಗ ಸಧ್ಯ ಅವರ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು ಶ್ರೀ ಶಿವಕುಮಾರ ಪಾಟೀಲ ಗದಗ ದಿ. 30-04-2026 ಅಧ್ಯಕ್ಷರು, ಶ್ರೀ ಬಿ. ಜಿ. ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ, ಗದಗ ಇವರ ಅಧ್ಯಕ್ಷತೆಯಲ್ಲಿ ಆಶ್ರಮದ ಕಾರ್ಯಗಳು ಚೆನ್ನಾಗಿ ನಡೆಯುತ್ತಿವೆ.
              </p>
              <p>
                ಇಂದಿಗೂ ಸಹ ಆಶ್ರಮದಲ್ಲಿ ಉತ್ತಮ ಪಾಠಗಳು ನಡೆಯುತ್ತಿವೆ. ಇಂದಿಗೂ ತರಗತಿಗಳು ನಿರಂತರವಾಗಿ ನಡೆಯುತ್ತಿವೆ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">ನಮ್ಮ ದೃಷ್ಟಿ</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                ಗದಗ ಜಿಲ್ಲೆಯ ಪ್ರತಿಯೊಬ್ಬ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗೆ ಗುರುತಿಸಿ, ಪ್ರೋತ್ಸಾಹಿಸಿ ಮತ್ತು ಅವರ ಕನಸುಗಳನ್ನು ಸಾಕಾರಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುವುದು.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">ನಮ್ಮ ಮಿಷನ್</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                ಸರ್ಕಾರಿ ಶಾಲೆಗಳ ಶ್ರೇಷ್ಠ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಾರ್ಷಿಕ ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರಗಳನ್ನು ನೀಡುವ ಮೂಲಕ ಶಿಕ್ಷಣದಲ್ಲಿ ಉತ್ಕೃಷ್ಟತೆಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">ನಮ್ಮ ಮೌಲ್ಯಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">🙏</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">ನಿಸ್ವಾರ್ಥ ಸೇವೆ</h4>
              <p className="text-sm text-muted-foreground">ಯಾವುದೇ ನಿರೀಕ್ಷೆಯಿಲ್ಲದೆ ಸಮಾಜಕ್ಕೆ ಸೇವೆ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">⚖️</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">ಸಮಾನತೆ</h4>
              <p className="text-sm text-muted-foreground">ಎಲ್ಲರಿಗೂ ಸಮಾನ ಅವಕಾಶ ಮತ್ತು ಗೌರವ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">📚</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">ಶಿಕ್ಷಣ</h4>
              <p className="text-sm text-muted-foreground">ಜ್ಞಾನವೇ ಶಕ್ತಿ, ಶಿಕ್ಷಣವೇ ಬದಲಾವಣೆ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">💪</span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">ಪ್ರೋತ್ಸಾಹ</h4>
              <p className="text-sm text-muted-foreground">ಪ್ರತಿಭೆಯನ್ನು ಗುರುತಿಸಿ ಪ್ರೋತ್ಸಾಹಿಸುವುದು</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl">ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</span>
          </div>
          <p className="text-white/80 text-sm mb-4">
            ಗದಗ, ಕರ್ನಾಟಕದಲ್ಲಿ ಪ್ರತಿಭೆ ಸ್ವೀಕೃತಿ ಮತ್ತು ಆಚರಣೆ.
          </p>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/80">&copy; 2025 ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಸಂರಕ್ಷಿತ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
