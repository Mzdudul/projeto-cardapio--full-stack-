import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';



const fetchFoodData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/foods');
    return response;
}
export function useFoodData() {
        const query = useQuery({
            queryFn: fetchFoodData,
            queryKey: ['foodData'],
            retry: 2
        });
    return {
    ...query,
    data: query.data?.data
    };
}
