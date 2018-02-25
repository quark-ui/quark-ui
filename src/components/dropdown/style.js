export default theme => ({
  dropdown: {},
  'dropdown--menu': {
    background: theme['neutral-color'],
    borderColor: `1px solid ${theme['border-color']}`,
    borderRadius: 3,
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .13)',
    overflow: 'hidden',
  },
  'dropdown--menuItem': {
    padding: '0 19px',
    height: 39,
    lineHeight: '39px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme['border-color'],
      '& > a': {
        color: theme['brand-primary'],
      },
    },
    '& > a': {
      color: theme['text-color-dark'],
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  'dropdown--buttonWrap': {
    '& > button': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& > div': {
      display: 'inline-block',
      marginLeft: -1,
      '& button': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  },
});
