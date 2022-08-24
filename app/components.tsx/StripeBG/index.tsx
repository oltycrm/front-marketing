import stripe from "./stripe.module.css";
import stripes from "./stripes.module.css";
// import stripes from './pink.module.css';

export function links() {
  return [
    { rel: "stylesheet", href: stripe },
    { rel: "stylesheet", href: stripes },
  ];
}

export function StripeBG() {
  return (
    <div
      className={`StripeGrid mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-2/3 w-96`}
    >
      <div className="backgroundContainer">
        <div className="grid">
          <div className="background"></div>
        </div>
      </div>
      <div className="stripeContainer">
        <div className="grid">
          <div className="stripe"></div>
        </div>
      </div>
    </div>
  );
}
