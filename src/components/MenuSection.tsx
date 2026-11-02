import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/cafeData';
import { Plus, Check, Search, Utensils, Coffee, Cake, GlassWater, Flame } from 'lucide-react';

interface MenuSectionProps {
  onAddItem: (item: MenuItem) => void;
  orderItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddItem, orderItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'brunch' | 'bakery' | 'drinks'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Offerings', icon: Utensils },
    { key: 'coffee', label: 'Artisan Coffee', icon: Coffee },
    { key: 'brunch', label: 'All-Day Brunch', icon: Flame },
    { key: 'bakery', label: 'Artisan Bakery', icon: Cake },
    { key: 'drinks', label: 'Tonics & Teas', icon: GlassWater },
  ] as const;

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.dietary && item.dietary.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#120F0D] border-b border-[#26201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C2884A] flex items-center gap-2">
              <span>All-Day South Melbourne Kitchen</span>
              <span aria-hidden="true" className="text-[#55473A]">·</span>
              <span className="text-[#9E9488]">Seasonal Victorian Ingredients</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2]">
              The Kitchen &amp; Coffee Bar
            </h2>
            <p className="text-sm sm:text-base text-[#9E9488] max-w-2xl">
              From our legendary morning egg scrambles to single-origin Geisha filter brews.
              All prices shown in Australian Dollars (AUD), inclusive of 10% GST.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9488]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, dietary, brews..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1613] border border-[#332A22] text-sm text-[#EDE8E1] placeholder:text-[#7A7063] focus:outline-none focus:border-[#C2884A] transition-colors"
            />
          </div>
        </div>

        {/* Featured Dish Spotlight Banner (St Ali Chilli Scramble) */}
        <div className="rounded-2xl overflow-hidden bg-[#1A1613] border border-[#362E27] shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96">
            <img
              src="/src/assets/images/melbourne_brunch_spread_1793629157725.jpg"
              alt="St Ali famous Chilli Scrambled eggs on sourdough with avocado and flat white coffee"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#C2884A] text-[#120F0D] text-xs font-bold uppercase tracking-wider rounded-md">
              Iconic Melbourne Dish
            </div>
          </div>
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C2884A]">Chef&apos;s Signature</span>
              <span className="text-2xl font-serif font-bold text-[#FAF7F2] tabular-nums">$26.50 AUD</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              St Ali Chilli Scrambled Eggs
            </h3>
            <p className="text-sm text-[#C7BEB3] leading-relaxed">
              Silky free-range eggs folded with house-made Sichuan chili crunch, creamy Meredith Dairy goat curd,
              scallions, and fresh micro herbs on grilled Baker D. Chirico artisan sourdough. Served with ripe Hass avocado.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#9E9488]">
              <span className="text-[#C2884A]">Vegetarian</span>
              <span aria-hidden="true">·</span>
              <span>Gluten-free option available</span>
              <span aria-hidden="true">·</span>
              <span>Available daily till 3:30pm</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  const item = MENU_ITEMS.find((i) => i.id === 'b1');
                  if (item) onAddItem(item);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#C2884A] hover:bg-[#D89954] text-[#120F0D] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                {orderItemIds.includes('b1') ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Order Bag
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Add to Order / Pre-Order ($26.50)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#181411] rounded-xl border border-[#2E251E] w-fit">
          {categories.map((cat) => {
            const active = selectedCategory === cat.key;
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#C2884A] text-[#120F0D] font-semibold shadow-sm'
                    : 'text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#26201B]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = orderItemIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-[#181411] hover:bg-[#1E1914] border border-[#2B231C] hover:border-[#3D3227] transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-serif text-lg font-bold text-[#FAF7F2] group-hover:text-[#C2884A] transition-colors leading-snug">
                      {item.name}
                    </h4>
                    <span className="font-mono text-base font-bold text-[#C2884A] whitespace-nowrap shrink-0 tabular-nums">
                      ${item.price.toFixed(2)} AUD
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A89E91] leading-relaxed">
                    {item.description}
                  </p>

                  {item.notes && (
                    <div className="text-[11px] text-[#C2884A] italic">
                      {item.notes}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#26201B] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#7A7063] truncate">
                    {item.dietary?.join(' · ')}
                  </div>

                  <button
                    onClick={() => onAddItem(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                      isAdded
                        ? 'bg-[#2A231C] text-[#C2884A] border border-[#3E342B]'
                        : 'bg-[#26201B] hover:bg-[#C2884A] text-[#EDE8E1] hover:text-[#120F0D] border border-[#362E27]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-[#9E9488] bg-[#181411] rounded-2xl border border-[#2B231C]">
            <Utensils className="w-10 h-10 mx-auto mb-3 text-[#55473A]" />
            <div className="font-serif text-lg font-semibold text-[#EDE8E1]">No menu items found</div>
            <p className="text-xs mt-1">Try searching for coffee, scramble, croissant, or clear your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium rounded-lg bg-[#26201B] text-[#EDE8E1] hover:bg-[#362E27]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
