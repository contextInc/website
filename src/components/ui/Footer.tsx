import {
  Box, Flex, Stack, useBreakpointValue, 
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#DDDDDD" color="#6D7685" px={4} py={10} align="center" >
                <Box fontSize={16} cursor="pointer">{t("PrivacyPolicy")}</Box>
                <Box fontSize={16} cursor="pointer">{t("Contact")}</Box>
                <Box fontSize={16} fontFamily='system-ui, sans-serif'>©2025 context Inc. All Rights Reserved</Box>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Flex as="footer" bg="#DDDDDD" color="#6D7685" px={56} py={2} align="center" justify="space-between">
                <Flex gap={8}>
                    <Box fontSize={16} cursor="pointer">{t("PrivacyPolicy")}</Box>
                    <Box fontSize={16} cursor="pointer">{t("Contact")}</Box>
                </Flex>
                <Flex direction={"column"} alignItems="flex-start">
                    <Box fontSize={16} fontFamily='system-ui, sans-serif'>©2025 context Inc. All Rights Reserved</Box>
                </Flex>    
            </Flex>
        );
    }
}