import {
  useBreakpointValue, 
  Text,
  Box
} from '@chakra-ui/react';

interface PhilosophyItemProps {
    content: string;
}

export default function PhilosophyItem(props: PhilosophyItemProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});

    if (displayValue === 'small') {
        return (
            <Box h={50} w="84vw">
                <Text textStyle="xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>                
            </Box>
        );
    } else if (displayValue === 'medium') {
        return (
            <Box h={70} w="70vw">
                <Text textStyle="2xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
            </Box>
        );
    } else {
        return (
            <Box h={70} w="50vw">
                <Text textStyle="3xl" color="#6D7685" whiteSpace="pre-wrap" fontFamily='Open Sans, sans-serif'>{props.content}</Text>
            </Box>
        );
    }
}