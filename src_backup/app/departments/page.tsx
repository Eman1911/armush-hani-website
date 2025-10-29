import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Departments from '@/components/sections/Departments';
import Footer from '@/components/Footer';

export default function DepartmentsPage() {
    return (
        <div className="bg-black text-white" dir="rtl">
            <Navigation />
            <div className="pt-20">
                <PageHeader
                    title="המחלקות שלנו"
                    breadcrumbs={[
                        { label: 'בית', href: '/' },
                        { label: 'מחלקות', href: '/departments' }
                    ]}
                />
                <Departments />
            </div>
            <Footer />
        </div>
    );
}


