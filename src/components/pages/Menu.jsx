import React from 'react';

const menuItems = [
  { name: 'Greek Salad', price: 'P 120', image: '/food1.jpg' },
  { name: 'Bruschetta', price: 'P 100', image: '/food2.jpg' },
  { name: 'Lemon Dessert', price: 'P 90', image: '/food3.jpg' }
];

const MenuItem = ({ name, price, image }) => (
  <article className="flex flex-col gap-4 w-full sm:w-[19.5rem]">
    {/* Image Container */}
    <figure className="w-full h-[16rem] border-2 border-[#1E1E1E] rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </figure>
    {/* Info Container */}
    <div className="flex justify-between bg-white p-2 border-2 border-[#1E1E1E] rounded-md">
      <p className="font-inter font-medium text-[1rem]">{name}</p>
      <p className="font-inter font-medium text-[1rem]">{price}</p>
    </div>
  </article>
);

const Menu = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen p-8">
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
        <h2 className="font-nunito font-bold text-[2.25rem] text-center sm:text-left">Specials</h2>
        <button className="bg-[#F5F5F5] text-black border-[#1E1E1E] border-2 font-inter font-medium px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition whitespace-nowrap">
          Check Menu
        </button>
      </header>

      {/* Menu Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;