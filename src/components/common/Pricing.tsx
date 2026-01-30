"use client";
import { useReducer } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Pricing = () => {
    interface State {
        planType: string;
        duration: string;
        basicPrice: string;
        standardPrice: string;
        premiumPrice: string;
    }

    interface Action {
        type: "Monthly" | "Yearly";
        payload: {
            duration: string;
            basicPrice: string;
            standardPrice: string;
            premiumPrice: string;
        };
    }

    const initialTabConfig: State = {
        planType: "Monthly",
        duration: "per month",
        basicPrice: "99",
        standardPrice: "249",
        premiumPrice: "499",
    };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "Monthly":
            case "Yearly":
                return { ...state, ...action.payload, planType: action.type };
            default:
                return state;
        }
    }

    const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);

    return (
        <section className=" overflow-hidden py-14 lg:py-18 xl:py-10 bg-prim-light">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                <div className="text-center">
                    <div className="text-center">
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
           Pricing
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize  lg:text-[35px]">
      Pricing Plan
          </h2>

          <p className="mt-4 text-pera-dark">
       Choose a plan that fits your goals and budget
          </p>
        </div>

                    <div className="text-center mt-10">
                        <div className="inline-flex items-center rounded-xl p-2 shadow-lg">
                            <button
                                className={`py-3 px-7 rounded-xl ${tabConfig.planType === "Monthly"
                                    ? "bg-dark text-white"
                                    : "bg-transparent text-black"
                                    }`}
                                onClick={() =>
                                    dispatch({
                                        type: "Monthly",
                                        payload: {
                                            duration: "per month",
                                            basicPrice: "99",
                                            standardPrice: "249",
                                            premiumPrice: "499",
                                        },
                                    })
                                }
                            >
                                Monthly
                            </button>
                            <button
                                className={`py-3 px-7 rounded-xl ${tabConfig.planType === "Yearly"
                                    ? "bg-dark text-white"
                                    : "bg-transparent text-black"
                                    }`}
                                onClick={() =>
                                    dispatch({
                                        type: "Yearly",
                                        payload: {
                                            duration: "per year",
                                            basicPrice: "299",
                                            standardPrice: "599",
                                            premiumPrice: "899",
                                        },
                                    })
                                }
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">

                    <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-22 font-bold text-start text-black font-chakrapetch">Basic Plan</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona">${tabConfig.basicPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            Through a combination of our data-driven insights and innovative
                            approaches.
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            <p className="text-dark flex gap-1">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Access to core services
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Limited customer support (email)
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                1 project per month
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Basic reporting and analytics
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Standard templates and tools
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Basic performance tracking
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            Choose package
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>

                    <div className="bg-dark pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition text-white">
                        <h3 className="text-22 font-bold text-start text-white font-chakrapetch">Standard Plan</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona text-white">${tabConfig.standardPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            Through a combination of our data-driven insights and innovative approaches.
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            <p className="text-white flex gap-1">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                All features in Basic Plan
                            </p>
                            <p className="flex gap-1 text-white cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Priority customer support
                            </p>
                            <p className="flex gap-1 text-white cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Up to 3 projects per month
                            </p>
                            <p className="flex gap-1 text-white cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Monthly performance reviews
                            </p>
                            <p className="flex gap-1 text-white cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Collaboration tools for team
                            </p>
                            <p className="flex gap-1 text-white cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Custom templates
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className='text-black bg-white h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            Choose package
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>

                    <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-22 font-bold text-start text-black font-chakrapetch">Premium Plan</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona">${tabConfig.premiumPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            Through a combination of our data-driven insights and innovative approaches.
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            <p className="text-dark flex gap-1">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                All features in Standard Plan
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Dedicated account manager
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Tailored strategy sessions
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Quarterly performance audits
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                Priority support
                            </p>
                            <p className="flex gap-1 text-dark cursor-pointer">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                24/7 emergency service
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            Choose package
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
