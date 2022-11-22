
import axios from "axios";
import {
    useQuery,
} from "@tanstack/react-query";

export const usePosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return data;
        },
    });
}


const getPostById = async (id) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
};

export const usePost = (postId) => {
    return useQuery({
        queryKey: ["post", postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    });
}