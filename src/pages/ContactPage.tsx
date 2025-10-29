import PageHeader from '../components/PageHeader';
import { Contact } from '../components/sections/Contact';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ }: ContactPageProps) {
  return (
    <div className="pt-20">
      <PageHeader
        title="צור קשר"
        breadcrumbs={[
          { label: 'בית', href: 'home' },
          { label: 'צור קשר', href: 'contact' }
        ]}
      />
      <Contact />
    </div>
  );
}
