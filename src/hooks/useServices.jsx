import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const axiosPublic = useAxiosPublic();

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service');
            return res.data;
        }
    })
    return [services];
};

export default useServices;