import React, { useState } from 'react';

const fullMenuItems = [
  // Starters
  { category: 'Starters', name: 'Greek Salad', price: 'P 120', description: 'Fresh vegetables, olives, feta cheese with our house dressing' },
  { category: 'Starters', name: 'Bruschetta', price: 'P 100', description: 'Grilled bread with garlic, tomatoes, olive oil and basil' },
  { category: 'Starters', name: 'Calamari', price: 'P 150', description: 'Lightly fried squid served with lemon aioli' },
  // Main Dishes
  { category: 'Main Dishes', name: 'Mediterranean Pasta', price: 'P 180', description: 'Linguine with olive oil, garlic, cherry tomatoes and herbs' },
  { category: 'Main Dishes', name: 'Grilled Salmon', price: 'P 250', description: 'Fresh salmon with lemon and herbs, served with vegetables' },
  { category: 'Main Dishes', name: 'Chicken Souvlaki', price: 'P 200', description: 'Marinated chicken skewers with tzatziki and pita bread' },
  // Desserts
  { category: 'Desserts', name: 'Lemon Dessert', price: 'P 90', description: 'Our famous lemon cake with a hint of vanilla' },
  { category: 'Desserts', name: 'Baklava', price: 'P 110', description: 'Layered pastry with nuts and honey' },
  { category: 'Desserts', name: 'Tiramisu', price: 'P 120', description: 'Classic Italian coffee-flavored dessert' },
  // Beverages
  { category: 'Beverages', name: 'Fresh Lemonade', price: 'P 60', description: 'Freshly squeezed lemons with a hint of mint' },
  { category: 'Beverages', name: 'House Wine', price: 'P 150', description: 'Red or white, served by the glass' },
  { category: 'Beverages', name: 'Greek Coffee', price: 'P 70', description: 'Strong and aromatic, served with a sweet treat' }
];

const MenuModal = ({ isOpen, onClose }) => {
  const menuByCategory = fullMenuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-nunito font-bold text-2xl">Little Lemon Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {Object.entries(menuByCategory).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-nunito font-bold text-xl border-b-2 border-gray-200 pb-2 mb-4">{category}</h3>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="flex-1">
                      <p className="font-inter font-medium">{item.name}</p>
                      <p className="font-inter text-sm text-gray-600">{item.description}</p>
                    </div>
                    <p className="font-inter font-medium whitespace-nowrap ml-4">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="bg-[#1E1E1E] text-white font-inter font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuItems = [
    { name: 'Greek Salad', price: 'P 120', image: '/food1.jpg' },
    { name: 'Bruschetta', price: 'P 100', image: '/food2.jpg' },
    { name: 'Lemon Dessert', price: 'P 90', image: '/food3.jpg' }
  ];

  return (
    <section className="bg-[#F5F5F5] min-h-screen p-8">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
        <h2 className="font-nunito font-bold text-[2.25rem] text-center sm:text-left">Specials</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-transparent text-black border-[#1E1E1E] border-2 font-inter font-medium px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition whitespace-nowrap"
        >
          Check Menu
        </button>
      </header>
      <div className="flex flex-col lg:flex-row justify-between space-between w-full mt-16">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <MenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

// MenuItem component remains the same
const MenuItem = ({ name, price, image }) => (
  <article className="flex flex-col gap-8 md:w-full lg:max-w-[18rem] xl:max-w-[20rem] ">
    <figure className="w-full h-[16rem] border-2 border-[#1E1E1E] rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </figure>
    <div className="flex justify-between bg-white p-2 border-2 border-[#1E1E1E] rounded-md mb-8">
      <p className="font-inter font-medium text-[1rem]">{name}</p>
      <p className="font-inter font-medium text-[1rem]">{price}</p>
    </div>
  </article>
);

export default Menu;