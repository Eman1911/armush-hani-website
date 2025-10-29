import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import About from '@/components/sections/About';
import Vision from '@/components/sections/Vision';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <div className="bg-black text-white" dir="rtl">
            <Navigation />
            <div className="pt-20">
                <PageHeader
                    title="אודות החברה"
                    breadcrumbs={[
                        { label: 'בית', href: '/' },
                        { label: 'אודות', href: '/about' }
                    ]}
                />
                <About />
                <Vision />
            </div>
            <Footer />
        </div>
    );
}


