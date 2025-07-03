import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
interface SubscriptionPriceItemProps {
    ticketNum: number;
    ticketDetail: string;
    // pricePerTicket: string;
}

export default function VoiceTicketPriceItem(props: SubscriptionPriceItemProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <Box h="60px" w="85vw">
                <Flex gap={8} textAlign="left">
                    <Text textStyle="lg" color="#6D7685" w="160px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketNum + t("Piece")}</Text>
                    <Text textStyle="lg" color="#6D7685" w="160px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketDetail}</Text>
                    {/* <Text textStyle="lg" color="#6D7685" w="200px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.pricePerTicket}</Text> */}
                    {/* <Text textStyle="lg" color="#6D7685" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.pricePerMonth}</Text> */}
                </Flex>
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h={100} w="85vw">
                <Flex gap={8} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" w="300px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketNum + t("Piece")}</Text>
                    <Text textStyle="2xl" color="#6D7685" w="200px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketDetail}</Text>
                    {/* <Text textStyle="2xl" color="#6D7685" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.pricePerTicket}</Text> */}
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box h="60px" w="50vw">
                <Flex gap={8} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" w="300px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketNum + t("Piece")}</Text>
                    <Text textStyle="2xl" color="#6D7685" w="200px" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.ticketDetail}</Text>
                    {/* <Text textStyle="2xl" color="#6D7685" fontWeight="bold" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.pricePerTicket}</Text> */}
                </Flex>
            </Box>
        );
    }
}