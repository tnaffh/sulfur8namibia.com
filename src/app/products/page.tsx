import React, { FC } from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/components/SectionPromo1";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/data";
import TabFilters from "@/components/TabFilters";

const ProductsPage: FC = () => {
  return (
    <div className={`nc-PageCollection`}>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">Sulfur8® Hair Care and Styling Products</h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              For more than 60 years Sulfur8® has provided hair care products for a wide variety of hair care applications to suit your individual needs. The
              Sulfur8® line includes shampoos, conditioners, lotions, hair oils, and hair sprays. Sulfur8® products provide anti-dandruff and itch control, help
              soothe dry irritated scalps, help reduce breakage allowing hair to grow longer, and help repair dry damaged hair. We have products that are great
              for styling and maintaining all hair types and are suitable for all ages two and up.
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* TABS FILTER */}
            <TabFilters />

            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <Pagination />
              <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div>
          </main>
        </div>

        {/* === SECTION 5 === */}
        <hr className="border-slate-200 dark:border-slate-700" />

        <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* SUBCRIBES */}
        <SectionPromo1 />
      </div>
    </div>
  );
};

export default ProductsPage;
