import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Toys = (props) => {
  return (
    <>
      <div className="container mx-auto">
        <Tabs>
          <TabList className="react-tabs__tab-list">
            <Tab className="react-tabs__tab">Sports Car</Tab>
            <Tab className="react-tabs__tab">Wagon Car</Tab>
            <Tab className="react-tabs__tab">Stylish Car</Tab>
          </TabList>

          <TabPanel className="react-tabs__tab-panel">
            <div className="container mx-auto grid grid-cols-3 gap-2">
              {props.toys.map((toy) => (
                <div key={toy._id} className="rounded-xl shadow-lg">
                  <img
                    className="w-full rounded-xl"
                    src={toy.photoURL}
                    alt="Product Image"
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{toy.name}</div>
                    <p className="text-base text-gray-700">${toy.price}</p>
                  </div>
                  <div className="px-6 py-4">
                    <Link
                      to={"/toy/" + toy._id}
                      className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {props.toys.map((toy) => (
                <div key={toy._id} className="rounded-xl shadow-lg">
                  <img
                    className="w-full rounded-xl"
                    src={toy.photoURL}
                    alt="Product Image"
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{toy.name}</div>
                    <p className="text-base text-gray-700">${toy.price}</p>
                  </div>
                  <div className="px-6 py-4">
                    <Link
                      to={"/toy/" + toy._id}
                      className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-2">
              {props.toys.map((toy) => (
                <div key={toy._id} className="rounded-xl shadow-lg">
                  <img
                    className="w-full rounded-xl"
                    src={toy.photoURL}
                    alt="Product Image"
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{toy.name}</div>
                    <p className="text-base text-gray-700">${toy.price}</p>
                  </div>
                  <div className="px-6 py-4">
                    <Link
                      to={"/toy/" + toy._id}
                      className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Toys;
