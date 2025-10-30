import axios from "axios";
import type { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';



const postFoodData = async (data: FoodData) => {
    return axios.post(`${API_URL}/foods`, data);
}
export function useFoodDataMutate() {

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postFoodData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['foodData'] });
        },
        onError: (err: any) => {
        console.error("Erro ao criar produto:", err.response?.data || err.message);
    }
    });
    return mutate;
}