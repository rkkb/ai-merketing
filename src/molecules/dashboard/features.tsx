import {
  AnalyticsIcon,
  CustomAiIcon,
  SeoLoveIcon,
  SettingIcon,
  WorldIcon,
} from '@/public/assets/svgIcons';

const data = [
  {
    title: 'Create Ai Based Website',
    icon: <WorldIcon />,
  },
  {
    title: 'Write SEO Friendly Contents',
    icon: <SeoLoveIcon />,
  },
  {
    title: 'Maintain site with Artificial Intelligence',
    icon: <SettingIcon />,
  },
  {
    title: 'Response customer with analyzing data',
    icon: <AnalyticsIcon />,
  },
  {
    title: 'Show custom interface with Ai',
    icon: <CustomAiIcon />,
  },
];
export function Features() {
  return (
    <div className=" mt-20">
      <div className="text-center md:text-left">
        <h4>
          <span className="text-gradient text-6xl font-bold">
            Explore the features!
          </span>
        </h4>
        <span className="mx-auto mt-3 inline-block max-w-xl text-xl text-white opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </span>
      </div>

      <div className="mt-10 grid flex-wrap items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((val, ind) => (
          <div
            key={ind}
            className=" cursor-pointer border-gradient group relative z-10 max-w-md overflow-hidden rounded-3xl"
          >
            <div className="flex min-h-[20rem] flex-col justify-center rounded-3xl bg-black p-12 pr-0 2xl:min-h-[16rem] 2xl:p-8">
              <div className="">{val.icon}</div>
              <div className="mt-3 text-3xl font-bold text-white">
                {val.title}
              </div>
            </div>
            <span className="absolute top-0 left-0 z-10 h-full w-0 rounded-3xl bg-gradient-to-r from-cyan via-blue to-pink opacity-20 transition-all duration-[2500ms] ease-in-out group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
