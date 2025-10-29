import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, label: 'שנות ניסיון', value: '50+' },
    { icon: Briefcase, label: 'פרויקטים שהושלמו', value: '1000+' },
    { icon: Users, label: 'לקוחות מרוצים', value: '500+' },
    { icon: TrendingUp, label: 'שיעור הצלחה', value: '100%' },
  ];

  return (
    <section className="py-20 bg-white" dir="rtl" lang="he">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">אודות החברה</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#FF8C00' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl mb-6 text-black">מי אנחנו?</h3>
            <p className="text-gray-700 mb-4">
              ערמוש האני שירותים והתקנות בע״מ ממשיכה מסורת של מקצועיות, אמינות ומצוינות שהחלה עוד בשנת 1973. מה שהחל כחברה משפחתית קטנה צמח במהלך השנים לחברה מובילה בתחום פתרונות החשמל בישראל, המתמחה באספקה והתקנה של ציוד מתח ביניים, גבוה ועליון, שנאים, מערכות הספק ותחנות משנה.
            </p>
            <p className="text-gray-700 mb-4">
              החברה מספקת פתרונות חשמל מותאמים אישית למגוון רחב של לקוחות ומגזרים – בהם קיבוצים, מפעלי תעשייה כבדה, אתרים סולאריים, תחנות כוח, מתקני שאיבה, מכוני טיהור ומוסדות ציבוריים.
            </p>
            <p className="text-gray-700">
              ערכים של יושרה, איכות, זמינות ואמינות מהווים את אבני הדרך של פעילות החברה. מתוך מחויבות למצוינות, ערמוש האני משקיעה בהון אנושי מקצועי ומנוסה, ובציוד מתקדם המאפשר לה לפעול בעצמאות מלאה ולהעניק מענה כולל – מהתכנון ועד ההפעלה.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="/assets/about photo.jpeg"
              alt="ערמוש האני - הצוות שלנו"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg -z-10" style={{ backgroundColor: '#FF8C00' }} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: '#FF8C00' }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl text-black mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
