const MOTIONS = {
  fade: {
    default: {
      opacity: 0,
    },
    entering: {
      opacity: 1,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 0,
    },
    exited: {
      opacity: 0,
    },
  },
  bounceIn: {
    default: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    entering: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
    },
    entered: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)',
    },
    exiting: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
    exited: {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)',
    },
  },
};

export const TIMING_FUNCTION = {
  ease: 'cubic-bezier(.25, .1, .25, 1)',
  linear: 'cubic-bezier(0,0,1,1)',
  'ease-in': 'cubic-bezier(.42,0,1,1)',
  'ease-out': 'cubic-bezier(0,0,.58,1)',
  'ease-in-out': 'cubic-bezier(.42,0,.58,1)',
};

export default MOTIONS;
