"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  MessageCircle,
  Database,
  ShoppingCart,
  Sheet,
  Globe,
} from "lucide-react";
import Card from "./ui/Card";
import CardContent from "./ui/CardContent";
import { FaWhatsapp, FaShoppingCart, FaDatabase  } from "react-icons/fa";
import { SiShopify, SiGooglesheets, SiGoogletranslate   } from "react-icons/si";

export default function FeaturesSection({translations} : {translations: any}) {
  const features = [
    {
      title: translations.cards[0].title,
      description: translations.cards[0].description,
      icon: FaWhatsapp,
    },
    {
      title: translations.cards[1].title,
      description: translations.cards[1].description,
      icon: SiShopify,
    },
    {
      title: translations.cards[2].title,
      description: translations.cards[2].description,
      icon: FaShoppingCart,
    },
    {
      title: translations.cards[3].title,
      description: translations.cards[3].description,
      icon: SiGooglesheets,
    },
    {
      title: translations.cards[4].title,
      description: translations.cards[4].description,
      icon: FaDatabase,
    },
    {
      title: translations.cards[5].title,
      description: translations.cards[5].description,
      icon: SiGoogletranslate,
    },
  ];

  return (
    <section className="w-full py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          {translations.title}
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          {translations.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100"
                icon={<feature.icon />}
              >
                <CardContent
                  title={feature.title}
                  description={feature.description}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
