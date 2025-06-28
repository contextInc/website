import {
  useBreakpointValue, 
  Box
} from '@chakra-ui/react';
import '@/i18n';

interface AppealPointProps {
    appealSentence: string;
    detailSentence: string;
}

export default function AppealPoint(props: AppealPointProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Box color="#00000">{props.appealSentence}</Box>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Box color="#00000">{props.appealSentence}</Box>
        );
    }
}