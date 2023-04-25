import React, { forwardRef, ReactNode, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { Box, BoxProps, Container } from '@/components/atoms';
import { MobileNavigation } from '@/components/molecules';
import { Header } from '@/components/organisms';

interface Props extends BoxProps {
  children: ReactNode;
  overflowProps?: string;
  withContainer?: boolean;
}

export const Layout = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    const {
      children,
      withContainer,
      overflowProps = `hidden`,
      ...rest
    } = props;
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const onNavClick = () => {
      if (isNavOpen) {
        setIsNavOpen(() => false);
      } else {
        setIsNavOpen(() => true);
      }
    };

    const renderBody = (withContainer: boolean = true) => {
      const body = (
        <Box as="main" pt={10}>
          {children}
        </Box>
      );
      if (withContainer) {
        return <Container>{body}</Container>;
      }
      return body;
    };

    return (
      <Box ref={ref} as="section" h="100vh" bg="blue.75" {...rest}>
        <RemoveScroll enabled={isNavOpen}>
          <MobileNavigation isNavOpen={isNavOpen} />
        </RemoveScroll>
        <Header onNavClick={onNavClick} isNavOpen={isNavOpen} />
        <Box as="section" overflow="hidden">
          {renderBody(withContainer)}
        </Box>
      </Box>
    );
  }
);
