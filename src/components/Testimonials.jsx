
import image1 from "/src/assets/bg-quotes.png";
import image2 from "/src//assets/profile-1.jpg"
import image3 from "/src//assets/profile-2.jpg"
import image4 from "/src//assets/profile-3.jpg"
function Testimonials() {
  return (
    <section className="pb-[350px] ">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={image1} alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          <div className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!
            </p>
            <div className="flex items-center gap-[15px]">
              <img
                src={image2}
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">Ahmed</strong>
                <p className="text-white font-normal text-sm">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!
            </p>
            <div className="flex items-center gap-[15px]">
              <img
                src={image3}
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">Mohamed</strong>
                <p className="text-white font-normal text-sm">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
            <p className="text-white text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!
            </p>
            <div className="flex items-center gap-[15px]">
              <img
                src={image4}
                className="w-[50px] h-[50px] rounded-[50%] object-contain"
              />
              <div>
                <strong className="text-white block mb-[5px]">Eman</strong>
                <p className="text-white font-normal text-sm">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
