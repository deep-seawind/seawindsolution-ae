import React from 'react';
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import Container from '@/components/common/Container';
import { ShoppingCart, Tag, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/cart", text: "Cart" },
  ];

  return (
    <>
       <HeroSub 
        title="Cart" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
           heroImage="/images/hero/banner-image.avif"
      />

      <section className="bg-gradient-to-b from-gray-50 to-white py-10">
        <Container>
       

           <div className="text-center">
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
           CheckOut
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize  lg:text-[35px]">
        Review & Checkout
          </h2>

          <p className="mt-4 text-pera-dark">
     Secure, transparent and hassle-free checkout experience
          </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-100 text-gray-700 font-semibold">
                <span>Product / Options</span>
                <span>Price / Cycle</span>
              </div>

              {/* Empty Cart */}
              <div className="p-14 text-center border-b">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-[#004aad]" />
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-xl font-semibold">
                  Your cart is empty
                </p>
                <p className="text-gray-500 mb-8">
                  Looks like you haven’t added any services yet
                </p>
                <button className="inline-flex items-center gap-2 bg-[#004aad] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-sm">
                  Browse Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Promo Code */}
              <div className="p-8 bg-gray-50">
                <label className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                  <Tag className="w-4 h-4 text-[#004aad]" /> Apply Promo Code
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-grow border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                  />
                  <button className="bg-[#004aad] hover:bg-black text-white px-8 py-3 rounded-lg transition font-medium">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="bg-white rounded-2xl shadow-md border sticky top-8 overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 bg-[#004aad] text-white text-center font-semibold text-xl">
                Order Summary
              </div>

              <div className="p-8">
                {/* Subtotal */}
                <div className="flex justify-between text-gray-500 mb-6 text-lg">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-700">USD 0.00</span>
                </div>

                <div className="border-t border-dashed my-6"></div>

                {/* Total */}
                <div className="text-center mb-10">
                  <div className="text-4xl font-extrabold text-gray-700 mb-2">
                    USD 0.00
                  </div>
                  <div className="text-gray-600">
                    Total Due Today
                  </div>
                </div>

                {/* Checkout */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg mb-4 transition shadow-sm">
                  Checkout Securely
                </button>

                {/* Continue Shopping */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-lg transition">
                  Continue Shopping
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                 100% Secure Payments
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CartPage;
