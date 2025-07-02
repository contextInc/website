import {
  useBreakpointValue, 
  Text,
  Box,
  Stack,
  Separator,
  Image
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import CompanyInfoItem from './CompanyInfoItem';
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
    const { t } = useTranslation();

    if (displayValue === 'small') {
        return (
            <>
                <Stack bg="#FFFFFF" py={120} alignItems="center" w="100vw" >
                    <Text textStyle="2xl" marginBottom={10} color="#C85062" whiteSpace="pre-wrap"  fontFamily='Open Sans, sans-serif'>{t("CompanyInfo")}</Text>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                    <Box w="84vw" >
                        <CompanyInfoItem title={t("CompanyName")} content={t("contextInc")} />
                        <CompanyInfoItem title={t("CEO")} content={t("KengoMatsumoto")} />
                        <CompanyInfoItem title={t("Established")} content={t("EstablishedDate")} />
                        <CompanyInfoItem title={t("Capital")} content={t("CapitalDetail")} />
                        <CompanyInfoItem title={t("CompanyAddress")} content={t("AddressDetail")} />
                        <CompanyInfoItem title={t("BusinessDescription")} content={t("BusinessDescriptionDetail")} />
                    </Box>
                    <Separator color="#000000" width="84vw" height={2} marginBottom={4} />
                </Stack>
            </>
        );
    } else if (displayValue === 'medium') {
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
                    <Image src={Point3} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 4) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point4} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 5) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point5} alt="Appeal Mark" width="64px" height="auto" />
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
                    <Image src={Point3} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 4) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point4} alt="Appeal Mark" width="64px" height="auto" />
                </Box>
            );
        } else if (props.appealNum === 5) {
            return (
                <Box marginBottom="32px"  justifyItems="center">
                    <Image src={Point5} alt="Appeal Mark" width="64px" height="auto" />
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