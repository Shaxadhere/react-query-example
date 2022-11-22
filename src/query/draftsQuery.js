import axios from "axios";
import {
    useQuery,
} from "@tanstack/react-query";
import { BASE_URL, TOKEN } from "../config/constants/api";

export const useDrafts = () => {
    return useQuery({
        queryKey: ["drafts"],
        queryFn: async () => {
            const { data } = await axios.get(`${BASE_URL}/draft`, {
                headers: {
                    "Content-Type": "aplication/json",
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            return data
        }
    })
}
