function Breadcrumb({ children }) {
    return (
        <nav className="breadcrumbs text-sm" aria-label="Breadcrumbs">
            <ol className="grid__flex grid__flex--wrap">
                {children}
            </ol>
        </nav>
    )
}

function BreadcrumbItem ({ children }) {
    return (
        <li className="breadcrumbs__item">
            {children}
            <span>/</span>
        </li>
    )
}

export {Breadcrumb, BreadcrumbItem}
  