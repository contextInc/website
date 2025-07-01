import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

interface PrivacyPolicyItemTwoProps {
    height: number;
    numberString: string;
    content: string;
}

export default function PrivacyPolicyItemThree(props: PrivacyPolicyItemTwoProps) {
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
            <Box h={props.height + "px"} w="77vw">
                <Flex  px={8} gap={0} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.numberString}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>. </Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box h={props.height + "px"} w="50vw">
                <Flex  px={8} gap={0} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.numberString}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>. </Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    }
}