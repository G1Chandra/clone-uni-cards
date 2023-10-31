import React from "react";
import "./Perks.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";

const Perks = () => {
  const perksData = [
    {
      img_url: "https://www.uni.cards/images/one_percent_cashback.png",
      alt_text: "cashback",
      heading:
        "1% assured cashback on your spends.The more you spend, the more you earn.",
      subheading:
        "Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.",
    },
    {
      img_url: "https://www.uni.cards/images/five_x_rewards.png",
      alt_text: "rewards",
      heading: "5x more value than your cashback, only at the Uni Store.",
      subheading: "",
    },
    {
      img_url: "https://www.uni.cards/images/forex_globe.png",
      alt_text: "forex",
      heading: "Zero Forex Markup. Go international, without any fees.",
      subheading: "",
    },
  ];

  const displayPerks = () => {
    return perksData.map((perk, index) => {
      return (
        <HorizontalCard
          idx={index}
          imgSrc={perk.img_url}
          altText={perk.alt_text}
          heading={perk.heading}
          subheading={perk.subheading}
        />
      );
    });
  };

  return (
    <div className="flex flex-col align-center max-width">
      <div>
        <p>
          Earn 1% assured cashback <span>on your spends. Get</span> 5X
        </p>
        <p>
          more value than cashback <span>at the Uni Store. Enjoy</span>
        </p>
        <p>
          <span>round the clock</span> Whatsapp support. <span>And it's</span>
        </p>
        <p>
          lifetime free<span>; no joining fee, no annual charges.</span>
        </p>
      </div>
      <div>
        <img
          src="https://www.uni.cards/images/down_arrow.svg"
          alt="down-arrow"
          loading="lazy"
        />
      </div>
      {displayPerks()}
      <div>
        <p>
          Lifetime <span>free.</span> No joining fee.
        </p>
        <p>No annual charges.</p>
      </div>
    </div>
  );
};

export default Perks;
