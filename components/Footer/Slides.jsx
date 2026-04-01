import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Slides() {
  return (
    <div className="bg-[#f8fafc] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        
        <h2 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        
        <div className="mt-14 grid md:grid-cols-3 gap-8 items-center">

      
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="text-sm text-gray-500 mt-1">Perfect for getting started</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full py-3 rounded-full text-white text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500">
              Get Started Free
            </button>
          </div>

     
          <div className="relative rounded-2xl p-8 text-left text-white shadow-xl bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 scale-105">

       
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-orange-300 text-gray-800 text-xs px-4 py-1 rounded-full font-medium shadow">
                Most Popular
              </span>
            </div>

            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm opacity-90 mt-1">Best for professionals</p>

            <div className="mt-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm opacity-90">/Month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-white text-indigo-600 text-sm font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
            <p className="text-sm text-gray-500 mt-1">For teams and businesses</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full py-3 rounded-full text-white text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Slides;