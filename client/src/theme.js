import { theme } from '@chakra-ui/core';

const customTheme = {
	...theme,
	fonts: {
		poppins: 'Poppins, sans-serif',
		berkshire: 'Berkshire Swash, serif',
		montserrat: 'Montserrat, sans-serif',
		inter: 'Inter, sans-serif',
	},
	colors: {
		...theme.colors,
		indigo: '#ebf4ff',
	},
};

export default customTheme;
