import imgBanner from "../assets/Bannière/img-a-propos.png";
import Banner from "../components/Banner";
import datas from "../assets/data/apropos.json";
import Collapse from "../components/Collapse";
import "../scss/APropos.scss";
import "../scss/Index.scss";

function APropos() {
  return (
    <div className="main-a-propos">
      <Banner cover={imgBanner} />
      <section className="collapses">
        {datas.map((data) => (
          <Collapse key={data.id} title={data.title}>
            <p>{data.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}

export default APropos;
