import hi from "../../../assets/hi.png";
import group from "../../../assets/group.png";
import couple from "../../../assets/couple.png"
import kiwi from "../../../assets/Kiwi.png"

const Speciality = () => {
  return (
    <div className="flex flex-col gap-24 items-center justify-start">
      <div className="flex gap-20">
        <div className="flex flex-col p-4 justify-center items-right">
          <h1 className="text-5xl font-bold">About Us</h1>
          <br />
          <p className="text-xl">
            Great flatmates become great friends. Often they <br />
            become great lifelong friends. That’s why we put
            <br />
            people at the heart of the flat and flatmate
            <br />
            finding process.
          </p>
        </div>
        <div className="p-12">
          <img src={hi} className="w-[320px]" alt="hi" />
        </div>
      </div>

      <div className="flex gap-20 justify-center items-center">
        <div className="p-12">
          <img src={group} className="w-[650px]" alt="group" />
        </div>
        <div className="flex flex-col p-4 justify-center items-right">
          <h1 className="text-5xl font-bold">
            Find a room to fit your<br />lifestyle bubble.
          </h1>
          <br />
          <p className="text-xl">
            Living near to work or study can boost your
            <br />
            health and happiness. Being close to friends and
            <br />
            whanau is important too! We show rooms on a<br />
            map and point out nearby places of interest.
          </p>
        </div>
      </div>
      <div className="flex gap-24">
      <div className="flex flex-col p-4 justify-center items-right">
          <h1 className="text-5xl font-bold">
          Fair, safe and inclusive.
          </h1>
          <br />
          <p className="text-xl">
          Our platform is inclusive and non-discriminatory,
            <br />
            andd our community guidelines support this. We
            <br />
            welcome all gender identities, sexualities, age<br />
            groups, ethnic backgrounds and religions. Pets<br />
            and furry friends are welcome too!
          </p>
        </div>
        <div className="p-12">
          <img src={couple} className="w-[500px]" alt="group" />
        </div>
      </div>
      <div className="flex gap-24">
      <div className="p-12">
          <img src={kiwi} className="w-[500px]" alt="group" />
        </div>
        <div className="flex flex-col p-4 justify-center items-right">
          <h1 className="text-5xl font-bold">
          Kiwi owned.
          </h1>
          <br />
          <p className="text-xl">
          Our service is built and run by a small group of
            <br />
            passionate Kiwis who just wanted to build
            <br />
            something cool and make a difference. We’d love<br />
            to earn a living doing what we do but for now our<br />
            service is completely free. We hope you enjoy<br />
            and help spread the word.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
