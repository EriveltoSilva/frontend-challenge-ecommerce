import { formatCurrency, TypeCurrency } from "@/utils/formaterCurrency";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Divider } from "../Diveder";


interface ProductItemProps {
    id: number | string;
    name: string;
    price_in_cents: number;
    image_url: StaticImageData | string;
    category: string;
    created_at: string;
    sales: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, name, price_in_cents, image_url, sales }) => {
    return (
        <article className="bg-[rgba(255,255,255,.4)] rounded-lg">
            <Link href={`/${id}`}>
                <Image src={image_url} alt="Caneca" className="w-full max-h-[80vh] rounded-t-lg" sizes="100vw" width={0} height={0} />
            </Link>
            <div className="px-3 pt-2">
                <Link href={`/${id}`}>
                    <h3 className="text-primary-dark text-base font-light">{name}</h3>
                </Link>
                <Divider />
                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#09090A]">{formatCurrency(price_in_cents, TypeCurrency.AOA)}</span>
                    <span title="Quant. Vendidas" className="text-sm text-white bg-red-600 p-0.5 rounded-lg">{sales}</span>
                </div>
            </div> *
        </article>
    );
}