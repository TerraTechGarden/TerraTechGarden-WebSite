import React, { useState } from 'react';
import FilterSidebar from '../../components/customer/Shop/FilterSidebar';
import ProductGrid from '../../components/customer/Shop/ProductGrid';
import FilterControls from '../../components/customer/Shop/FilterControls';
import SearchBar from '../../components/customer/Shop/SearchBar';

const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortCriteria, setSortCriteria] = useState<string>('rating');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Cửa Hàng</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar selectedType={selectedType} setSelectedType={setSelectedType} />
          <div className="flex-1">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterControls 
              sortCriteria={sortCriteria} 
              setSortCriteria={setSortCriteria} 
              sortOrder={sortOrder} 
              setSortOrder={setSortOrder} 
            />
            <ProductGrid 
              searchQuery={searchQuery} 
              selectedType={selectedType} 
              sortCriteria={sortCriteria} 
              sortOrder={sortOrder} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;