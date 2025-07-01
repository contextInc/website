import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

interface PrivacyPolicyItemOneProps {
    content: string;
}

export default function PrivacyPolicyItemFour(props: PrivacyPolicyItemOneProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});

    if (displayValue === 'small') {
        return (
            <Box h={130} w="84vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h={20} w="77vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box h={20} w="50vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    }
}