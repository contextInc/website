import {
  Box, Flex, Link, Stack, useBreakpointValue, 
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const displayValue = useBreakpointValue({base: 'small', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#DDDDDD" color="#6D7685" px={4} py={10} align="center"  w="100vw" >
                <Box fontSize={16} cursor="pointer"><Link href="/privacy" color="#6D7685">{t("PrivacyPolicy")}</Link></Box>
                <Box fontSize={16} cursor="pointer"><Link href="/inquiry" color="#6D7685">{t("Contact")}</Link></Box>
                <Box fontSize={16} cursor="pointer"><Link href="/qa" color="#6D7685">{t("QA")}</Link></Box>
                <Box fontSize={16} fontFamily='system-ui, sans-serif'>©2025 context Inc. All Rights Reserved</Box>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Flex as="footer" bg="#DDDDDD" color="#6D7685" px="10vw" py={2} align="center" justify="space-between" w="100vw">
                <Flex gap={8}>
                    <Box fontSize={16} cursor="pointer"><Link href="/privacy" color="#6D7685">{t("PrivacyPolicy")}</Link></Box>
                    <Box fontSize={16} cursor="pointer"><Link href="/inquiry" color="#6D7685">{t("Contact")}</Link></Box>
                    <Box fontSize={16} cursor="pointer"><Link href="/qa" color="#6D7685">{t("QA")}</Link></Box>
                </Flex>
                <Flex direction={"column"} alignItems="flex-start">
                    <Box fontSize={16} fontFamily='system-ui, sans-serif'>©2025 context Inc. All Rights Reserved</Box>
                </Flex>    
            </Flex>
        );
    }
}