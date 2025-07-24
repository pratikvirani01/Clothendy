import React from "react";
import "./ReturnExchangePolicy.css";
import Footer from "../../../components/Footer/Footer";

const ReturnExchangePolicy = () => {
  return (
    <div className="Container">
      <div className="aboutTitle">
        <h3 className="aboutText">Return & Exchange Policy </h3>
        <section className="about-container">
          <div className="about-content">
            <h2>Return, Exchange and Cancellation Policy</h2>
            <h2>For Saree, Chaniya Choli & Salwar</h2>
            <p>
              As a policy we do not provide money refund or exchange on any
              product once the products are sold, they can be exchanged if the
              product is defective. For exchange your order parcel opening video
              is compulsory.
            </p>

            <p>
              Defective Package - If you have received the product in a bad
              condition or if the packaging is tampered with, please refuse the
              package. If you receive any defective product, do raise a return
              immediately using support@clothendy.com Please do upload a
              snapshot of the defect.
            </p>

            <p>Once the order is booked the same cannot be cancelled</p>

            <p>
              Clothendy reserves the right to refuse a exchange request, if the
              product is not received in its original condition or is received
              damaged or has been found to be used
            </p>

            <h2>Timeline for Store Credit Request</h2>

            <p>
              Please be aware that exchanges are only possible within 7 days
              including the date of delivery. Any requests beyond this duration
              will not be entertained. The product must be in unused and
              unwashed condition, exactly as received. Please make sure the
              product is folded in the same manner as when it was delivered, and
              all the tags are kept intact The product should have the original
              packaging along with the cloth bag and invoice Please be aware
              that sarees with detached blouse or tasseling done are not
              eligible for exchanges.
            </p>

            <p>
              Clothendy retains the right to decline an exchange request if the
              reasons are deemed invalid or if the product is not in its
              original condition
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnExchangePolicy;
