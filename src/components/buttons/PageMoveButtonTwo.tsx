import {
  useBreakpointValue, 
  Button
} from '@chakra-ui/react';
import '@/i18n';

interface PageMoveButtonProps {
    toRef: string;
    buttonLabel: string;
}

export default function PageMoveButtonTwo(props: PageMoveButtonProps) {
    const displayValue = useBreakpointValue({base: 'small', lg: 'large'});

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Button asChild fontSize={18} fontWeight={600} w="160px" h="48px" marginTop={12} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' bg="#C85062" color="white" borderColor="#C85062" borderWidth={2} >
                <a href={props.toRef}>{props.buttonLabel}</a>
            </Button>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Button asChild fontSize={18} fontWeight={600} w="200px" h="48px" marginTop={20} variant="outline" boxShadow="sm" fontFamily='Open Sans, sans-serif' bg="#C85062" color="white"  borderColor="#C85062" borderWidth={2} >
                <a href={props.toRef}>{props.buttonLabel}</a>
            </Button>
        );
    }
}