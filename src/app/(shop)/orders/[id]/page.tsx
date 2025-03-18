import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  // TODO: verificar
  // redirect("/")
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Oredn #${id}`} />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                { "bg-red-500": false, "bg-green-700": true }
              )}
            >
              <IoCartOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>
            {/* Items */}
            {productInCart.map((product) => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded w-[100px] h-[100px]"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}

          <div className="bg-white rounded-3xl shadow-2xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-2xl">Alejandro</p>
              <p>Av. Cinco</p>
              <p>Repato Junco</p>
              <p>Barrio alguno</p>
              <p>Cuba</p>
              <p>Cp 10400</p>
              <p>54698575</p>
            </div>

            <div className="w-full rounded h-0.5 mb-10 bg-gray-200" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$200</span>

              <span>Impuesto (15%)</span>
              <span className="text-right">$100</span>

              <span className="mt-5 text-2xl">Total: </span>
              <span className="text-right mt-5 text-2xl">$300</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  { "bg-red-500": false, "bg-green-700": true }
                )}
              >
                <IoCartOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Orden pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
