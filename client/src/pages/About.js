import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/Aboutus.css"

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 image-container">
          <img
            src="/images/about-our-team-2.png"
            alt="contactus"
            className="image-itself"
          // style={{ width: "100%", width: "40vw", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea omnis laborum eius. Ipsa enim labore numquam repellat ut nihil alias, ea recusandae suscipit. Facilis inventore quisquam tempore labore odit, quod architecto iste autem laboriosam laborum praesentium magni tempora temporibus sed dolorum asperiores! Earum, laboriosam rem dolore quam saepe eaque repellendus.
          </p>
        </div>
      </div>
    </Layout>
    // <Layout title={"About us - Ecommer app"}>
    //   <div className="row contactus ">
    //     <div className="col-md-6 ">
    //       <img
    //         src="/images/about.png"
    //         alt="contactus"
    //         style={{
    //           maxWidth: "60vw",
    //           objectFit: "contain",
    //           maxHeight: "40vh",
    //           width: "100%",
    //         }}
    //       />
    //     </div>
    //     <div className="col-md-4">
    //       <p className="text-justify mt-2">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
    //         officiis obcaecati esse tempore unde ratione, eveniet mollitia,
    //         perferendis eius temporibus dicta blanditiis doloremque explicabo
    //         quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
    //         accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
    //         commodi illum quidem neque tempora nam.
    //       </p>
    //     </div>
    //   </div>
    // </Layout>
  );
};

export default About;
