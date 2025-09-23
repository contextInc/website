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
                <Stack backgroundImage="linear-gradient(to bottom, #EB5B71, rgba(217, 86, 106, 0.85), rgba(200, 80, 98, 0.3))" color="white" padding="8px"  py={100} align="center" justify="space-between">
                    <Text textStyle="3xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePreciousMobile")}</Text>
                    <Text textStyle="xl" whiteSpace="pre-wrap" py={8} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContextMobile")}</Text>
                </Stack>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Stack bg="#FFFFFF" w="100vw" >
                <Stack backgroundImage="linear-gradient(to bottom, #EB5B71, rgba(217, 86, 106, 0.85), rgba(200, 80, 98, 0.3))" color="white" px={32} py={160} align="center" justify="space-between">
                    <Text textStyle="6xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePrecious")}</Text>
                    <Text textStyle="xl"  whiteSpace="pre-wrap" py={8} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContext")}</Text>
                </Stack>
            </Stack>
        );
    }
}