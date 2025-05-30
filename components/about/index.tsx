import { Routes } from "@/constants/enums";
import MainHeading from "../main-heading";

async function About() {
  
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"Our story"} title={"About Us"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
              We offer the best car rental services to meet all your needs. Our goal is to provide a safe and easy experience for our customers with a wide range of modern vehicles.
           </p>
          <p>
              Our team is committed to delivering the highest level of service and support around the clock. Thank you for choosing us!
             </p>
          <p>
        We always strive to provide the best car rental experience for our valued customers at all times. </p>
        </div>
      </div>
    </section>
  );
}

export default About;
