import React from 'react';
import { X, Heart, MessageSquare, Bookmark, Share2, Sparkles } from 'lucide-react';

export default function PostPreviewModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-[#E8D9CF] shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Media Preview */}
        <div className="aspect-square bg-[#F3ECE6] relative flex items-center justify-center overflow-hidden">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <div className="p-8 text-center bg-[#FAF2ED] w-full h-full flex flex-col items-center justify-center">
              <span className="text-xs uppercase font-sans-clean font-bold tracking-widest text-[#A13E50] mb-2">Quote Concept</span>
              <p className="font-serif-luxury italic text-xl font-bold text-[#8E323F]">
                "{post.title}"
              </p>
            </div>
          )}
        </div>

        {/* Caption & Post Details */}
        <div className="p-5 font-sans-clean text-xs sm:text-sm">
          {/* Engagement Row */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F2E5DC] text-xs text-[#7A6A68]">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-[#E1306C] font-semibold">
                <Heart className="w-4 h-4 mr-1 fill-[#E1306C]" /> {post.likes}
              </span>
              <span className="flex items-center font-semibold text-[#2C2325]">
                <MessageSquare className="w-4 h-4 mr-1" /> {post.comments}
              </span>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#8E323F] bg-[#FAF0EA] px-2 py-0.5 rounded">
              Aesthetic Strategy Post
            </span>
          </div>

          {/* Caption */}
          <div className="mt-3 text-[#2C2325] leading-relaxed">
            <span className="font-bold text-[#8E323F] mr-1.5">@socialsbytaniya</span>
            {post.caption}
          </div>

          <p className="text-[11px] text-[#8A7977] mt-3 italic">
            ✦ Designed to drive high save-rates, organic algorithmic explore pushes, and brand authority.
          </p>
        </div>
      </div>
    </div>
  );
}
