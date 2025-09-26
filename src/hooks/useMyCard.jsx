import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useMyCard = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: myCard = [], isLoading, refetch } = useQuery({
        queryKey: ['my-card'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mtyCard?email=${user.email}`);
            return res.data;
        }
    })

    return [myCard, isLoading, refetch];
};

export default useMyCard;