"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimateFeaturedImage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative w-full h-[50vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Welcome to Our Website
          </h1>
        </motion.div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
