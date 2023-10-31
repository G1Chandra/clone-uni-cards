import React, { useEffect } from "react";
import "./Perks.css";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import "aos/dist/aos.css";
import AOS from "aos";

const Perks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      // easing: "ease-out", // Easing option
      once: true,
    });
  }, []);

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
        {/* <p data-aos="fade-up">
          Earn 1% assured cashback <span>on your spends. Get</span> 5X
        </p> */}
        <p data-aos="fade-up">
          Earn 1% assured cashback
          <span class="faded-font">on your spends. Get</span> 5X
        </p>
        <p data-aos="fade-up">
          more value than cashback{" "}
          <span class="faded-font">at the Uni Store. Enjoy</span>
        </p>
        <p data-aos="fade-up">
          <span class="faded-font">round the clock</span> Whatsapp support.{" "}
          <span class="faded-font">And it's</span>
        </p>
        <p data-aos="fade-up">
          lifetime free
          <span class="faded-font">; no joining fee, no annual charges.</span>
        </p>
      </div>
      <div
        className="down-arrow flex align-center justify-center"
        data-aos="fade-down"
      >
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
