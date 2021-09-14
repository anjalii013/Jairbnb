import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Cards from "./Cards";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Cards
          src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80"
          title="Online Exeriences"
          description="Unique activities we can do togerther, led by a world of hosts."
        />
        <Cards
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          title="Unique stays"
          description="Spacesthat are more than just a place to sleep"
        />
        <Cards
          src="https://images.unsplash.com/photo-1624520980555-92b83e7f7d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Cards
          src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80"
          title="3 Bedroom flat in Lonavla"
          description="Enjoy the amazing sights of Lonavla with this stunning penthouse"
          price="&#8377;4000/night"
        />
        <Cards
          src="https://images.unsplash.com/photo-1600256698889-61ff2cd73cd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          title="1 Bedroom hut"
          description="Suerhost with a stunning view of watterfall in South Goa"
          price="&#8377;2000/night"
        />
        <Cards
          src="https://images.unsplash.com/photo-1607195395712-ad400307d52c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          title="2 Bedroom apartment"
          description="Relax and enjoy the breathtaking view of beachside in North Goa"
          price="&#8377;3500/night"
        />
      </div>
    </div>
  );
}

export default Home;
