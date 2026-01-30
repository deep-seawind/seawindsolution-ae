import Container from "@/components/common/Container";
import Image from "next/image";
import {
  FaShieldAlt,
  FaUserClock,
  FaPiggyBank,
  FaChartBar,
  FaCoins,
  FaHandHoldingUsd,
} from "react-icons/fa";

export default function FinanceSection() {
  const leftItems = [
    {
      title: "Insurance Planning",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaShieldAlt />,
    },
    {
      title: "Retirement Planning",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaUserClock />,
    },
    {
      title: "Investment Planning",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaPiggyBank />,
    },
  ];

  const rightItems = [
    {
      title: "Commodities Training",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaChartBar />,
    },
    {
      title: "Mutual Funds",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaCoins />,
    },
    {
      title: "Wealth Management",
      desc: "Iterative approaches to corporate strategy\nfoster collaborative thinkin",
      icon: <FaHandHoldingUsd />,
    },
  ];

  const ItemCard = ({
    title,
    desc,
    icon,
  }: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex items-center gap-3">
      <div className="text-left">
        <div className="font-bold text-[20px] mb-2">{title}</div>
        <div className="text-[15px] text-[#777] tracking-wide leading-snug whitespace-pre-line">
          {desc}
        </div>
      </div>
      <div className="w-[60px] h-[60px] rounded-full bg-[#004aad] flex items-center justify-center text-white text-[24px]">
        {icon}
      </div>
    </div>
  );

  const ItemCardRight = ({
    title,
    desc,
    icon,
  }: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex items-center gap-3">
      <div className="w-[60px] h-[60px] rounded-full bg-[#004aad] flex items-center justify-center text-white text-[24px]">
        {icon}
      </div>
      <div className="text-left">
        <div className="font-bold text-[20px] mb-2">{title}</div>
        <div className="text-[15px] text-[#777] tracking-wide leading-snug whitespace-pre-line">
          {desc}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-10 px-0 md:px-0">
      <Container className="flex flex-row w-full justify-between items-center gap-8 flex-wrap md:flex-nowrap">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-16 flex-1">
          {leftItems.map((item, i) => (
            <ItemCard key={i} {...item} />
          ))}
        </div>
 
        {/* Center Image */}
        <div className="flex-1 text-center">
          <Image
            src="/images/services/service-img.png"
            alt="Mobile App Screenshot"
            width={500}
            height={700}
            className="max-w-full h-auto rounded-[40px] mx-auto"
            priority
          />
        </div>


        {/* Right Column */}
        <div className="flex flex-col justify-center gap-16 flex-1">
          {rightItems.map((item, i) => (
            <ItemCardRight key={i} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
