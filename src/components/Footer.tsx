import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import logo from '/assets/50da0a6e085c4cb1e2e8c3927694c2e28575c494.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ערמוש האני - לוגו החברה" className="h-24 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              פתרונות חשמל מקצועיים ומתקדמים לכל סוגי הפרויקטים
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF8C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF8C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors hover:opacity-90"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF8C00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 pb-2" style={{ borderBottom: '1px solid #FF8C00' }}>קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 transition-colors hover:underline"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  אודות
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('departments')}
                  className="text-gray-400 transition-colors hover:underline"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  מחלקות
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-gray-400 transition-colors hover:underline"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  גלריה
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 transition-colors hover:underline"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 pb-2" style={{ borderBottom: '1px solid #FF8C00' }}>השירותים שלנו</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">ציוד מתח ביניים וגבוה</li>
              <li className="text-gray-400">שנאים ומערכות הספק</li>
              <li className="text-gray-400">תחנות משנה</li>
              <li className="text-gray-400">התקנה ותחזוקה</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 pb-2" style={{ borderBottom: '1px solid #FF8C00' }}>צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>סלמאן אל-פארסי, טמרה, ישראל</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:04-6378963"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  04-6378963
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ערמוש האני שירותים והתקנות בע״מ. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
