import { FC, useEffect } from 'react';
import { AppImage, Skeleton, Slider, Text, VStack } from '@project-1114/ui-kit';
import { getInheritance } from '../model/selectors/editInheritanceSelectors.ts';
import { useSelector } from 'react-redux';
import { TInheritance } from '../model/types/EditInheritanceSchema.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { editInheritanceActions } from '../model/slices/editInheritanceSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AppearanceFeatureItem } from '@/shared/components/AppearanceFeatureItem';

export const EditInheritance: FC = () => {
    const inheritance = useSelector(getInheritance);
    const dispatch = useAppDispatch();

    const handleChangeInheritanceParam = (
        param: keyof TInheritance,
        value: number,
    ) => {
        dispatch(editInheritanceActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TInheritance>('f:c:editInheritance', inheritance);
    }, [inheritance]);

    const FatherSlides = new Array(20).fill(null).map((_, index) => (
        <SwiperSlide
            key={index}
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <AppImage
                src={`https://cdn-ra3.ragemp.su/cloud/img/parents/${index}.png`}
                alt={'Widgets'}
                fallback={<Skeleton width={256} height={256} border={'5%'} />}
                decoding={'async'}
            />
        </SwiperSlide>
    ));

    const MotherSlides = new Array(20).fill(null).map((_, index) => (
        <SwiperSlide
            key={index}
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <AppImage
                src={`https://cdn-ra3.ragemp.su/cloud/img/parents/${index + 21}.png`}
                alt={'Widgets'}
                fallback={<Skeleton width={256} height={256} border={'5%'} />}
                decoding={'async'}
            />
        </SwiperSlide>
    ));

    return (
        <VStack gap={'l'} align={'center'} max>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Father</Text>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) => console.log(swiper)}
                    style={{ width: '100%' }}
                >
                    {FatherSlides}
                </Swiper>
            </VStack>
            <AppearanceFeatureItem
                title={'Skin father'}
                slider={
                    <Slider
                        value={inheritance.skinFather}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinFather', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                }
            />
            <VStack gap={'xs'} align={'start'} max>
                <Text>Mother</Text>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) => console.log(swiper)}
                    style={{ width: '100%' }}
                >
                    {MotherSlides}
                </Swiper>
            </VStack>

            <AppearanceFeatureItem
                title={'Skin mother'}
                slider={
                    <Slider
                        value={inheritance.skinMother}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinMother', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                }
            />

            <AppearanceFeatureItem
                title={'Face mix'}
                from={'Father'}
                to={'Mother'}
                slider={
                    <Slider
                        value={inheritance.faceMix}
                        onChange={(value) =>
                            handleChangeInheritanceParam('faceMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                    />
                }
            />

            <AppearanceFeatureItem
                title={'Skin mix'}
                from={'Father'}
                to={'Mother'}
                slider={
                    <Slider
                        value={inheritance.faceMix}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                    />
                }
            />
        </VStack>
    );
};
