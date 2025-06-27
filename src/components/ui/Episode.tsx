import {
  useBreakpointValue, Stack, Text
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function Episode() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Stack bg="#FFFFFF" color="white" px={4} py={10} align="center" >
                <Text textStyle="xl"  color="#6D7685"  whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{"~ " + t("devReason") + " ~"}</Text>
                <Text textStyle="lg" marginTop={4} color="#6D7685"  whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode1Mobile")}</Text>
                <Text textStyle="lg" marginTop={4} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode2Mobile")}</Text>
                <Text textStyle="lg" marginTop={4} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode3Mobile")}</Text>
                <Text textStyle="lg"  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode4Mobile")}</Text>
                <Text textStyle="lg" marginTop={4} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode5Mobile")}</Text>
                <Text textStyle="lg"  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode6Mobile")}</Text>
                <Text textStyle="lg" marginTop={4}  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode7Mobile")}</Text>
            </Stack>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Stack bg="#FFFFFF" color="white" px={248} py={50} align="center" >
                <Text textStyle="4xl"  color="#6D7685"  whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{"~ " + t("devReason") + " ~"}</Text>
                <Text textStyle="2xl" marginTop={12} color="#6D7685"  whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode1")}</Text>
                <Text textStyle="2xl" marginTop={4} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode2")}</Text>
                <Text textStyle="2xl" marginTop={12} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode3")}</Text>
                <Text textStyle="2xl"  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode4")}</Text>
                <Text textStyle="2xl" marginTop={12} color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode5")}</Text>
                <Text textStyle="2xl"  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode6")}</Text>
                <Text textStyle="2xl" marginTop={12}  color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("episode7")}</Text>
            </Stack>
        );
    }
}