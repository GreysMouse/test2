import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TRootState, TDispatch } from './store';

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
