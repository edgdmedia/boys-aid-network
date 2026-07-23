'use client';

import { useState, useEffect } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';

interface ShareProps {
  title: string;
}

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Share({ title }: ShareProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const copyToClipboard = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`;

  return (
    <div className="flex flex-wrap items-center gap-3.5 border-t border-b border-gray-100 py-4.5 my-8">
      <span className="flex items-center gap-1.5 font-display font-bold text-[13px] text-navy-800 uppercase tracking-wider">
        <Share2 className="w-4 h-4 text-red-600" /> Share this page
      </span>
      <div className="flex items-center gap-2">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-200 hover:border-red-600 hover:bg-red-50 text-gray-500 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
          title="Share on Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-200 hover:border-red-600 hover:bg-red-50 text-gray-500 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
          title="Share on Twitter / X"
        >
          <TwitterIcon />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-gray-200 hover:border-red-600 hover:bg-red-50 text-gray-500 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
          title="Share on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <button
          onClick={copyToClipboard}
          className="w-9 h-9 rounded-full border border-gray-200 hover:border-red-600 hover:bg-red-50 text-gray-500 hover:text-red-600 flex items-center justify-center transition-colors cursor-pointer"
          title="Copy page link"
        >
          {copied ? <Check className="w-[18px] h-[18px] text-green-600" /> : <LinkIcon className="w-[18px] h-[18px]" />}
        </button>
      </div>
    </div>
  );
}
