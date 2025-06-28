import {
  useBreakpointValue, Stack, Text,
  Button
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

interface PageMoveButtonProps {
    toRef: string;
    buttonLabel: string;
}

export default function pageMoveButton(props: PageMoveButtonProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Button asChild fontSize={18} w="160px" h="48px" marginTop={12} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                <a href={props.toRef}>{props.buttonLabel}</a>
            </Button>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Button asChild fontSize={18} w="200px" h="48px" marginTop={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' color="#C85062" borderColor="#C85062" borderWidth={2} _hover={{ bg: "#C85062", color: "white" }} _active={{ bg: "#C85062", color: "white" }}>
                <a href={props.toRef}>{props.buttonLabel}</a>
            </Button>
        );
    }
}