import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const imgs = new Array(8).fill(0).map((_, i) => `https://picsum.photos/seed/${i + 1}/600/400`);
    return (
        <div className="bg-black text-white" dir="rtl">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-4xl mb-6" style={{ color: 'var(--brand-orange)' }}>גלריה</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imgs.map(src => (
                        <img key={src} src={src} className="w-full h-64 object-cover rounded border border-gray-800" />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}


