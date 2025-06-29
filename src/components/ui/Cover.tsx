import {
  useBreakpointValue, Stack, Text
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function Cover() {
    const displayValue = useBreakpointValue({base: 'small', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#FFFFFF" w="100vw" >
                <Stack bg="#C85062" color="white" px={8} py={100} align="center" justify="space-between">
                    <Text textStyle="3xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePreciousMobile")}</Text>
                    <Text textStyle="xl" whiteSpace="pre-wrap" py={4} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContextMobile")}</Text>
                </Stack>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Stack bg="#FFFFFF" w="100vw" >
                <Stack bg="#C85062" color="white" px={32} py={160} align="center" justify="space-between">
                    <Text textStyle="6xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePrecious")}</Text>
                    <Text textStyle="xl"  whiteSpace="pre-wrap" py={4} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContext")}</Text>
                </Stack>
            </Stack>
        );
    }
}