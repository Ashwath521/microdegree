import React from "react";
import rewardsStyles from "../styles/rewards.module.css";
import Image from "next/image";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function rewards() {
  return (
    <>
      <div className={rewardsStyles.main}>
        <div>
          <h1 className={rewardsStyles.heading}>
            Refer your friend and earn upto 15,000
          </h1>

          <form>
            <input
              className={rewardsStyles.text}
              type="text"
              placeholder="Referral ID"
            />
            <i class="fa fa-copy"></i>
            <div>
              <button className={rewardsStyles.button} type="submit">
                Signin for Referral ID
              </button>
            </div>
          </form>
        </div>
        <div className={rewardsStyles.main1}>
          <h1 className={rewardsStyles.rewardsh1}>My Rewards</h1>
          <div className={rewardsStyles.main2}>
            <div className={rewardsStyles.rewardsdiv1}>
              <span>0</span>
              <hr />
              <p>Referrals</p>
            </div>
            <div className={rewardsStyles.rewardsdiv2}>
              <span>0</span>
              <hr />
              <p>Earnings</p>
            </div>
          </div>
        </div>
      </div>
      <div className={rewardsStyles.giftmain}>
        <div>
          <h1>Easy Way</h1>
          <p>
            Ask your friend to use your EMAIL ID in referral box (Image below)
          </p>
          <hr />
          <p>
            ರೆಫರಲ್ ಫೀಲ್ಡ್ ನಲ್ಲಿ ನಿಮ್ಮ ಇಮೇಲ್ ಐಡಿಯನ್ನು ನಿಮ್ಮ ಫ್ರೆಂಡ್ ಗೆ ಕೋರ್ಸ್
            ಕೊಂಡುಕೊಳ್ಳುವಾಗ ಹಾಕಲು ಹೇಳಿ (ಚಿತ್ರ ಕೆಳಗಿದೆ)
          </p>
        </div>
        <div className={rewardsStyles.giftmainimage}>
          <Image src="/gift.jpg" alt="gift img" height={250} width={350} />
        </div>
      </div>
      <div className={rewardsStyles.worksmain}>
        <h1>How it works</h1>
        <div className={rewardsStyles.worksmainimg}>
          <Image src="/ref4.png" alt="ref img" height={600} width={1000} />
        </div>
      </div>
    </>
  );
}

export default rewards;
