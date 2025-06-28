import {
  useBreakpointValue, Stack, Text,
  Flex
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import AppealPoint from './AppealPoint';

export default function ServicePoint() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#FFFFFF" >
                <Stack bg="#C85062" color="white" px={10} py={100} align="center" justify="space-between">
                    <Text textStyle="3xl" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("YourVoicePreciousMobile")}</Text>
                    <Text textStyle="xl" whiteSpace="pre-wrap" py={4} fontWeight="bold" fontFamily='system-ui, sans-serif'>{t("WhatIsContextMobile")}</Text>
                </Stack>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Stack bg="#FFFFFF"  px={56} py={20} align="center" justify="space-between">
                <Text textStyle="3xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("ContextServicePoint")}</Text>
                <Flex  alignItems="flex-start">
                    <AppealPoint appealSentence={t("appeal1")} detailSentence={t("detail1")} />
                    <AppealPoint appealSentence={t("appeal2")} detailSentence={t("detail2")} />
                </Flex>
                <Flex  alignItems="flex-start">
                    <AppealPoint appealSentence={t("appeal3")} detailSentence={t("detail3")} />
                    <AppealPoint appealSentence={t("appeal4")} detailSentence={t("detail4")} />
                </Flex>
                <Flex  alignItems="flex-start">
                    <AppealPoint appealSentence={t("appeal5")} detailSentence={t("detail5")} />
                    <AppealPoint appealSentence={t("appeal6")} detailSentence={t("detail6")} />
                </Flex>
            </Stack>
        );
    }
}