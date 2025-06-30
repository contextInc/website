import {
  useBreakpointValue, 
  Text,
  Box,
  Flex
} from '@chakra-ui/react';

export default function SecurityAppeal2() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});

    if (displayValue === 'small') {
        return (
            <></>
        );
    } else {
        return (
            <></>
        );
    }
}