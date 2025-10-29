import PageHeader from '../components/PageHeader';
import { Gallery } from '../components/sections/Gallery';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ }: GalleryPageProps) {
  return (
    <div className="pt-20">
      <PageHeader
        title="גלריית תמונות"
        breadcrumbs={[
          { label: 'בית', href: 'home' },
          { label: 'גלריה', href: 'gallery' }
        ]}
      />
      <Gallery />
    </div>
  );
}
