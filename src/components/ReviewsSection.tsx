import React, { useState } from 'react';
import { REVIEWS } from '../data/cafeData';
import { Star, Quote, Award } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'critics' | 'locals'>('all');

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === 'critics') return r.source.includes('Broadsheet') || r.source.includes('Guide') || r.source.includes('Chronicle');
    if (filter === 'locals') return r.source.includes('Patron') || r.role.includes('Local');
    return true;
  });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#16120F] border-b border-[#26201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header & Overall Rating Metric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C2884A] flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Melbourne Coffee Acclaim</span>
              <span aria-hidden="true" className="text-[#55473A]">·</span>
              <span className="text-[#9E9488]">Over Two Decades of Praise</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2]">
              Loved by critics. <br className="hidden sm:inline" />
              Cherished by Melbourne regulars.
            </h2>
            <p className="text-sm sm:text-base text-[#9E9488] max-w-2xl">
              From international coffee competition judges to neighbours who walk down Yarra Place
              every morning for their daily magic.
            </p>
          </div>

          {/* Social Proof Aggregate Card */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-[#1F1914] border border-[#332A22] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 text-[#C2884A] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C2884A]" />
                ))}
              </div>
              <div className="text-2xl font-serif font-bold text-[#FAF7F2] tabular-nums">4.9 / 5.0</div>
              <div className="text-xs text-[#9E9488]">Based on 3,420+ verified patron reviews</div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-medium text-[#C2884A] block">Top Rated</span>
              <span className="text-[11px] text-[#A69B8D]">South Melbourne</span>
            </div>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-2 p-1 bg-[#1A1613] rounded-xl border border-[#2E251E] w-fit">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-[#C2884A] text-[#120F0D] font-semibold shadow-sm'
                : 'text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#26201B]'
            }`}
          >
            All Accolades
          </button>
          <button
            onClick={() => setFilter('critics')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'critics'
                ? 'bg-[#C2884A] text-[#120F0D] font-semibold shadow-sm'
                : 'text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#26201B]'
            }`}
          >
            Food Critics &amp; Q-Graders
          </button>
          <button
            onClick={() => setFilter('locals')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              filter === 'locals'
                ? 'bg-[#C2884A] text-[#120F0D] font-semibold shadow-sm'
                : 'text-[#C7BEB3] hover:text-[#EDE8E1] hover:bg-[#26201B]'
            }`}
          >
            Melbourne Locals
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A1613] border border-[#2E251E] flex flex-col justify-between space-y-6 hover:border-[#3D3227] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C2884A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C2884A]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#7A7063] font-mono">{review.date}</span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#3A3026] mb-2" />
                  <p className="text-sm sm:text-base text-[#C7BEB3] leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Attribution (No pill boxes, clean editorial hierarchy) */}
              <div className="pt-4 border-t border-[#26201B] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#FAF7F2]">{review.author}</div>
                  <div className="text-xs text-[#9E9488]">{review.role}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-[#C2884A] block">{review.source}</span>
                  <span className="text-[11px] text-[#6E6356]">Verified Evaluation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
