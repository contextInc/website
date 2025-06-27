import {
  Box, Flex, IconButton, Drawer, Portal, useBreakpointValue, CloseButton, Link
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
    const displayValue = useBreakpointValue({base: 'small', md: 'large'});

    if (displayValue === 'small') {
        // モバイル用のヘッダー
        return (
            <Flex as="header" bg="#C85062" color="white" px={5} py={0} align="center" justify="space-between">
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
                                    <Box mb={4}>Home</Box>
                                    <Box mb={4}>About</Box>
                                    <Box mb={4}>Contact</Box>
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
            <Flex as="header" bg="#C85062" color="white" px={56} py={2} align="center" justify="space-between">
                <Flex direction={"column"} alignItems="flex-start">
                    <Link href="/" fontWeight="bold" color="#FFFFFF" fontFamily='system-ui, sans-serif' fontSize={32} >context</Link>
                    <Box fontSize={16} fontFamily='system-ui, sans-serif'>the Last Voice App</Box>
                </Flex>
                {/* PC用ナビゲーション */}
                <Flex gap={6}>
                    <Box cursor="pointer">Home</Box>
                    <Box cursor="pointer">About</Box>
                    <Box cursor="pointer">Contact</Box>
                </Flex>
            </Flex>
        );
    }
}