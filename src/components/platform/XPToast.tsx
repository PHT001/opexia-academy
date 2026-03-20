"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ToastType = "xp" | "streak" | "badge" | "levelup";

interface XPToastData {
  amount?: number;
  days?: number;
  name?: string;
  level?: number;
}

interface Toast {
  id: string;
  type: ToastType;
  data: XPToastData;
}

interface XPToastContextValue {
  showToast: (type: ToastType, data: XPToastData) => void;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const XPToastContext = createContext<XPToastContextValue | null>(null);

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useXPToast(): XPToastContextValue {
  const ctx = useContext(XPToastContext);
  if (!ctx) {
    throw new Error("useXPToast must be used within an XPToastProvider");
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Toast configuration per type
// ---------------------------------------------------------------------------

const TOAST_CONFIG: Record<
  ToastType,
  {
    borderColor: string;
    iconBg: string;
    iconColor: string;
    label: (data: XPToastData) => string;
    sub: (data: XPToastData) => string | null;
    icon: ReactNode;
  }
> = {
  xp: {
    borderColor: "#F59E0B",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    label: (d) => `+${d.amount ?? 0} XP`,
    sub: () => null,
    icon: (
      // Lightning bolt
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  streak: {
    borderColor: "#F97316",
    iconBg: "#FFEDD5",
    iconColor: "#EA580C",
    label: (d) => `Streak de ${d.days ?? 0} jours!`,
    sub: () => null,
    icon: (
      // Fire
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
      </svg>
    ),
  },
  badge: {
    borderColor: "#A855F7",
    iconBg: "#F3E8FF",
    iconColor: "#9333EA",
    label: () => "Badge debloque!",
    sub: (d) => d.name ?? null,
    icon: (
      // Star
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  levelup: {
    borderColor: "#FF1744",
    iconBg: "#FFE0E6",
    iconColor: "#FF1744",
    label: (d) => `Level ${d.level ?? 0} atteint!`,
    sub: () => null,
    icon: (
      // Arrow up
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    ),
  },
};

// ---------------------------------------------------------------------------
// Auto-dismiss delay (ms)
// ---------------------------------------------------------------------------

const DISMISS_MS = 3000;

// ---------------------------------------------------------------------------
// Single toast item
// ---------------------------------------------------------------------------

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  const config = TOAST_CONFIG[toast.type];
  const label = config.label(toast.data);
  const sub = config.sub(toast.data);

  return (
    <motion.div
      layout
      initial={{ x: 360, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 360, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        maxWidth: 320,
        width: "100%",
        background: "#fff",
        borderRadius: 16,
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
        borderLeft: `4px solid ${config.borderColor}`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        cursor: "pointer",
        pointerEvents: "auto",
      }}
      onClick={() => onDismiss(toast.id)}
    >
      {/* Icon */}
      <div
        style={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: 10,
          background: config.iconBg,
          color: config.iconColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {config.icon}
      </div>

      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: "#111",
            lineHeight: 1.3,
          }}
        >
          {label}
        </div>
        {sub && (
          <div
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginTop: 2,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

let toastCounter = 0;

export function XPToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (type: ToastType, data: XPToastData) => {
      const id = `xp-toast-${++toastCounter}`;
      setToasts((prev) => [...prev, { id, type, data }]);
      setTimeout(() => dismiss(id), DISMISS_MS);
    },
    [dismiss],
  );

  return (
    <XPToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container - fixed bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
          ))}
        </AnimatePresence>
      </div>
    </XPToastContext.Provider>
  );
}
