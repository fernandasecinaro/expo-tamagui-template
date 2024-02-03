import React from 'react';
import { GetProps, Button as TamaguiButton, styled } from 'tamagui';

import { Spinner } from './Spinner';

type ButtonProps = GetProps<typeof CustomButton> & { isLoading?: boolean };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, ...props }, ref) => {
    return (
      <CustomButton ref={ref} {...props} disabled={props.disabled || isLoading}>
        {isLoading ? <Spinner size="small" secondary={props.secondary} /> : props.children}
      </CustomButton>
    );
  }
);

const CustomButton = styled(TamaguiButton, {
  name: 'Button',
  backgroundColor: '$primary',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingHorizontal: 70,
  fontSize: 16,
  borderRadius: 10,
  hoverStyle: {
    backgroundColor: '$primaryHover',
  },
  pressStyle: {
    backgroundColor: '$primaryPress',
  },

  variants: {
    secondary: {
      true: {
        backgroundColor: 'transparent',
        color: '$primary',
        borderWidth: 0,
        fontSize: 16,
        hoverStyle: {
          backgroundColor: 'transparent',
          color: '$primaryHover',
        },
        pressStyle: {
          backgroundColor: 'transparent',
          color: '$primaryPress',
        },
      },
    },
  } as const,
});
