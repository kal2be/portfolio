import React from "react";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";

const services = [
  {
    title: "Web Development",
    icon: "🌐",
    description:
      "I design and build modern web applications, SaaS platforms, trading dashboards, and scalable APIs using React, Node.js, and Supabase. My focus is performance, clean architecture, and real-time data systems."
  },
  {
    title: "AI Engineering",
    icon: "🤖",
    description:
      "I develop artificial intelligence systems including machine learning models, neural networks, data pipelines, and intelligent automation. I integrate AI into products for prediction, analytics, and decision systems."
  },
  {
    title: "Elixir Engineering",
    icon: "⚡",
    description:
      "I build highly scalable and fault-tolerant backend systems using Elixir and the BEAM ecosystem, ideal for real-time applications, distributed systems, and high-throughput platforms."
  },
  {
    title: "MQL5 Algorithmic Trading",
    icon: "📈",
    description:
      "I develop advanced MetaTrader 5 Expert Advisors (EAs), automated trading bots, and trading infrastructure using MQL5 with strict risk management, volatility filters, and market structure logic."
  },
  {
    title: "Quantitative Trading Research",
    icon: "📊",
    description:
      "I research mathematical trading strategies using statistics, stochastic processes, regime detection models, and machine learning to identify profitable opportunities in financial markets."
  },
  {
    title: "Trading Infrastructure & Backtesting Systems",
    icon: "🧠",
    description:
      "I build institutional-grade trading infrastructure including backtesting engines, strategy simulators, real-time market data pipelines, and quantitative research platforms."
  }
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Service = () => {
  return (
    <div className="wrap relative text-white overflow-hidden">
    <section
      id="services"
      className=" lg:my-20 my-12 text-white overflow-hidden"
    >
      
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[400px] h-[800px] border border-blue-500 rounded-full absolute -top-40 -left-40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-[700px] h-[700px] border border-purple-500 rounded-full absolute top-20 right-[-200px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl mt-12 font-bold lg:mb-20 mb-12"
        >
          My Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-400"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

    <Footer/>
    </div>



  );
};

export default Service;