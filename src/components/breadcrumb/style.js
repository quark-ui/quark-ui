export default theme => ({
  breadcrumb: {
    fontSize: 14,
    '& > ul': {
      display: 'inline-block',
    },
  },
  item: {
    display: 'inline',
    color: theme['text-color-light'],
    '&:last-child': {
      '& $link': {
        color: theme['text-color-dark'],
      },
      '& $separator': {
        display: 'none',
      },
    },
  },
  icon: {
    '& span': {
      display: 'inline-block',
      marginRight: 6,
      width: 16,
      height: 16,
      color: '#fff',
      borderRadius: 2,
      backgroundColor: theme['brand-primary'],
      lineHeight: '14px',
      textAlign: 'center',
      verticalAlign: 'textTop',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme['brand-primary-light'],
        color: '#fff',
      },
      '&:active': {
        backgroundColor: theme['brand-primary-dark'],
      },
      '& svg': {
        transform: 'scale(0.75)',
      },
    },
  },
  link: {
    color: theme['text-color-light'],
    '&:hover': {
      color: theme['brand-primary'],
      textDecoration: 'none',
    },
    '&:active': {
      color: theme['brand-primary-dark'],
    },
  },
  separator: {
    margin: '0 5px',
  },
});
