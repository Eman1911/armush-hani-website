import { Button } from '../ui/button';
import { Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/home page photo.jpeg"
          alt="ערמוש האני - פרויקטים"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white" dir="rtl">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-6">
            <span style={{ color: '#FF8C00' }}>ערמוש האני</span>
            <br />
            שירותים והתקנות בע״מ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            פתרונות חשמל מקצועיים ומתקדמים לכל סוגי הפרויקטים
          </p>
          <p className="text-lg mb-12 text-gray-400">
            מסורת של מקצועיות, אמינות ומצוינות מאז 1973. מתמחים באספקה והתקנה של ציוד מתח ביניים, גבוה ועליון, שנאים, מערכות הספק ותחנות משנה.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#FF8C00' }}
              onClick={() => onNavigate('contact')}
            >
              <Phone className="mr-2" />
              צור קשר
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:text-white transition-colors"
              style={{
                borderColor: '#FF8C00',
                color: '#FF8C00'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF8C00';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FF8C00';
              }}
              onClick={() => onNavigate('projects')}
            >
              הפרויקטים שלנו
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#FF8C00' }}>
          <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: '#FF8C00' }} />
        </div>
      </div>
    </section>
  );
}
