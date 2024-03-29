import { FC, ReactNode } from 'react';
import { Stack, Box } from '@mui/material';
import { GUN_POWDER, VANILLA_WHITE } from '@chattie/colors';

const MessagePanelWrapper: FC<{
  borderLeft?: string;
  borderRight?: string;
  className?: string;
  children: ReactNode;
}> = ({ borderLeft = '', borderRight = '', className, children }) => (
  <Stack
    direction="row"
    height="100%"
    justifyContent="space-between"
    className={className}
  >
    <Box
      sx={{ borderRadius: borderLeft, opacity: '35%' }}
      width="5%"
      height="100%"
      bgcolor={GUN_POWDER}
    />
    <Stack
      direction="row"
      alignItems="center"
      width="90%"
      gap={2}
      m={2}
      sx={{ color: VANILLA_WHITE }}
    >
      {children}
    </Stack>
    <Box
      sx={{ borderRadius: borderRight, opacity: '35%' }}
      width="5%"
      height="100%"
      bgcolor={GUN_POWDER}
    />
  </Stack>
);

export default MessagePanelWrapper;
