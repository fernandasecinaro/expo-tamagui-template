import { Spinner as TamaguiSpinner, styled } from 'tamagui';

export const Spinner = styled(TamaguiSpinner, {
  color: 'white',
  variants: {
    secondary: {
      true: {
        color: '$primary',
      },
    },
  } as const,
});
