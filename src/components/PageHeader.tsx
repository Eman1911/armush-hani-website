import { ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="bg-gray-50 py-12" dir="rtl" lang="he">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 text-sm">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span
                                    className="text-gray-600"
                                    style={{
                                        color: index === breadcrumbs.length - 1 ? '#FF8C00' : '#6b7280'
                                    }}
                                >
                                    {crumb.label}
                                </span>
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <h1 className="text-4xl md:text-5xl text-black">{title}</h1>
            </div>
        </div>
    );
}
