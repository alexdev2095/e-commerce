import {
  MobileSlideshow,
  QuantitySelector,
  SizeSelector,
  Slideshow,
} from "@/components";
import { geistMono } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlidesShow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <MobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
        {/* Desktop Slideshow */}
        <Slideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${geistMono.className} antilalesead font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">$ {product.price}</p>
        {/* Selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          availabelSizes={product.sizes}
        />
        {/* "Selector de cantidad"*/}
        <QuantitySelector quantity={product.inStock} />

        {/* button */}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
