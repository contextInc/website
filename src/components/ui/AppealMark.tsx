import {
  useBreakpointValue, 
  Box,
  Image
} from '@chakra-ui/react';
import '@/i18n';
import Point1 from '../../assets/point1.png';
import Point2 from '../../assets/point2.png';
import Point3 from '../../assets/point3.png';
import Point4 from '../../assets/point4.png';
import Point5 from '../../assets/point5.png';
import Point6 from '../../assets/point6.png';
import Point7 from '../../assets/point7.png';

interface AppealMarkProps {
    appealNum: number;
}

export default function AppealMark(props: AppealMarkProps) {
    const displayValue = useBreakpointValue({base: 'small', md: 'medium',  lg: 'large'});

    if (displayValue === 'small') {
        if (props.appealNum === 1) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point1} alt="Appeal Mark" width="48px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 2) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point2} alt="Appeal Mark" width="48px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 3) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point3} alt="Appeal Mark" width="144px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 4) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point4} alt="Appeal Mark" width="144px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 5) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point5} alt="Appeal Mark" width="88px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 6) {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point6} alt="Appeal Mark" width="48px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else {
            return (
                <Box marginBottom="16px"  justifyItems="center">
                    <Image src={Point7} alt="Appeal Mark" width="48px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        }
    } else if (displayValue === 'medium') {
        if (props.appealNum === 1) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point1} alt="Appeal Mark" width="64px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 2) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point2} alt="Appeal Mark" width="64px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 3) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point3} alt="Appeal Mark" width="192px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 4) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point4} alt="Appeal Mark" width="192px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 5) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point5} alt="Appeal Mark" width="192px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else if (props.appealNum === 6) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point6} alt="Appeal Mark" width="64px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        } else {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point7} alt="Appeal Mark" width="64px" height="auto" mx="auto" maxW="100%" />
                </Box>
            );
        }
    } else {
        if (props.appealNum === 1) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point1} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 2) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point2} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 3) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point3} alt="Appeal Mark" width="192px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 4) {
            return (
                <Box marginBottom="32px" marginTop="8px" justifyItems="center">
                    <Image src={Point4} alt="Appeal Mark" width="216px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 5) {
            return (
                <Box marginBottom="32px" marginTop="8px" justifyItems="center">
                    <Image src={Point5} alt="Appeal Mark" width="120px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 6) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point6} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point7} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        }
    }
}