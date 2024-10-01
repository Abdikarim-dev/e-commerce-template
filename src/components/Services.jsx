const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    content: "Free delivery for all orders over $140",
    image: "./services/icon-delivery.svg",
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    content: "Friendly 24/7 customer support",
    image: "./services/icon-customer-service.svg",
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    content: "We reurn money within 30 days",
    image: "./services/icon-secure.svg",
  },
];
const Services = () => {
  return (
    <div className="flex justify-center gap-20 font-poppins pb-[140px]">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#7D8184] flex justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center">
              <img src={service.image} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-sm">{service.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
