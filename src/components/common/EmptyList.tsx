"use client";

interface EmptyListProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EmptyList({
  icon,
  title,
  description,
}: EmptyListProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4 md:px-8 py-10 md:py-12">
      <div className="w-full max-w-xl bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800/40 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
        <div className="mb-5 flex justify-center text-gray-500/60 transition-opacity hover:opacity-100">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl font-medium text-white mb-2 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-xs md:text-sm max-w-[280px] md:max-w-xs mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
