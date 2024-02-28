"use client";
import React from "react";
import { handleClick } from "./ButtonWhatsApp/js";

export default function ButtonFaleConosco() {
  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 bg-[#0B1B2B] rounded-md text-gray-100 hover:opacity-95"
    >
      Fale conosco
    </button>
  );
}
