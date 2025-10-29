'use client';

import { Button } from '../ui/button';
import { Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29ya3xlbnwxfHx8fDE3NjExMTkwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Electrical Work"
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
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="text-white hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: '#FF8C00' }}
                            >
                                <Phone className="mr-2" />
                                צור קשר
                            </Button>
                        </Link>
                        <Link href="/gallery">
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
                            >
                                הפרויקטים שלנו
                            </Button>
                        </Link>
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