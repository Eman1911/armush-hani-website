import PageHeader from '../components/PageHeader';
import { About } from '../components/sections/About';
import { Vision } from '../components/sections/Vision';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ }: AboutPageProps) {
  return (
    <div className="pt-20">
      <PageHeader
        title="אודות החברה"
        breadcrumbs={[
          { label: 'בית', href: 'home' },
          { label: 'אודות', href: 'about' }
        ]}
      />
      <About />
      <Vision />
    </div>
  );
}
