import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
interface SubscriptionPriceItemProps {
    planName: string;
    priceDetail: string;
    pricePerMonth: string;
}

export default function SubscriptionPriceItem(props: SubscriptionPriceItemProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <Box h={130} w="84vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontWeight="bold" fontFamily='Open Sans, sans-serif'>{props.planName}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.priceDetail}</Text>
                </Flex>
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h={130} w="70vw">
                <Flex direction="column"  gap={8} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontWeight="bold" fontFamily='Open Sans, sans-serif'>{props.planName}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.priceDetail}</Text>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box h={100} w="50vw">
                <Flex gap={8} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" w="200px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.planName}</Text>
                    <Text textStyle="2xl" color="#6D7685" w="100px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.priceDetail}</Text>
                    <Text textStyle="2xl" color="#6D7685" w="100px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{t("Per6Months")}</Text>
                    <Text textStyle="2xl" color="#6D7685" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.pricePerMonth}</Text>
                </Flex>
            </Box>
        );
    }
}