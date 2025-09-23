import {
  Box,
  Button
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import '@/i18n';


interface PlanSelectButtonsForMobileProps {
    selectedPlan: string;
    setSelectedPlan: (plan: string) => void;
}

export default function PlanSelectButtonsForMobile(props: PlanSelectButtonsForMobileProps) {
    const { t } = useTranslation();
    if (props.selectedPlan === 'light') {
        return (
            <Box h="96px" w="85vw" placeItems={"center"} justifyContent={"center"}>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" colorPalette="pink">{t("LightPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                </Box>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
                </Box>
                
            </Box>
        );
    } else if (props.selectedPlan === 'standard') {
        return (
            <Box h="96px" w="85vw" placeItems={"center"} justifyContent={"center"}>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                    <Button size="sm" width="152px" colorPalette="pink">{t("StandardPlan")}</Button>
                </Box>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
                </Box>
            </Box>
        );
    } else if (props.selectedPlan === 'plenty') {
        return (
            <Box h="96px" w="85vw" placeItems={"center"} justifyContent={"center"}>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                </Box>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" colorPalette="pink">{t("PlentyPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
                </Box>
                
            </Box>
        );
    }
    else {
        return (
            <Box h="96px" w="85vw" placeItems={"center"} justifyContent={"center"}>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                </Box>
                <Box flexDirection={"row"} display="flex" gap={4} >
                    <Button size="sm" width="152px" bg="white" color="black" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                    <Button size="sm" width="152px" colorPalette="pink" >{t("MaxPlan")}</Button>
                </Box>
            </Box>
        );
    }    
}