import React from "react";
import mainPoster from "../assets/img/mainposter.jpg";

const MainPage = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center">
      <img
        src={mainPoster}
        alt="메인 포스터"
        className="w-[70%] h-auto self-start mx-auto"
      />
    </section>
  );
};

export default MainPage;
