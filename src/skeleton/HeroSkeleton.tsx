export default function HeroSkeleton() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-gray-900 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-[90vw] md:w-[650px] aspect-[16/9] bg-gray-800 rounded-xl shadow-2xl" />
      </div>
      <div className="absolute left-[15%] md:left-[10%] xl:left-[calc(50%-480px)] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[200px] md:w-[300px] aspect-[16/9] bg-gray-800/60 rounded-lg hidden md:block scale-75 z-20" />
      <div className="absolute left-[85%] md:left-[90%] xl:left-[calc(50%+480px)] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[200px] md:w-[300px] aspect-[16/9] bg-gray-800/60 rounded-lg hidden md:block scale-75 z-20" />
    </section>
  );
}
