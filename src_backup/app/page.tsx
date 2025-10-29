import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Vision from '@/components/sections/Vision';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-black text-white" dir="rtl">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Vision />

                {/* Quick Links Section */}
                <section className="py-20 bg-white" dir="rtl" lang="he">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-black mb-4">השירותים שלנו</h2>
                            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }} />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link
                                href="/departments"
                                className="bg-gray-50 hover:shadow-xl transition-shadow rounded-xl p-8 text-right block"
                            >
                                <h3 className="text-2xl text-black mb-4">המחלקות שלנו</h3>
                                <p className="text-gray-600">גלו את המחלקות המקצועיות שלנו ואת השירותים שאנו מציעים</p>
                            </Link>

                            <Link
                                href="/gallery"
                                className="bg-gray-50 hover:shadow-xl transition-shadow rounded-xl p-8 text-right block"
                            >
                                <h3 className="text-2xl text-black mb-4">גלריה</h3>
                                <p className="text-gray-600">צפו בתמונות מהפרויקטים שלנו</p>
                            </Link>

                            <Link
                                href="/contact"
                                className="bg-gray-50 hover:shadow-xl transition-shadow rounded-xl p-8 text-right block"
                            >
                                <h3 className="text-2xl text-black mb-4">צור קשר</h3>
                                <p className="text-gray-600">נשמח לענות על שאלות ולתת הצעת מחיר</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}