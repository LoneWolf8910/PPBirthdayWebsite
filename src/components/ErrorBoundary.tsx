"use client";

import type { ReactNode, ErrorInfo } from "react";
import { Component } from "react";

/**
 * ErrorBoundary catches JavaScript errors anywhere in its child tree,
 * logs them, and shows a kind fallback instead of a blank white screen.
 */
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="min-h-screen flex items-center justify-center bg-cream p-6 text-center"
          >
            <div className="bg-white/80 backdrop-blur border border-rose/40 p-8 md:p-12 rounded-3xl shadow-xl max-w-md">
              <div className="text-4xl mb-4">💌</div>
              <h3 className="playfair font-bold text-burgundy mb-2">
                Something went a little sideways
              </h3>
              <p className="cormorant text-rose/70 mb-6">
                Please refresh the page to continue your royal experience.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-burgundy px-6 py-2 text-white font-playfair hover:bg-burgundy/90 transition"
              >
                Refresh & Continue
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
