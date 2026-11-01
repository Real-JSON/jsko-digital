import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { brands } from '../../data/brands';

// 1. Global CSS variables
const GlobalStyles = createGlobalStyle`
  :root {
    --width: 100px;
    --height: 50px;
    --quantity: 8;
    --ani-time: 15s;
  }
`;

// 2. Keyframes
const autoRun = keyframes`
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
`;

// 3. Styled components
const Slider = styled.div`
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 10% 90%,
        transparent
    );

    &:hover .item {
        animation-play-state: paused !important;
    }
`;

const List = styled.div`
    display: flex;
    min-width: calc(var(--width) * var(--quantity));
    width: 100%;
    position: relative;
`;

const Item = styled.div`
    display: flex;
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: ${autoRun} var(--ani-time) linear infinite;
    animation-delay: calc(
        (var(--ani-time) / var(--quantity)) * (var(--position) - 1) - 20s
    ) !important;

    img {
        width: 100%;
    }
`;

const Marquee = () => {
    return (
        <>
            <GlobalStyles />
            <Slider className="slider mt-20">
                <List className="list">
                    {brands.map((brand, index) => (
                        <Item
                            className="item"
                            key={index}
                            style={{ ['--position']: brand.pos }}
                        >
                            <img
                                src={`/images/brands/${brand.name}.svg`}
                                alt={brand.name}
                            />
                        </Item>
                    ))}
                </List>
            </Slider>
        </>
    );
};

export default Marquee;
