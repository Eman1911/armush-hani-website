import PageHeader from '../components/PageHeader';
import { Departments } from '../components/sections/Departments';

interface DepartmentsPageProps {
  onNavigate: (page: string) => void;
}

export function DepartmentsPage({ }: DepartmentsPageProps) {
  return (
    <div className="pt-20">
      <PageHeader
        title="המחלקות שלנו"
        breadcrumbs={[
          { label: 'בית', href: 'home' },
          { label: 'מחלקות', href: 'departments' }
        ]}
      />
      <Departments />
    </div>
  );
}
