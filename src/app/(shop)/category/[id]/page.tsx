import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  if (id === "kids") {
    notFound();
  }

  return (
    <div className="">
      <h1>Category</h1>
    </div>
  );
}
