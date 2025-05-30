
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Check } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="w-32 h-32 mb-8 relative">
        {/* Static centered checkmark that doesn't rotate */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 bg-primary rounded-full opacity-20"></div>
          <Check className="absolute text-white h-8 w-8 stroke-[3] animate-check-draw-reverse" />
        </div>
        
        {/* Rotating circle */}
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <path
            d="M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10 Z"
            className="fill-none stroke-primary stroke-[4]"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="600"
            style={{ animation: 'dash 3s ease-in-out infinite' }}
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
        TaskSphere
      </h1>
      
      <div className="w-72 space-y-2">
        <Skeleton className="h-2 w-full bg-primary/20" />
        <Skeleton className="h-2 w-5/6 mx-auto bg-primary/15" />
        <Skeleton className="h-2 w-3/4 mx-auto bg-primary/10" />
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dash {
            0% {
              stroke-dashoffset: 600;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -600;
            }
          }
          
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes check-draw {
            0% {
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            70% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
          
          @keyframes check-draw-reverse {
            0% {
              stroke-dasharray: 100;
              stroke-dashoffset: -100;
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            70% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
          
          .animate-check-draw {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: check-draw 1.5s cubic-bezier(0.65, 0, 0.35, 1) 1;
            animation-fill-mode: forwards;
          }
          
          .animate-check-draw-reverse {
            stroke-dasharray: 100;
            stroke-dashoffset: -100;
            animation: check-draw-reverse 1.5s cubic-bezier(0.65, 0, 0.35, 1) 1;
            animation-fill-mode: forwards;
          }
        `
      }} />
    </div>
  );
};

export default LoadingScreen;
