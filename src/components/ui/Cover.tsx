import {
  useBreakpointValue, Stack, Text
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function Cover() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#C85062" color="white" px={10} py={100} align="center" justify="space-between">
                <Text textStyle="3xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePreciousMobile")}</Text>
                <Text textStyle="xl" whiteSpace="pre-wrap" py={4} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContextMobile")}</Text>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Stack bg="#C85062" color="white" px={56} py={250} align="center" justify="space-between">
                <Text textStyle="6xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePrecious")}</Text>
                <Text textStyle="xl"  whiteSpace="pre-wrap" py={4} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContext")}</Text>
            </Stack>
        );
    }
}