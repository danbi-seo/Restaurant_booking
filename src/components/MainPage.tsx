import React from "react";
import mainPoster from "../assets/img/main_poster.jpg";
import mainPoster2 from "../assets/img/main_poster2.jpeg";

const MainPage = () => {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col justify-center ">
      <img
        src={mainPoster}
        alt="메인 포스터"
        className="w-[60%] h-auto self-start mx-auto"
      />
      <img
        src={mainPoster2}
        alt="메인 포스터"
        className="w-[100%] h-auto self-start mx-auto"
      />
    </section>
  );
};

export default MainPage;
