import { Box } from 'components';
import { FallingLines } from 'react-loader-spinner';
import { theme } from 'styles/theme';

export const Loader = () => {
  return (
    <Box position="absolute" top="50%" left="50%">
      <FallingLines
        color={theme.color.accent}
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Box>
  );
};
