import React from 'react';
import type { Store, Product } from '../types';
import TemplateWrapper from './TemplateWrapper';

interface TemplateProps {
  store: Store;
  products: Product[];
}

const MinimalModernTemplate: React.FC<TemplateProps> = ({ store, products }) => {
  const formatCurrency = (amount: number) => {
    if (store.currency === 'PEN') {
        return `S/ ${amount.toFixed(2)}`;
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }

  return (
    <TemplateWrapper store={store}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight" style={{color: store.theme.textColor}}>Colecciones Exquisitas</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500" style={{color: store.theme.secondaryColor}}>Piezas seleccionadas para el individuo moderno.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map(product => (
          <div key={product.id} className="group relative text-center">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity" />
            </div>
            <h3 className="mt-4 text-lg font-medium" style={{color: store.theme.textColor}}>{product.name}</h3>
            <p className="mt-1 text-md" style={{color: store.theme.primaryColor}}>{formatCurrency(product.price)}</p>
          </div>
        ))}
      </div>
    </TemplateWrapper>
  );
};

export default MinimalModernTemplate;
