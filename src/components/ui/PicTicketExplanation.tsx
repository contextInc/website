import {
  useBreakpointValue, 
  Text,
  Box
} from '@chakra-ui/react';

interface SubscriptionExplanationProps {
    content: string;
}

export default function PicTicketExplanation(props: SubscriptionExplanationProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});

    if (displayValue === 'small') {
        return (
            <Box h="136px" w="85vw">
                <Text textStyle="lg" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h="136px" w="85vw">
                <Text textStyle="2xl" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
            </Box>
        );
    } else {
        return (
            <Box h="120px" w="50vw">
                <Text textStyle="2xl" textAlign="left" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
            </Box>
        );
    }
}