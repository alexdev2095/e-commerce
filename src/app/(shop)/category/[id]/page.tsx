import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProduct = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = seedProduct.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title="Tienda"
        subtitle={`Artículos para ${labels[id]}`}
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
