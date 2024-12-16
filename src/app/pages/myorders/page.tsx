"use client";

import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Breadcrumb from "@/app/Components/Breadcrumb/Breadcrumb";
import MyOrderCard from "@/app/Components/MyOrdersCard/MyOrdersCard";
import { orders } from "@/app/moks/ordersMock";

export default function OrdersPage() {
  return (
    <div className="bg-base-background min-h-screen">
      <Navbar type="buttonSearch" />

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
