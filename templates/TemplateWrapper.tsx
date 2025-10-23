import React from 'react';
import type { Store } from '../types';

interface TemplateWrapperProps {
  store: Store;
  children: React.ReactNode;
}

const TemplateHeader: React.FC<{ store: Store }> = ({ store }) => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: store.theme.secondaryColor, backgroundColor: store.theme.backgroundColor, color: store.theme.textColor }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
            {store.logoUrl && <img src={store.logoUrl} alt={`${store.name} logo`} className="h-10 w-auto mr-4 object-contain" />}
            <h1 className="text-3xl font-bold" style={{ color: store.theme.primaryColor }}>{store.name}</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Tienda</a>
            <a href="#" className="hover:underline">Nosotros</a>
            <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

const TemplateFooter: React.FC<{ store: Store }> = ({ store }) => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 mt-16" style={{ backgroundColor: store.theme.primaryColor, color: store.theme.backgroundColor === '#121212' ? '#e0e0e0' : 'white' }}>
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} {store.name}. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ store, children }) => {
    const { currency } = store;
    
    const formatCurrency = (amount: number) => {
        const options = {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        };
        if (currency === 'PEN') {
            return `S/ ${amount.toFixed(2)}`;
        }
        return new Intl.NumberFormat('en-US', options).format(amount);
    }
    
    // Pass formatCurrency down to children via cloneElement or context if needed, for now templates will re-implement
    return (
        <div style={{ fontFamily: store.theme.font, backgroundColor: store.theme.backgroundColor, color: store.theme.textColor }}>
            <TemplateHeader store={store} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </main>
            <TemplateFooter store={store} />
        </div>
    );
}

export default TemplateWrapper;
