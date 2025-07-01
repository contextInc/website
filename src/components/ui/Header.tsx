import {
  Box, Flex, IconButton, Drawer, Portal, useBreakpointValue, CloseButton, Link
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const displayValue = useBreakpointValue({base: 'small', lg: 'large'});
    const { t } = useTranslation();

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Flex as="header" bg="#C85062" color="white" px="4vw" py={0} align="center" justify="space-between" w="100vw">
                <Flex direction={"column"} alignItems="flex-start">
                    <Link href="/" fontWeight="bold" color="#FFFFFF" fontFamily='system-ui, sans-serif' fontSize={32} >context</Link>
                    <Box fontSize={16} fontFamily='system-ui, sans-serif'>the Last Voice App</Box>
                </Flex>
                {/* モバイル用ドロワー */}
                <Drawer.Root placement="start">
                    <Drawer.Trigger>
                        <IconButton variant="ghost" aria-label="Open menu" >
                            <FaBars />
                        </IconButton>
                    </Drawer.Trigger>
                    <Portal>
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title>Menu</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <Box mb={4}><Link href="/"  color="#FFFFFF" fontSize={22} >{t("HOME")}</Link></Box>
                                    <Box mb={4}><Link href="/service"  color="#FFFFFF" fontSize={22} >{t("SERVICE")}</Link></Box>
                                    <Box mb={4}><Link href="/howtouse"  color="#FFFFFF" fontSize={22} >{t("HOWTOUSE")}</Link></Box>
                                    <Box mb={4}><Link href="/price"  color="#FFFFFF" fontSize={22} >{t("PRICE")}</Link></Box>
                                    <Box mb={4}><Link href="/security"  color="#FFFFFF" fontSize={22} >{t("SECURITY")}</Link></Box>
                                    <Box mb={4}><Link href="/company"  color="#FFFFFF" fontSize={22} >{t("ABOUT")}</Link></Box>
                                </Drawer.Body>
                                <Drawer.CloseTrigger>
                                    <CloseButton size='sm' />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Flex>
        );
    } else {
        // pcおよびタブレット用のヘッダー
        return (
            <Flex as="header" bg="#C85062" color="white" px="10vw" py={2} align="center" justify="space-between" w="100vw">
                <Flex direction={"column"} alignItems="flex-start">
                    <Link href="/" fontWeight="bold" color="#FFFFFF" fontFamily='system-ui, sans-serif' fontSize={32} >context</Link>
                    <Box fontSize={16} fontFamily='system-ui, sans-serif'>the Last Voice App</Box>
                </Flex>
                {/* PC用ナビゲーション */}
                <Flex gap={12}>
                    <Link href="/"  color="#FFFFFF" fontSize={22} >{t("HOME")}</Link>
                    <Link href="/service"  color="#FFFFFF" fontSize={22} >{t("SERVICE")}</Link>
                    <Link href="/howtouse"  color="#FFFFFF" fontSize={22} >{t("HOWTOUSE")}</Link>
                    <Link href="/price"  color="#FFFFFF" fontSize={22} >{t("PRICE")}</Link>
                    <Link href="/security"  color="#FFFFFF" fontSize={22} >{t("SECURITY")}</Link>
                    <Link href="/company"  color="#FFFFFF" fontSize={22} >{t("ABOUT")}</Link>
                </Flex>
            </Flex>
        );
    }
}