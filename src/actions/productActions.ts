import { FilterType } from "@/types/filter-types";
import axios from "axios";
import { API_URL } from "@/constants/api";
import { Product } from "@/types/product-types";
import { PriorityType } from "@/types/priority-types";
import { makeQuery } from "@/utils/actions/functions";


export const getFilteredProducts = async (filterType: FilterType, priority:PriorityType, search:string):Promise<Product[]> => {
    try {
        const data = await axios.post(API_URL, { query: makeQuery(filterType, priority) } );
        if (search)
            return data?.data.data.allProducts.filter((product:Product) => product.name.toLowerCase().includes(search.toLowerCase()));
        return data?.data?.data?.allProducts;
    } catch (error) {
        throw error;
    }
}