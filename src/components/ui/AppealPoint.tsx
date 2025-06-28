import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

interface AppealPointProps {
    appealSentence: string;
    detailSentence: string;
    wpoint: number;
    hpoint: number;
}

export default function AppealPoint(props: AppealPointProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});

    if (displayValue === 'small') {
        return (
            <Box bg="pink.100/80" borderColor="#EB5B71" borderRadius={20}  borderWidth={2} w={props.wpoint} h={props.hpoint} zIndex={0} position="relative" mt={-4} >
                <Flex direction="column" px={8} py={4}>
                    <Text textStyle="xl" color="#233452" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.appealSentence}</Text>
                    <Text textStyle="md" color="#000000" marginTop={4} whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.detailSentence}</Text>
                </Flex>
            </Box>
        );
    } else {
        return (
            <Flex>
                <Box w={2}></Box>
                <Box bg="pink.100/80" borderColor="#EB5B71" borderRadius={20}  borderWidth={2} w={props.wpoint} h={props.hpoint} zIndex={0} position="relative" mt={-4} >
                    <Flex direction="column" px={8} py={4}>
                        <Text textStyle="2xl" color="#233452" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.appealSentence}</Text>
                        <Text textStyle="lg" color="#000000" marginTop={12} whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.detailSentence}</Text>
                    </Flex>
                </Box>
            </Flex>
            
        );
    }
}