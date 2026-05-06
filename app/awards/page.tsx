'use client';

import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AwardsPage() {
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
              <Link href="/awards" className="text-sm font-medium text-primary">ಪುರಸ್ಕಾರಗಳು</Link>
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
          <h1 className="text-5xl font-bold text-primary mb-6">ಪ್ರತಿಭಾ ಪುರಸ್ಕಾರಗಳು</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ಗದಗ ಜಿಲ್ಲೆಯ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಪ್ರತಿಭಾವಂತ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೀಡಿದ ಪುರಸ್ಕಾರಗಳ ವಿವರ
          </p>
        </div>
      </section>

      {/* Award Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 hover:shadow-xl transition-all"
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

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-white/80">&copy; 2025 ಶ್ರೀ ಬಿ.ಜಿ ಅಣ್ಣಿಗೇರಿ ಗುರುಗಳ ಪ್ರತಿಭಾ ಪ್ರತಿಷ್ಠಾನ</p>
        </div>
      </footer>
    </div>
  );
}
