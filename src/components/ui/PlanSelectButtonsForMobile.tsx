import {
  Text,
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
            <Box h="80px" w="85vw">
                <Button size="sm" colorPalette="pink">{t("LightPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
            </Box>
        );
    } else if (props.selectedPlan === 'standard') {
        return (
            <Box h="80px" w="85vw">
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                <Button size="sm" colorPalette="pink">{t("StandardPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
            </Box>
        );
    } else if (props.selectedPlan === 'plenty') {
        return (
            <Box h="80px" w="85vw">
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                <Button size="sm" colorPalette="pink">{t("PlentyPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('max')}>{t("MaxPlan")}</Button>
            </Box>
        );
    }
    else {
        return (
            <Box h="80px" w="85vw">
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('light')}>{t("LightPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('standard')}>{t("StandardPlan")}</Button>
                <Button size="sm" colorPalette="gray" onClick={() => props.setSelectedPlan('plenty')}>{t("PlentyPlan")}</Button>
                <Button size="sm" colorPalette="pink" >{t("MaxPlan")}</Button>
            </Box>
        );
    }    
}