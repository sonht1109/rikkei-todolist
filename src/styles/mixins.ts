import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  absFill: css`
    position: absolute;
    inset: 0;
  `,

  clickable: css`
    cursor: pointer;
    user-select: none;
  `
};

export default mixins;
