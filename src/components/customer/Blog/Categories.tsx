import React from 'react';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Danh Mục</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            onClick={() => console.log(`Filter by ${category}`)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;