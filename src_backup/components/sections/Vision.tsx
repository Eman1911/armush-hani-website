import { Target, Eye, Heart } from 'lucide-react';

export default function Vision() {
    const visionItems = [
        {
            icon: Eye,
            title: 'החזון שלנו',
            description:
                'החזון של ערמוש האני שירותים והתקנות בע״מ הוא להמשיך ולבסס את מעמדה כחברה מובילה בתחום פתרונות החשמל בישראל, תוך שימור, הרחבה וגיוון קהל הלקוחות.',
        },
        {
            icon: Target,
            title: 'המטרה שלנו',
            description:
                'אנו שואפים להמשיך לפתח את מערך כוח האדם, המשאבים והיכולות הטכנולוגיות של החברה, כדי להבטיח מצוינות תפעולית, שירות איכותי וחדשנות מתמשכת.',
        },
        {
            icon: Heart,
            title: 'הערכים שלנו',
            description:
                'יושרה, איכות, זמינות ואמינות מהווים את אבני הדרך של פעילות החברה. אנו מתחייבים למצוינות בכל מה שאנו עושים.',
        },
    ];

    const colors = ['#FF8C00', '#000000', '#FF7700'];

    return (
        <section className="py-20 bg-gray-50" dir="rtl" lang="he">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-black mb-4">החזון והערכים שלנו</h2>
                    <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }} />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        אנו שואפים למצוינות בכל מה שאנו עושים, תוך התמקדות בצרכי הלקוח ובפיתוח מתמיד
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {visionItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
                            >
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                                    style={{ backgroundColor: colors[index] }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl text-black mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Vision Statement */}
                <div
                    className="mt-16 rounded-xl p-12 text-white text-center"
                    style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FF7700 100%)' }}
                >
                    <h3 className="text-3xl mb-4">המחויבות שלנו</h3>
                    <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                        אנו מתחייבים לספק שירות יוצא דופן בכל פרויקט, תוך שמירה על בטיחות מקסימלית,
                        עמידה בתקני איכות בינלאומיים ויצירת ערך מוסף ללקוחותינו. החזון שלנו הוא
                        לא רק להשלים פרויקטים, אלא ליצור שותפויות ארוכות טווח עם לקוחותינו.
                    </p>
                </div>
            </div>
        </section>
    );
}