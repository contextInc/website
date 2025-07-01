import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

interface CompanyInfoItemProps {
    title: string;
    content: string;
}

export default function CompanyInfoItem(props: CompanyInfoItemProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});

    if (displayValue === 'small') {
        return (
            <Box h={130} w="84vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="xl" color="#6D7685" whiteSpace="pre-wrap" fontWeight="bold" fontFamily='Open Sans, sans-serif'>{props.title}</Text>
                    <Text textStyle="xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h={130} w="70vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontWeight="bold" fontFamily='Open Sans, sans-serif'>{props.title}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box h={100} w="50vw">
                <Flex direction="column"  gap={4} textAlign="left">
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontWeight="bold" fontFamily='Open Sans, sans-serif'>{props.title}</Text>
                    <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
                </Flex>
            </Box>
        );
    }
}