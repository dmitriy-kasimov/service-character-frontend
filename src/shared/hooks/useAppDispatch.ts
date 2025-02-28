import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/store/config/store.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
