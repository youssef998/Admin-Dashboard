import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import userData from "../../dummyData";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
    </div>
  );
}

export default Home;
