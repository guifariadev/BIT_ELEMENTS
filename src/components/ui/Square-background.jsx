export const SquareBackground = ({
  children,
}) => {
  return (
    <div>
      <div className="transition-bg relative flex flex-col overflow-hidden">
        {/* square grid */}
        <div className="absolute h-full w-full "><div className="absolute inset-0 bg-[linear-gradient(to_right,#aaaaaa1a_1px,transparent_1px),linear-gradient(to_bottom,#aaaaaa1a_1px,transparent_1px)] bg-[size:93px_60px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_10%,transparent_120%)]"></div></div>
        {/* radial light */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_120%_120%_at_50%_-20%,rgba(102,102,102,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </div>
    </div>
  );
};
