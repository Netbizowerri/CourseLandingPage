import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { generateRandomPurchase } from '../lib/nigerianData';
import { ShoppingCart } from 'lucide-react';

interface PurchaseNotificationProps {
  enabled?: boolean;
}

export default function PurchaseNotification({ enabled = true }: PurchaseNotificationProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const initialDelay = setTimeout(() => {
      showPurchaseNotification();

      intervalRef.current = setInterval(() => {
        showPurchaseNotification();
      }, getRandomInterval());
    }, getRandomInitialDelay());

    return () => {
      clearTimeout(initialDelay);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled]);

  function showPurchaseNotification() {
    const { firstName, lastName, location } = generateRandomPurchase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    const timeAgo = getRandomTimeAgo();

    toast.custom(
      () => (
        <div className="flex items-center gap-3 bg-[#0F2A4A] text-white px-5 py-4 rounded-2xl shadow-2xl shadow-black/30 border border-[#C9922A]/30 max-w-sm">
          <div className="w-10 h-10 bg-[#C9922A] rounded-xl flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="w-5 h-5 text-[#0F2A4A]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold leading-snug">
              {firstName} {lastInitial}.
            </p>
            <p className="text-xs text-white/70 leading-snug truncate">
              from {location}
            </p>
          </div>
          <span className="text-[10px] text-[#C9922A] font-medium whitespace-nowrap">{timeAgo}</span>
        </div>
      ),
      {
        duration: 8000,
        position: 'bottom-right',
      }
    );
  }

  function getRandomInitialDelay(): number {
    return Math.floor(Math.random() * 15000) + 10000; // 10–25s
  }

  function getRandomInterval(): number {
    return Math.floor(Math.random() * 25000) + 20000; // 20–45s
  }

  function getRandomTimeAgo(): string {
    const options = ["Just now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago"];
    return options[Math.floor(Math.random() * options.length)];
  }

  return null;
}
