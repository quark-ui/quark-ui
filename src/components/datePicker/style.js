export default theme => ({
  datePicker: {
  },
  datePicker__picker: {
    padding: 15,
    backgroundColor: theme['neutral-color'],
    border: `1px solid ${theme['border-color']}`,
    borderRadius: 3,
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, .1)',
    boxSizing: 'border-box',
  },
  datePicker_PaneHead: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  datePicker__headControlBtn: {
    backgroundColor: theme['neutral-color'],
    border: '0 none',
    color: theme['brand-primary'],
    '&:hover': {
      color: theme['brand-primary-dark'],
    },
  },
  datePicker__headJump: {
    display: 'inline-block',
    width: 180,
  },
  datePicker__headJumpBtn: {
    margin: [[0, 5]],
    backgroundColor: theme['neutral-color'],
    border: '0 none',
    fontSize: 16,
    '&:hover': {
      color: theme['brand-primary-dark'],
    },
  },
  grid: {
    textAlign: 'center',
    borderRadius: 0,
  },
  titleGrid: {
    composes: '$grid',
  },
  bodyGrid: {
    composes: '$grid',
    backgroundColor: theme['neutral-color'],
    border: `1px solid ${theme['border-color']}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: theme['text-color-dark'],
    '&:hover': {
      backgroundColor: theme['brand-primary-lightest'],
      color: theme['neutral-color'],
      borderColor: theme['brand-primary-lighter'],
      transform: 'translateZ(0)',
    },
    '&:active': {
      backgroundColor: theme['brand-primary-dark'],
      color: theme['neutral-color'],
      borderColor: theme['brand-primary'],
    },
  },
  datePicker__datePane: {
    width: 306,
  },
  datePicker__datePaneHead: {
    composes: '$datePicker_PaneHead',
  },
  datePicker_weekTitle: {
  },
  datePicker__weekTitleGrid: {
    composes: '$titleGrid',
    display: 'inline-block',
    width: 39,
    color: theme['text-color-light'],
    lineheight: 3,
  },
  datePicker__weekRow: {
    marginBottom: -1,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  datePicker__dayGrid: {
    composes: '$bodyGrid',
    marginLeft: -1,
    width: 40,
    height: 40,
    lineheight: '40px',
    '&:first-child': {
      marginLeft: 0,
    },
  },
  'datePicker__dayGrid--range': {
    backgroundColor: theme['brand-primary-lightest'],
    color: theme['brand-primary'],
    borderColor: theme['brand-primary-lighter'],
    transform: 'translateZ(0)',
  },
  'datePicker__dayGrid--active': {
    backgroundColor: theme['brand-primary'],
    borderColor: theme['brand-primary'],
    color: theme['neutral-color'],
    transform: 'translateZ(0)',
  },
  'datePicker__dayGrid--disabled': {
    color: theme['text-color-light'],
    cursor: 'not-allowed',
    textDecoration: 'line-through',
    '&:hover': {
      backgroundColor: theme['neutral-color'],
      color: theme['text-color-light'],
      borderColor: theme['border-color'],
      transform: 'none',
    },
    '&:active': {
      backgroundColor: theme['neutral-color'],
      color: theme['text-color-light'],
      borderColor: theme['border-color'],
    },
  },
  'datePicker__dayGrid--curMonth': {
  },
  'datePicker__dayGrid--lastMonth': {
    color: theme['text-color-light'],
  },
  'datePicker__dayGrid--nextMonth': {
    color: theme['text-color-light'],
  },
  /* monthPane */
  datePicker__monthPane: {
    width: 246,
  },
  datePicker__monthPaneHead: {
    composes: '$datePicker_PaneHead',
  },
  datePicker__monthBody: {
    marginTop: 12,
    whiteSpace: 'normal',
  },
  datePicker__monthGrid: {
    composes: '$bodyGrid',
    marginLeft: -1,
    marginBottom: -1,
    width: 72,
    height: 40,
    '&:nth-child(3n + 1)': {
      marginLeft: 0,
    },
  },
  'datePicker__monthGrid--active': {
    composes: '$datePicker__dayGrid--active',
  },
  /* yearPane */
  datePicker__yearPane: {
    width: 246,
  },
  datePicker__yearPaneHead: {
    composes: '$datePicker_PaneHead',
  },
  datePicker__yearBody: {
    marginTop: 12,
    whiteSpace: 'normal',
  },
  datePicker__yearGrid: {
    composes: '$bodyGrid',
    marginLeft: -1,
    marginBottom: -1,
    width: 72,
    height: 40,
    '&:nth-child(3n + 1)': {
      marginLeft: 0,
    },
  },
  'datePicker__yearGrid--active': {
    composes: '$datePicker__dayGrid--active',
  },
  'datePicker__yearGrid--jump': {
    color: '#999',
  },
  /* decadePane */
  datePicker__decadePane: {
    width: 306,
  },
  datePicker__decadePaneHead: {
    composes: '$datePicker_PaneHead',
  },
  'datePicker__decadePane--current': {
    fontSize: 16,
  },
  datePicker__decadeBody: {
    marginTop: 12,
    whiteSpace: 'normal',
  },
  datePicker__decadeGrid: {
    composes: '$bodyGrid',
    marginLeft: -1,
    marginBottom: -1,
    width: 92,
    height: 40,
    '&:nth-child(3n + 1)': {
      marginLeft: 0,
    },
  },
  'datePicker__decadeGrid--jump': {
    color: '#999',
  },
  'datePicker__decadeGrid--active': {
    composes: '$datePicker__dayGrid--active',
  },
  /* rangePicker */
  rangePicker: {
    background: '#fff',
    border: `1px solid ${theme['border-color']}`,
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, .1)',
    borderRadius: 3,
    whiteSpace: 'nowrap',
    '& $datePicker__picker': {
      display: 'inline-block',
      paddingBottom: 10,
      verticalAlign: 'top',
      boxShadow: 'none',
    },
    '& $datePicker__datePane, & $datePicker__monthPane, & $datePicker__yearPane, & $datePicker__decadePane': {
      width: 306,
      height: 322,
    },
    '& $datePicker__monthGrid, & $datePicker__yearGrid, & $datePicker__decadeGrid': {
      width: 92,
      height: 65,
    },
  },
  rangePicker__picker: {
    display: 'flex',
    '& $datePicker__picker': {
      border: '0 none',
    },
  },
  rangePicker__quickSelect: {
    padding: '15px 10px',
    borderBottom: `1px solid ${theme['border-color']}`,
    '& button': {
      marginRight: 10,
    },
  },
  rangePicker__action: {
    padding: [[12, 0]],
    textAlign: 'center',
    '& button': {
      margin: [[0, 20]],
      width: 180,
    },
  },
  'picker--start': {},
  'picker--end': {},
});
