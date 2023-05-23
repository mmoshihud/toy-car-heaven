import useTitle from "../../hooks/useTitle";

const AboutPage = () => {
  useTitle("About | Toy Car Heaven");
  return (
    <>
      <div className="container mx-auto">
        <p className="mb-4 text-xl font-semibold">
          At Toy Car Heaven, we are passionate about bringing joy and excitement
          to children and car enthusiasts alike. We offer a wide selection of
          high-quality toy cars that inspire imagination and provide endless
          hours of fun. And we believe that toy cars are more than just
          playthings. They ignite imagination, inspire creativity, and bring joy
          to people of all ages. Our goal is to curate a diverse collection of
          toy cars that cater to different preferences, whether you're a
          collector, a parent looking for a gift, or simply a car enthusiast.
        </p>
        <h1 className="mb-4 text-2xl font-bold">Our Story:</h1>
        <p className="mb-4 text-xl font-semibold">
          Toy Car Heaven was founded with a vision to create a one-stop
          destination for toy car enthusiasts of all ages. As avid car lovers
          ourselves, we understand the thrill and fascination that comes with
          miniature vehicles. We wanted to share that passion by curating a
          diverse range of toy cars that cater to different interests, ages, and
          tastes.
        </p>
        <h1 className="mb-4 text-2xl font-bold">Our Mission:</h1>
        <p className="mb-4 text-xl font-semibold">
          Our mission is to provide a seamless shopping experience for toy car
          enthusiasts, ensuring that every customer finds the perfect vehicle to
          add to their collection. We strive to offer an extensive selection of
          toy cars, including popular brands, classic models, limited editions,
          and unique designs that capture the essence of real cars.
        </p>
        <h1 className="mb-4 text-2xl font-bold">Product Range:</h1>
        <p className="mb-4 text-xl font-semibold">
          Browse through our extensive collection of toy cars, where you'll find
          an array of options to suit every preference. From sleek sports cars
          and powerful muscle cars to rugged off-road vehicles and iconic
          vintage models, we have something for everyone. Our inventory includes
          a variety of scales, from detailed die-cast models to
          remote-controlled cars, ensuring that collectors and hobbyists can
          find their desired replicas.
        </p>
        <h1 className="mb-4 text-2xl font-bold">Usage:</h1>
        <p className="mb-4 text-xl font-semibold">
          Once you have the Toy Car Heaven up and running, you can start
          exploring our extensive collection of toy cars. Add your desired items
          to the cart and proceed to checkout when you're ready to make a
          purchase. If you wish to track your orders or create a wishlist,
          create a user account to access these additional features.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
