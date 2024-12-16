"use client";

import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";
import MyOrderCard from "@/app/Components/MyOrdersCard/MyOrdersCard";

const orders = [
  {
    id: 1,
    imageUrl: "/assets/outhers/moks/1.webp",
    title: "Programação em TypeScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis sagittis sem sit amet vehicula. Aenean viverra ligula nec imperdiet tristique. Nulla eleifend ipsum eu aliquam pharetra. Nulla justo ante, pulvinar at consequat a a a  nec, dictum vitae urna. Donec non est et nibh bibendum vehicula. Curabitur gravida tellus in metus rhoncus, sed suscipit nibh maximus. Sed euismod mollis risus, ac ornare nisl dignissim et. Vivamus vitae lorem finibus, convallis odio sed, sagittis est. Vestibulum tempus vel libero non vestibulum. Vivamus scelerisque maximus ante ut imperdiet.",
    category: "TECNOLOGIA DA INFORMAÇÃO",
    cardEnding: "1234",
    installmentValue: 80.0,
    totalValue: 960.0,
  },
  {
    id: 2,
    imageUrl: "/assets/outhers/moks/2.webp",
    title: "Programação em TypeScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis sagittis sem sit amet vehicula. Aenean viverra ligula nec imperdiet tristique. Nulla eleifend ipsum eu aliquam pharetra. Nulla justo ante, pulvinar at consequat a aa a a nec, dictum vitae urna. Donec non est et nibh bibendum vehicula. Curabitur gravida tellus in metus rhoncus, sed suscipit nibh maximus. Sed euismod mollis risus, ac ornare nisl dignissim et. Vivamus vitae lorem finibus, convallis odio sed, sagittis est. Vestibulum tempus vel libero non vestibulum. Vivamus scelerisque maximus ante ut imperdiet.",
    category: "TECNOLOGIA DA INFORMAÇÃO",
    cardEnding: "1234",
    installmentValue: 80.0,
    totalValue: 960.0,
  },
];

export default function OrdersPage() {
  return (
    <div className="bg-base-background min-h-screen">
      <Navbar />

      <div className="px-20 py-4">
        <Breadcrumb title="Meus Pedidos" />

        <h1 className="text-3xl font-baloo font-bold text-base-title mb-6">
          Cursos
        </h1>
        <div>
          {orders.map((order) => (
            <MyOrderCard
              key={order.id}
              id={order.id}
              imageUrl={order.imageUrl}
              title={order.title}
              category={order.category}
              description={order.description}
              cardEnding={order.cardEnding}
              totalValue={order.totalValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
