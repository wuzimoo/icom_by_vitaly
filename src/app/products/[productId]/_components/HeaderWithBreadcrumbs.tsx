// components/HeaderWithBreadcrumbs.tsx
interface HeaderWithBreadcrumbsProps {
    title: string;
    breadcrumbs: string[];
}

const HeaderWithBreadcrumbs: React.FC<HeaderWithBreadcrumbsProps> = ({ title, breadcrumbs }) => {
    return (
        <div className="mb-4">
            <nav className="text-sm font-normal text-gray-500">
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={index}>
                        {breadcrumb} {index < breadcrumbs.length - 1 && ' / '}
                    </span>
                ))}
            </nav>
            <h1 className="text-5xl  mt-2">{title}</h1>
        </div>
    );
};

export default HeaderWithBreadcrumbs;
