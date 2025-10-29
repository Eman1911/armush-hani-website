import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className="bg-black text-white" dir="rtl">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl mb-6" style={{ color: 'var(--brand-orange)' }}>צור קשר</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <form className="space-y-4">
                        <input className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3" placeholder="שם" />
                        <input className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3" placeholder="אימייל" />
                        <textarea className="w-full bg-gray-900 border border-gray-800 rounded px-4 py-3 h-40" placeholder="הודעה" />
                        <button className="px-6 py-3 text-black" style={{ backgroundColor: 'var(--brand-orange)' }}>שליחה</button>
                    </form>
                    <div className="text-gray-300">
                        <p>טלפון: 04-6378963</p>
                        <p>כתובת: סלמאן אל-פארסי, טמרה, ישראל</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


