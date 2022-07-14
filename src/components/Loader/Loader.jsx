import Box from 'components/Box';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItem="center" mt={4}>
      <Oval
        ariaLabel="loading-indicator"
        height={75}
        width={75}
        strokeWidth={5}
        color="red"
        secondaryColor="blue"
      />
    </Box>
  );
}
