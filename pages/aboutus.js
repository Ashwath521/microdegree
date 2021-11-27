import React from "react";
import Image from "next/image";
import aboutStyles from "../styles/about.module.css";

const aboutus = () => {
  return (
    <>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.heading}>
          We’re <span className={aboutStyles.span}>Micro</span>
          <span className={aboutStyles.span1}>Degree</span> | Join our community
        </h1>
        <p className={aboutStyles.paragraph}>
          Come, explore the power of learning job-ready skills in vernacular at
          an affordable price.
        </p>
      </div>
      <div className={aboutStyles.subcontainer}>
        <p className={aboutStyles.p1}>
          We’re a team of hustlers looking to impact the next generation of
          India’s workforce. Wondering how?
        </p>
        <p className={aboutStyles.p2}>
          We believe in learning technology in our local language by emphasizing
          on relevant analogies, examples and thereby making fundamentals strong
          with deep concept clarity. Our motto is to make emerging technology
          affordable for students & early professionals across regions
          irrespective of their educational backgrounds.
        </p>
      </div>
      <div className={aboutStyles.imgcontainer}>
        <Image
          className={aboutStyles.img}
          src="/a1.jpg"
          alt="a1 img"
          height={250}
          width={350}
        />
        <Image
          className={aboutStyles.img}
          src="/a2.jpg"
          alt="a2 img"
          height={250}
          width={350}
        />
        <Image
          className={aboutStyles.img}
          src="/a3.jpg"
          alt="a3 img"
          height={250}
          width={350}
        />
        <Image
          className={aboutStyles.img}
          src="/a4.jpg"
          alt="a4 img"
          height={250}
          width={350}
        />
        <Image
          className={aboutStyles.img}
          src="/a5.jpg"
          alt="a5 img"
          height={250}
          width={350}
        />
        <Image
          className={aboutStyles.img}
          src="/a6.jpg"
          alt="a6 img"
          height={250}
          width={350}
        />
      </div>

      <h1 className={aboutStyles.h1}>Leadership</h1>
      <p className={aboutStyles.p}>Vision. Conviction. Persistence</p>
      <div className={aboutStyles.foundercontainer}>
        <div className={aboutStyles.founderimg1}>
          <Image src="/Gau-Pic.png" alt="Gaupic" width={150} height={150} />
          <h1>Gaurav Kamath</h1>
          <a
            href="https://www.linkedin.com/in/gaurav-kamath-37658088/"
            target="_blank"
          >
            <i className="fa fa-linkedin" />
            Co-founder & Business Head
          </a>
        </div>
        <div className={aboutStyles.founderimg2}>
          <Image src="/rakesh.png" alt="Rakesh" width={150} height={150} />
          <h1>Rakesh Kothari</h1>
          <a href="https://www.linkedin.com/in/unavailable/ " target="_blank">
            <i className="fa fa-linkedin" />
            Co-founder & Technology Head
          </a>
        </div>
        <div className={aboutStyles.founderimg3}>
          <Image src="/mani.png" alt="mani" width={150} height={150} />
          <h1>Manikanta Nair</h1>
          <a
            href="https://www.linkedin.com/in/manikanta-nair-825982157/"
            target="_blank"
          >
            <i className="fa fa-linkedin" />
            Co-founder & Operations Head
          </a>
        </div>
      </div>
    </>
  );
};

export default aboutus;
