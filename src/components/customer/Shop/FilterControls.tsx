import React from 'react';

interface FilterControlsProps {
  sortCriteria: string;
  setSortCriteria: (criteria: string) => void;
  sortOrder: 'ASC' | 'DESC';
  setSortOrder: (order: 'ASC' | 'DESC') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  sortCriteria,
  setSortCriteria,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-end mb-6 gap-2">
      <div className="flex gap-2">
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="rating">Đánh giá</option>
          <option value="purchases">Lượt mua</option>
          <option value="price">Giá</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'ASC' | 'DESC')}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="DESC">Cao đến thấp</option>
          <option value="ASC">Thấp đến cao</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;