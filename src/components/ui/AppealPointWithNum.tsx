import {
  useBreakpointValue, 
  Box,
  Flex
} from '@chakra-ui/react';
import '@/i18n';
import AppealPoint from './AppealPoint';
import '@/i18n';

interface AppealPointWithNumProps {
    num: number;
    appealSentence: string;
    detailSentence: string;
    wpoint?: number;
    hpoint?: number;
}

export default function AppealPointWithNum(props: AppealPointWithNumProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium', lg: 'large'});

    if (displayValue === 'small') {
        return (
            <Flex direction="column" px={4} py={2}>
                <Box borderRadius={20} bg="#C85062" color="#FFFFFF" w={10} h={10} fontSize={20} padding={1}  zIndex={1} >{props.num}</Box>
                <AppealPoint pointNum={props.num} appealSentence={props.appealSentence} detailSentence={props.detailSentence} wpoint={props.wpoint ? props.wpoint : 0} hpoint={props.hpoint ? props.hpoint : 0} />
            </Flex>
        );
    } else if (displayValue === 'medium') {
        return (
            <Flex direction="column" px={4} py={4}>
                <Box borderRadius="25px" bg="#C85062" color="#FFFFFF" w="50px" h="50px" fontSize={30} textAlign="center" justifyContent="center" paddingRight="1px" paddingTop="1px" zIndex={1} >{props.num}</Box>
                <AppealPoint pointNum={props.num} appealSentence={props.appealSentence} detailSentence={props.detailSentence} wpoint={480} hpoint={props.hpoint ? props.hpoint : 0} />
            </Flex>
        );
    } else {
        return (
            <Flex direction="column" px={4} py={4}>
                <Box borderRadius="25px" bg="#C85062" color="#FFFFFF" w="50px" h="50px" fontSize={30} textAlign="center" justifyContent="center" paddingRight="1px" paddingTop="1px" zIndex={1} >{props.num}</Box>
                <AppealPoint pointNum={props.num} appealSentence={props.appealSentence} detailSentence={props.detailSentence} wpoint={480} hpoint={428} />
            </Flex>
        );
    }
}